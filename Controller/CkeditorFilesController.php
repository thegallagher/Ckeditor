<?php

App::uses('AppController', 'Controller');
App::uses('AwecmsUploader', 'Awecms.Lib');
App::uses('CakeEvent', 'Event');

class CkeditorFilesController extends AppController {

	protected $_functionNumber = null;

	public function beforeFilter() {
		parent::beforeFilter();

		if (!isset($this->request->query['CKEditorFuncNum'])) {
			throw new BadRequestException();
		}
		$this->_functionNumber = $this->request->query['CKEditorFuncNum'];

		$isAllowed = false;
		if ($this->Components->loaded('Auth')) {
			$isAllowed = $this->Auth->isAuthorized();
		} else {
			$eventName = 'Ckeditor.is_authorized';
			$globalListeners = CakeEventManager::instance()->listeners($eventName);
			$objectListeners = $this->getEventManager()->listeners($eventName);
			if (count($globalListeners) > 0 || count($objectListeners) > 0) {
				$event = new CakeEvent($eventName, $this, true);
				$this->getEventManager()->dispatch($event);
				$isAllowed = !$event->isStopped() && $event->result;
			}
		}

		if (!$isAllowed) {
			echo $this->_respond(
				$this->_functionNumber,
				false,
				__d('ckeditor', 'You are not logged in. Please login and try again.')
			);
			$this->_stop();
			return false;
		}
	}
	
	public function admin_upload() {
		$uploader = new AwecmsUploader($this->request);
		if ($uploader->upload('upload', 'form')) {
			$url = $uploader->getUploadedUrl();
			$message = __d('ckeditor', 'File uploaded successfully.');
		} else {
			$url = false;
			$message = $uploader->getLastErrorMessage();
		}
		$this->_respond($this->_functionNumber, $url, $message);
	}
	
	protected function _respond() {
		$args = func_get_args();
		$args = json_encode($args);
		$args = trim($args, '[]');
		$this->set('args', $args);
		$this->layout = false;
		return $this->render('response');
	}
	
}