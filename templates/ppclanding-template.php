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
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <article class="ppclanding-template">
    <div class="template-wrap">
      <?php the_content(); ?>
    </div>
  </article>

  <script>
    
    //Hide header on this template page//
    $(function() {
      $('header').hide();
    });

    //Smoooooth jQuery scroll
    $( document ).ready(function() {
      $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname) {
    
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 300 );
        }
      }
    });
  });
 
  // Sticky Nav
  let stickyNav = $('.js-ppc-header').offset().top;

  $(window).scroll(function() {

    let siteMain = $('.template-wrap'),
        siteHeader = $('.js-ppc-header');

    if ($(window).scrollTop() > stickyNav) {
      var $primaryWrap = siteHeader.addClass('ppc-fixed').css('top','0');
      siteMain.css('padding-top', $primaryWrap.outerHeight());
    }
    else {
      siteHeader.removeClass('ppc-fixed').css('top','');
      siteMain.css('padding-top','');
    }
  });

  </script>

  <?php
endwhile;

get_footer();