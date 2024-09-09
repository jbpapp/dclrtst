<?php

/**
 * Add support for dinamically generate the page's title tag.
 */
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
});

/**
 * Enqueue the necessary scripts.
 * If the site's environment is set to `development`, we will use the leverage of Vitejs to
 * automatically reload the page if a file changes.
 * Otherwise we are using the the built scripts.
 */
add_action('wp_enqueue_scripts', function () {
    if (defined('WP_ENV') && WP_ENV === 'development') {
        wp_enqueue_script('vite-client', home_url() . ':5173/@vite/client', [], null, true);
        wp_enqueue_script('dclr-scripts-js', home_url() . ':5173/assets/js/scripts.jsx', [], null, true);
        wp_enqueue_style('dclr-styles-css', home_url() . ':5173/assets/css/styles.css', [], null, true);
    } else {
        $manifest = json_decode(file_get_contents(get_template_directory() . '/dist/.vite/manifest.json'), true);

        $js = get_vite_asset_url('assets/js/scripts.jsx');
        $css = get_vite_asset_url('assets/js/scripts.jsx', 'css');

        if ($js) {
            wp_enqueue_script('dclr-scripts-js', $js, [], null, true);
        }

        if ($css) {
            wp_enqueue_style('dclr-styls-css', $css, [], null);
        }
    }
});

/**
 * Add type="module" for those script that requires it.
 */
add_filter('script_loader_tag', function ($tag, $handle, $src) {
    if (in_array($handle, ['vite-client', 'dclr-scripts-js'])) {
        return '<script type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}, 10, 3);

/**
 * Determine the proper url of a compiled asset file.
 */
if (! function_exists('get_vite_asset_url')) {
    function get_vite_asset_url($entry, $type = 'js')
    {
        $manifest_path = get_template_directory() . '/dist/.vite/manifest.json';

        if (file_exists($manifest_path)) {
            $manifest = json_decode(file_get_contents($manifest_path), true);
            if (isset($manifest[$entry])) {
                if ($type === 'css' && !empty($manifest[$entry]['css'])) {
                    return esc_url(get_template_directory_uri() . '/dist/' . $manifest[$entry]['css'][0]);
                }
                return esc_url(get_template_directory_uri() . '/dist/' . $manifest[$entry]['file']);
            }
        }
        return null;
    }
}
