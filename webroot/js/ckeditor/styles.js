/**
 * Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin, which shows a combo
// in the editor toolbar, containing all styles. Other plugins instead, like
// the div plugin, use a subset of the styles on their feature.
//
// If you don't have plugins that depend on this file, you can simply ignore it.
// Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.

CKEDITOR.stylesSet.add( 'bootstrap', [
	/* Block Styles */

	{ name: 'Lead Paragraph', element: 'p', attributes: { 'class': 'lead' } },

	//{ name: 'Text Align Left', element: 'p', attributes: { 'class': 'text-left' } },
	//{ name: 'Text Align Center', element: 'p', attributes: { 'class': 'text-center' } },
	//{ name: 'Text Align Right', element: 'p', attributes: { 'class': 'text-right' } },

	//{ name: 'Pull Right', element: 'blockquote', attributes: { 'class': 'pull-right' } },


	/* Inline Styles */

	{ name: 'Text Color Muted', element: 'span', attributes: { 'class': 'muted' } },
	{ name: 'Text Color Warning', element: 'span', attributes: { 'class': 'text-warning' } },
	{ name: 'Text Color Error', element: 'span', attributes: { 'class': 'text-error' } },
	{ name: 'Text Color Info', element: 'span', attributes: { 'class': 'text-info' } },
	{ name: 'Text Color Success', element: 'span', attributes: { 'class': 'text-success' } },

	{ name: 'Initialism', element: 'abbr', attributes: { 'class': 'initialism' } },
	//{ name: 'Initialism', element: 'abbr', attributes: { 'class': 'initialism' } }


	/* Object Styles */

	{ name: 'Unstyled List', element: 'ul', attributes: { 'class': 'unstyled' } },
	{ name: 'Horizontal Definition List', element: 'dl', attributes: { 'class': 'dl-horizontal' } },

	{ name: 'Table', element: 'table', attributes: { 'class': 'table' } },
	{ name: 'Table Stripped', element: 'table', attributes: { 'class': 'table table-striped' } },
	{ name: 'Table Bordered', element: 'table', attributes: { 'class': 'table table-bordered' } },
	{ name: 'Table Hover', element: 'table', attributes: { 'class': 'table table-hover' } },
	{ name: 'Table Condensed', element: 'table', attributes: { 'class': 'table table-condensed' } },
	{ name: 'Table Row Success', element: 'tr', attributes: { 'class': 'success' } },
	{ name: 'Table Row Error', element: 'tr', attributes: { 'class': 'error' } },
	{ name: 'Table Row Warning', element: 'tr', attributes: { 'class': 'warning' } },
	{ name: 'Table Row Info', element: 'tr', attributes: { 'class': 'info' } },

	/*
	{ name: 'Form Search', element: 'form', attributes: { 'class': 'form-search' } },
	{ name: 'Form Search Query', element: 'input', attributes: { 'class': 'search-query', 'type': 'search' } },
	{ name: 'Form Inline', element: 'form', attributes: { 'class': 'form-inline' } },
	{ name: 'Form Horizontal', element: 'form', attributes: { 'class': 'form-horizontal' } },
	{ name: 'Form Control Group', element: 'div', attributes: { 'class': 'control-group' } },
	{ name: 'Form Control Group Warning', element: 'div', attributes: { 'class': 'control-group warning' } },
	{ name: 'Form Control Group Error', element: 'div', attributes: { 'class': 'control-group error' } },
	{ name: 'Form Control Group Info', element: 'div', attributes: { 'class': 'control-group info' } },
	{ name: 'Form Control Group Success', element: 'div', attributes: { 'class': 'control-group success' } },
	{ name: 'Form Controls', element: 'div', attributes: { 'class': 'controls' } },
	{ name: 'Form Controls Row', element: 'div', attributes: { 'class': 'controls controls-row' } },
	{ name: 'Form Actions', element: 'div', attributes: { 'class': 'form-actions' } },
	{ name: 'Form Label', element: 'label', attributes: { 'class': 'control-label' } },
	{ name: 'Form Checkbox Inline', element: 'label', attributes: { 'class': 'checkbox inline' } },
	{ name: 'Form Input Prepend', element: 'div', attributes: { 'class': 'input-prepend' } },
	{ name: 'Form Input Append', element: 'div', attributes: { 'class': 'input-append' } },
	{ name: 'Form Input Add-on', element: 'span', attributes: { 'class': 'add-on' } },
	{ name: 'Form Input Size Block', element: 'input', attributes: { 'class': 'input-block-level' } },
	{ name: 'Form Input Size Mini', element: 'input', attributes: { 'class': 'input-mini' } },
	{ name: 'Form Input Size Small', element: 'input', attributes: { 'class': 'input-small' } },
	{ name: 'Form Input Size Medium', element: 'input', attributes: { 'class': 'input-medium' } },
	{ name: 'Form Input Size Large', element: 'input', attributes: { 'class': 'input-large' } },
	{ name: 'Form Input Size X Large', element: 'input', attributes: { 'class': 'input-xlarge' } },
	{ name: 'Form Input Size XX Large', element: 'input', attributes: { 'class': 'input-xxlarge' } },
	{ name: 'Form Input Uneditable', element: 'span', attributes: { 'class': 'uneditable-input' } },
	{ name: 'Form Help Inline', element: 'span', attributes: { 'class': 'help-inline' } },
	{ name: 'Form Help Block', element: 'span', attributes: { 'class': 'help-block' } },
	*/

	{ name: 'Button', element: 'a', attributes: { 'class': 'btn' } },
	{ name: 'Button Primary', element: 'a', attributes: { 'class': 'btn btn-primary' } },
	{ name: 'Button Info', element: 'a', attributes: { 'class': 'btn btn-info' } },
	{ name: 'Button Success', element: 'a', attributes: { 'class': 'btn btn-success' } },
	{ name: 'Button Warning', element: 'a', attributes: { 'class': 'btn btn-warning' } },
	{ name: 'Button Danger', element: 'a', attributes: { 'class': 'btn btn-danger' } },
	{ name: 'Button Link', element: 'a', attributes: { 'class': 'btn btn-link' } },
	{ name: 'Button Large', element: 'a', attributes: { 'class': 'btn btn-large' } },
	{ name: 'Button Small', element: 'a', attributes: { 'class': 'btn btn-small' } },
	{ name: 'Button Mini', element: 'a', attributes: { 'class': 'btn btn-mini' } },
	{ name: 'Button Block', element: 'a', attributes: { 'class': 'btn btn-block' } },
	{ name: 'Button Disabled', element: 'a', attributes: { 'class': 'btn disabled' } },
	/*
	{ name: 'Button Group', element: 'div', attributes: { 'class': 'btn-group' } },
	{ name: 'Button Group Vertical', element: 'div', attributes: { 'class': 'btn-group btn-group-vertical' } },
	{ name: 'Button Toolbar', element: 'div', attributes: { 'class': 'btn-toolbar' } },
	{ name: 'Button Dropdown Toggle', element: 'a', attributes: { 'class': 'dropdown-toggle', 'data-toggle': 'dropdown' } },
	*/

	{ name: 'Image Rounded', element: 'img', attributes: { 'class': 'img-rounded' } },
	{ name: 'Image Circle', element: 'img', attributes: { 'class': 'img-circle' } },
	{ name: 'Image Polaroid', element: 'img', attributes: { 'class': 'img-polaroid' } },

	/*
	{ name: 'Menu Dropdown', element: 'div', attributes: { 'class': 'dropdown' } },
	{ name: 'Menu Dropdown Menu', element: 'ul', attributes: { 'class': 'dropdown-menu' } },
	{ name: 'Menu Item Submenu', element: 'li', attributes: { 'class': 'dropdown-submenu' } },
	{ name: 'Menu Item Divider', element: 'li', attributes: { 'class': 'divider' } },
	{ name: 'Menu Item Disabled', element: 'li', attributes: { 'class': 'disabled' } },
	{ name: 'Menu Item Disabled', element: 'li', attributes: { 'class': 'disabled' } },
	*/

	{ name: 'Thumbnails', element: 'ul', attributes: { 'class': 'thumbnails' } },
	{ name: 'Thumbnails Item', element: 'a', attributes: { 'class': 'thumbnail' } },

	{ name: 'Label', element: 'span', attributes: { 'class': 'label' } },
	{ name: 'Label Success', element: 'span', attributes: { 'class': 'label label-success' } },
	{ name: 'Label Warning', element: 'span', attributes: { 'class': 'label label-warning' } },

	{ name: 'Well', element: 'div', attributes: { 'class': 'well' } },
	{ name: 'Well Large', element: 'div', attributes: { 'class': 'well well-large' } },
	{ name: 'Well Small', element: 'div', attributes: { 'class': 'well well-small' } },

	{ name: 'Pull Left', element: 'div', attributes: { 'class': 'pull-left' } },
	{ name: 'Pull Right', element: 'div', attributes: { 'class': 'pull-right' } },
	{ name: 'Clear Fix', element: 'div', attributes: { 'class': 'clearfix' } },


]);

