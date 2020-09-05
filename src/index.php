<?php


function render_dynamic_template($attributes) {

  ob_start(); // Turn on output buffering

    /* BEGIN HTML OUTPUT */
  ?>
  <?php 
  //strip slahes and parenthesis from phone #
  $phone = $attributes['phoneNumber'];
  $phoneReplaced = preg_replace('/\D+/', '', $phone);

  ?>
<!-- <pre>
<?php print_r($attributes); ?>
</pre> -->

    <div class="js-ppc-header ppc-header">
      <div class="ppc-navigation">
        <ul>
          <li><a href="#one">Disorders</a></li>
          <li><a href="#two">Treatment</a></li>
          <li><a href="#three">About Us</a></li>
          <li><a href="#four">Contact Us</a></li>
          <li><a href="tel:+1<?php echo $phoneReplaced ?>"><?php echo $phone ?></a></li>
        </ul>  
      </div>
    </div>
    </header>
    <section class="ppc-hero">
      <picture>
        <source srcset="<?php echo $attributes['imageUrl'] ?>" media="(min-width: 800px)">
        <img src="<?php echo $attributes['imageUrl'] ?>" alt="" />
      </picture>
      <div class="ppc-hero-content">
        <div class="ppc-hero-text">
          <h2><?php echo $attributes['heroHeading'] ?></h2>
          <h3><?php echo $attributes['heroSubText'] ?></h3>
        </div>
        <div class="ppc-hero-form">
          <?php gravity_form( $attributes['formID'], false, false, false, true, 3); ?>
        </div>
      </div>  
    </section>
    <section id="one">
      <div class="ppc-section-one-content">
        <?php echo $attributes['sectionOne'] ?>
      </div>
    </section>
    <section id="two">
      <div class="ppc-section-two-content">
        <?php echo $attributes['sectionTwo'] ?>
      </div>
    </section>
    <section id="three">
      <div>
      <img src="<?php echo $attributes['ctaImage'] ?>" alt="" />
      </div>
    </section>
    <section id="four" style="height: 500px;">
      <div>
        <h1>Contact Us</h1>
      </div>
    </section>

  <?php
    /* END HTML OUTPUT */

  $output = ob_get_contents(); // collect output
  ob_end_clean(); // Turn off ouput buffer

  return $output; // Print output
}