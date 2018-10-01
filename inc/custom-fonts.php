 <?php
/**
 * Sample implementation for Registering Custom fonts
 *
 *
 * @package csdhometheme
 */

 // No direct access, please
if (!defined('ABSPATH')) exit; // Exit if accessed directly
 
function csdhometheme_fonts_url() {

	$fonts_url = '';

	/*
	 * Translators: If there are characters in your language that are not
	 * supported by Lora, translate this to 'off'. Do not translate
	 * into your own language.
	 */

	$lora = _x( 'on', 'lora font: on or off', 'csdhometheme' );

	if ( 'off' !== $lora ) {
		$font_families = array();

		$font_families[] = 'Lora:400,400i,700';

		$query_args = array(
			'family' => urlencode( implode( '|', $font_families ) ),
			'subset' => urlencode( 'latin,latin-ext' ),
		);

		$fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
	}

	return esc_url_raw( $fonts_url );
}

/**
 * Add preconnect for Google Fonts.
 *
 * @since Twenty Seventeen 1.0
 *
 * @param array  $urls           URLs to print for resource hints.
 * @param string $relation_type  The relation type the URLs are printed.
 * @return array $urls           URLs to print for resource hints.
 */
function csdhometheme_resource_hints($urls, $relation_type)
{
	if (wp_style_is('csdhometheme-fonts', 'queue') && 'preconnect' === $relation_type) {
		$urls[] = array(
			'href' => 'https://fonts.gstatic.com',
			'crossorigin',
		);
	}

	return $urls;
}

add_filter('wp_resource_hints', 'csdhometheme_resource_hints', 10, 2);