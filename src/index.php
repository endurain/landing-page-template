<?php

namespace C1Partners\PPCTemplate\Blocks;

add_action('plugins_loaded', __NAMESPACE__ . '\register_dynamic_block');

function register_dynamic_block() {
  // Only load if Gutenberg is available.
  if (!function_exists('register_block_type')) {
    return;
  }

  // Hook server side rendering into render callback
  // Make sure name matches registerBlockType in ./index.js
  register_block_type('cgb/block-google-reviews', array(
    'render_callback' => __NAMESPACE__ . '\render_dynamic_block'
  ));
}

function render_dynamic_block($attributes) {

  ob_start(); // Turn on output buffering

    /* BEGIN HTML OUTPUT */
  ?>
  <header>
    <div class="ppc-navigation">
       test
    </div>
  </header>
  <section class="ppc-hero">
  <?php echo do_shortcode('[gravityform id="1" title="false" description="false" ajax="true" tabindex="49"]') ?>
  </section>
  <section>
    <div>
      
    </div>
  </section>

  <?php
    /* END HTML OUTPUT */

  $output = ob_get_contents(); // collect output
  ob_end_clean(); // Turn off ouput buffer

  return $output; // Print output
}