<?php

/**
 * C1 Partners PPC Landing Page Template
 *
 * @link https://c1partners.com
 *
 */


get_header();

while ( have_posts() ) :

  the_post();

  ?>
  
  <article class="template-wrap">
    <header class="page-header">

    </header>
    <div class="page-content">
      <?php the_content(); ?>
    </div>
  </article>

  <?php
endwhile;

get_footer();