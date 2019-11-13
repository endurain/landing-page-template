<?php
/**
 * Plugin Name: Ensuite
 * Plugin URI:
 * Description: A Gutenberg suite of custom blocks for WordPress
 * Author: Zac Sanders (Endurain)
 * Author URI: github.com/endurain
 * Version: 1.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *test
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
