<?php
class CkeditorHelper extends FormHelper {

	public $helpers = array('Html', 'Form');
	protected static $_initilized = false;

	public function input($field, $options = array()) {
		$options = $this->_init($field, $options);
		$options = $this->_initInputField($field, $options);
		
		if (!isset($options['type'])) {
			$options['type'] = 'textarea';
		}
		
		$scriptOptions = array('baseHref' => $this->url('/', true));
		$plugins = App::objects('plugin');
		if (in_array('Uploader', $plugins)) {
			$scriptOptions['filebrowserUploadUrl'] = $this->webroot . 'admin/ckeditor/files/upload';
		}
		
		$script = sprintf('CKEDITOR.replace(%s, %s);', json_encode($options['name']), json_encode($scriptOptions));
		$this->Html->scriptBlock($script, array('inline' => false));
		return $this->Form->input($field, $options);
	}
	
	public function beforeRender($viewFile) {
		if (!self::$_initilized) {
			$this->Html->script('Ckeditor.ckeditor/ckeditor', array('inline' => false));
			self::$_initilized = true;
		}
	}
	
	protected function _init($field, $options) {
		$this->Form->setEntity($field);
		$options = $this->Form->_name($options);
		$options = $this->Form->value($options);
		$options = $this->Form->domId($options);
		return $options;
	}

}