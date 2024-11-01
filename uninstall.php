<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * @package   Track_Package
 * @author    justcodeUA
 * @license   GPL-2.0+
 * @link      http://justcode.in.ua
 * @copyright 2017 justcodeUA
 */

// If uninstall not called from WordPress, then exit
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

global $wpdb;