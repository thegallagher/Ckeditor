<?php
/*
 * Adapted from http://bakery.cakephp.org/articles/wernerhp/2010/08/31/cksource-helper-for-ckeditor
 * Credit to wernerhp.
 */
class CkeditorHelper extends FormHelper {

	public $helpers = array('Html');

	public function input($field, $options = array()) {
		$options = $this->_initInputField($field, $options);
		$value = null;
		$config = null;
		$events = null;

		if (array_key_exists('value', $options)) {
			$value = $options['value'];
			unset($options['value']);
		}
		if (array_key_exists('config', $options)) {
			$config = $options['config'];
			unset($options['config']);
		}
		if (array_key_exists('events', $options)) {
			$events = $options['events'];
			unset($options['events']);
		}

		App::import('Vendor', 'Ckeditor.ckeditor');
		$CKEditor = new CKEditor();
		$CKEditor->basePath = $this->webroot . 'ckeditor/js/ckeditor/';
		
		$plugins = App::objects('plugin');
		if (in_array('Uploader', $plugins)) {
			$CKEditor->config['filebrowserUploadUrl'] = $this->webroot . 'admin/ckeditor/files/upload';
		}

		return $CKEditor->editor($options['name'], $value, $config, $events);
	}
}