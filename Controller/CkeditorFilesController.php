<?php

App::uses('AppController', 'Controller');
App::uses('Uploader', 'Uploader.Vendor');
App::uses('CakeEvent', 'Event');

class CkeditorFilesController extends AppController {

	protected $_action;
	protected $_isAllowed = true;
	
	public function beforeFilter() {
		parent::beforeFilter();
		
		// Change action so that we can check if the user is allowed in the filter phase
		$this->_action = $this->params['action'];
		$this->params['action'] = 'pre_action';
		
		// If the Auth component is not in use then use an alternative authorization mechanism
		if (!$this->Components->attached('Auth')){
			$this->_isAllowed = false;
			$eventName = 'FileManager.is_authorized';
			$eventManager = $this->getEventManager();
			$globalListners = CakeEventManager::instance()->listeners($eventName);
			$localListners = $eventManager->listeners($eventName);
			if (count($globalListners) || count($localListners)) {
				$event = new CakeEvent($eventName, $this, true);
				$eventManager->dispatch($event);
				$this->_isAllowed = !$event->isStopped() && $event->result;
			}
		}
	}
	
	public function pre_action() {
		if (!$this->_isAllowed) {
			if (!isset($this->request->query['CKEditorFuncNum'])) {
				throw new UnauthorizedException();
			} else {
				$this->response->statusCode(401);
				$funcNum = $this->request->query['CKEditorFuncNum'];
				$this->_response($funcNum, false, __('You are not logged in. Please login then try again.'));
			}
		} else {
			return $this->{$this->_action}();
		}
	}
	
	public function admin_upload() {
		if (!isset($this->request->query['CKEditorFuncNum'])) {
			throw new BadRequestException();
		}
		$funcNum = $this->request->query['CKEditorFuncNum'];
		
		$settings = array(
			'uploadDir' => 'img/upload/',
			'saveAsFilename' => true,
		);
		$this->Uploader = new Uploader($settings);
		$data = $this->Uploader->upload('upload');
		if ($data) {
			$url = Router::url($data['path']);
			$message = 'File uploaded sucessfully.';
		} else {
			$url = false;
			$message = 'The file could not be uploaded.';
		}
		$this->_response($funcNum, $url, __($message));
	}
	
	protected function _response() {
		$args = func_get_args();
		$args = json_encode($args);
		$args = trim($args, '[]');
		$this->set('args', $args);
		$this->layout = false;
		$this->render('response');
	}
	
}