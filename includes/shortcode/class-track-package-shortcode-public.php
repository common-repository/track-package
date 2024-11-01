<?php
/**
 * Track Package Plugin
 *
 * @package   Track_Package_Shortcode_Public
 * @author    justcodeUA
 * @license   GPL-2.0+
 * @link      http://justcode.in.ua
 * @copyright 2017 justcodeUA
 */

/**
 *-----------------------------------------
 * Do not delete this line
 * Added for security reasons: http://codex.wordpress.org/Theme_Development#Template_Files
 *-----------------------------------------
 */
defined( 'ABSPATH' ) or die( "Direct access to the script does not allowed" );
/*-----------------------------------------*/

/**
 * Handle Plugin Shortcode Public Side Features
 */
class Track_Package_Shortcode_Public {

	/**
	 * Instance of this class.
	 *
	 * @since    1.0.0
	 *
	 * @var      object
	 */
	protected static $instance = null;

	/**
	 * Initialize the class
	 *
	 * @since     1.0.0
	 */
	private function __construct() {
		/**
		 * Call $plugin_slug from public plugin class.
		 */
		$plugin               = Track_Package::get_instance();
		$this->plugin_slug    = $plugin->get_plugin_slug();
		$this->plugin_version = $plugin->get_plugin_version();

		if(!is_admin()){
			// Register the script like this for a plugin:
			wp_enqueue_style($this->plugin_slug . '-front-styles', plugins_url('../admin/assets/css/front.css', __FILE__), array(), $this->plugin_version);

			// Main Admin JS Script
			wp_enqueue_script($this->plugin_slug . '-front-script', plugins_url('../admin/assets/js/front.js', __FILE__), array(), $this->plugin_version,true);
		}

	}
	/**
	 * Return an instance of this class.
	 *
	 * @since     1.0.0
	 *
	 * @return    object    A single instance of this class.
	 */
	public static function get_instance() {

		// If the single instance hasn't been set, set it now.
		if ( null == self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	/**
	 * Render Shortcode [plugin_shorcode]
	 *
	 * @since     1.0.0
	 */
	public function render_sc( $atts, $content = "" ) {
		extract( shortcode_atts( array(
			'id' => '',
		), $atts ) );

		$id = (int) $id;

		if ( ! $id ) {
			return '';
		}

		$contentValue = $content ? $content : __( 'Track Package Plugin Shorcode', 'track-package' );

		return '<span data-some-attr-id="' . $id . '" style="cursor:pointer;">' . $contentValue . '</span>';

	}

	public function constructor_form() {
		return '
			<div class="tpw_widget-wrap">
				<div class="tpw_widget">
					<div class="loader"><p class="spin"></p></div>
					<a href="https://track-package.com.ua/" class="linktoservice">Отследить посылку</a>
					<form action="https://track-package.com.ua" data-lang="ru">
						<div class="tpw-row">
							<select name="del_types" class="tpw_types">
								<option value="novaposhta">Новая почта</option>
								<option value="intime">Интайм</option>
								<option value="ukrposhta">Укрпочта</option>
								<option value="autolux">Автолюкс</option>
								<option value="delivery_auto">Деливери</option>
							</select>
						</div>
						<div class="tpw-row tpw-input">
							<input type="text" placeholder="Отследить посылку" class="tpw_track">
						</div>
						<div class="tpw-row">
							<button class="progress-button tpw-btn">Отследить</button>
						</div>
					</form>
				</div>
				<div class="tpw_result"></div>
			</div>';
	}
}

/**
 * Register [plugin_shorcode] shortcode
 *
 * usage: [plugin_shorcode id='entry-id']Preview[/plugin_shorcode]
 * or: [plugin_shorcode id='entry-id' /]
 *
 * @since    1.0.0
 */
add_shortcode( 'plugin_shorcode', array( Track_Package_Shortcode_Public::get_instance(), 'render_sc' ) );
add_shortcode( 'constructor', array( Track_Package_Shortcode_Public::get_instance(), 'constructor_form') );