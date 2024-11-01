<?php
/**
 * @package   Track_Package
 * @author    justcodeUA
 * @license   GPL-2.0+
 * @link      http://justcode.in.ua
 * @copyright 2017 justcodeUA
 *
 * @wordpress-plugin
 * Plugin Name:       Track Package отследживание посылок Новая Почта, Интайм, Автолюкс, Деливери и УкрПочта

 * Description:       Track Package - плагин отследживания посылок, почтовых отправлений, груза или товара. Трекинг доставки по номеру деларации, накладной или квитанции.
 * Version:           1.0.0
 * Author:            justcodeUA
 * Author URI:        http://justcode.in.ua
 * Text Domain:       track-package
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /languages
 */

/**
 *-----------------------------------------
 * Do not delete this line
 * Added for security reasons: http://codex.wordpress.org/Theme_Development#Template_Files
 *-----------------------------------------
 */
defined('ABSPATH') or die("Direct access to the script does not allowed");
/*-----------------------------------------*/

/*----------------------------------------------------------------------------*
 * Public-Facing Functionality
 *----------------------------------------------------------------------------*/

require_once plugin_dir_path(__FILE__) . 'includes/class-track-package.php';

/*
 * Register hooks that are fired when the plugin is activated or deactivated.
 * When the plugin is deleted, the uninstall.php file is loaded.
 */
register_activation_hook(__FILE__, array('Track_Package', 'activate'));
register_deactivation_hook(__FILE__, array('Track_Package', 'deactivate'));

add_action('plugins_loaded', array('Track_Package', 'get_instance'));

/*----------------------------------------------------------------------------*
 * Dashboard and Administrative Functionality
 *----------------------------------------------------------------------------*/

if (is_admin() && (!defined('DOING_AJAX') || !DOING_AJAX)) {

    require_once plugin_dir_path(__FILE__) . 'includes/admin/class-track-package-admin.php';
    add_action('plugins_loaded', array('Track_Package_Admin', 'get_instance'));

    require_once plugin_dir_path(__FILE__) . 'includes/admin/class-track-package-admin-pages.php';
    add_action('plugins_loaded', array('Track_Package_Admin_Pages', 'get_instance'));

}
/*----------------------------------------------------------------------------*
 * Register Plugin Shortcode
 *----------------------------------------------------------------------------*/

/* ----- Plugin Module: Shortcode ----- */

// Public Side
require_once plugin_dir_path(__FILE__) . 'includes/shortcode/class-track-package-shortcode-public.php';
add_action('plugins_loaded', array('Track_Package_Shortcode_Public', 'get_instance'));
/* ----- Module End: Shortcode ----- */