$(document).ready(function() {

  // Sticky navigation
  $('.js--section-features').waypoint(function(direction) {
    if (direction === "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  })


  // Scroll on buttons - method 1
  $('.js--scroll-to-plans').click(function () {
    // the animation scrolls to the top of the js--section-plans with a speed of 1000ms
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
  });

  $('.js--scroll-to-start').click(function () {
    // the animation scrolls to the top of the js--section-plans with a speed of 1000ms
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
  });


  // Navigation scroll - method 2
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    // Animations on scroll
    $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    }, {
      offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated pulse');
    }, {
      offset: '50%'
    });

    // Mobile Navigation
    $('.js--nav-icon').click(function() {
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon>i');

      // Toggle the box open in 0.2 seconds
      if ($(window).width() < 768){
        nav.slideToggle(200);
      }

      // Remove hamburger icon and add cross
      if (icon.hasClass('ion-ios-menu')) {
        icon.addClass('ion-md-close');
        icon.removeClass('ion-ios-menu');
      } else {
        // Remove cross icon and add hamburger
        icon.addClass('ion-ios-menu');
        icon.removeClass('ion-md-close');
      }

    });

});
