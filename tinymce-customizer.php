<?php
/**
 * Plugin Name: TinyMCE Customizer
 * Description: Reorganization standard buttons panel of TinyMCE and append custom buttons for insert specific blocks of code.
 * Author: Denis Luttcev
 * Version: 1.0.0
 * Text Domain: tinymce-customizer
 */

// Exit if call directly
if ( ! defined( 'WPINC' ) ) {
	die;
}

class TinyMCECustomizer {

	public function __construct() {
		add_action( 'init', array( $this, 'init' ) );
	}

	// Initialize the plugin
	public function init() {
		// Loads the buttons if user has permissions
		add_action( 'admin_head', array( $this, 'tinyMCE_buttons_init' ) );
	}

	// TinyMCE Buttons Init
	public function tinyMCE_buttons_init() {

		// Exit if user can't edit posts
		if ( ! current_user_can( 'edit_posts') && ! current_user_can( 'edit_pages' ) ) {
   			return;
    	}

		// Exit if rich editing is not enable
    	if ( 'true' != get_user_option( 'rich_editing' ) ) {
	    	return;
	    }

		add_filter( 'mce_external_plugins', array( $this, 'add_tinyMCE_plugins' ) );
		add_filter( 'mce_buttons', array( $this, 'reorganize_tinyMCE_buttons_panel_1' ) );
		add_filter( 'mce_buttons_2', array( $this, 'reorganize_tinyMCE_buttons_panel_2' ) );
		add_filter( 'mce_buttons_3', array( $this, 'reorganize_tinyMCE_buttons_panel_3' ) );

	}

	// Adds the buttons to TinyMCE
	function reorganize_tinyMCE_buttons_panel_1( $buttons ) {
	   return array('formatselect', 'bold', 'italic', 'underline', '|', 'bullist', 'numlist', 'blockquote', 'link', '|', 'blockquote_cites', 'division', 'factoid', '|', 'left_field', 'left_block', 'center_block', 'fullwidth', 'right_block', 'right_field', 'dfw');
	}

	function reorganize_tinyMCE_buttons_panel_2( $buttons ) {
	   return array('fontsizeselect', 'forecolor', 'backcolor', '|', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', '|', 'outdent', 'indent', '|', 'removeformat');
	}

	function reorganize_tinyMCE_buttons_panel_3( $buttons ) {
	   return array('charmap', 'hr', '|', 'undo', 'redo', '|', 'wp_help', 'wp_view');
	}

	// Loads the javascript required for the custom TinyMCE buttons
	function add_tinyMCE_plugins( $plugin_array ) {
	   	$plugin_array['blockquote_cites'] = plugins_url( 'blockquotes-cites.js', __FILE__ );
		$plugin_array['division'] = plugins_url( 'division.js', __FILE__ );
		$plugin_array['factoid'] = plugins_url( 'factoid.js', __FILE__ );
		$plugin_array['left_block'] = plugins_url( 'left-block.js', __FILE__ );
		$plugin_array['right_block'] = plugins_url( 'right-block.js', __FILE__ );
		$plugin_array['center_block'] = plugins_url( 'center-block.js', __FILE__ );
		$plugin_array['left_field'] = plugins_url( 'left-field.js', __FILE__ );
		$plugin_array['right_field'] = plugins_url( 'right-field.js', __FILE__ );
		$plugin_array['fullwidth'] = plugins_url( 'fullwidth.js', __FILE__ );
		// Adds specific custom formats
		$plugin_array['tinymce_my_format_init'] = plugins_url( 'tinymce-my-format-init.js', __FILE__ );
		return $plugin_array;
	}

}

new TinyMCECustomizer;


// Reorganization standard TinyMCE Formats button
function mce_formats( $init ) {
	$formats = array(
		'p'          => __( 'Paragraph', 'text-domain' ),
		'h2'         => __( 'Heading 2', 'text-domain' ),
		'h3'         => __( 'Heading 3', 'text-domain' ),
		'h4'         => __( 'Заголовок 4 (для врезок)', 'text-domain' ),
	);
	array_walk( $formats, function ( $key, $val ) use ( &$block_formats ) {
		$block_formats .= esc_attr( $key ) . '=' . esc_attr( $val ) . ';';
	}, $block_formats = '' );
	$init['block_formats'] = $block_formats;
	return $init;
}


// Customize TinyMCE editor font-sizes
function am_tiny_mce_font_size( $initArray ){
	$initArray['fontsize_formats'] = "10px 12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 60px 72px 84px 96px";// Add as needed
	return $initArray;
}

add_filter( 'tiny_mce_before_init', 'am_tiny_mce_font_size' );
add_filter( 'tiny_mce_before_init', __NAMESPACE__ . '\\mce_formats' );
?>