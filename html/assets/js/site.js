!function() {
  // Web Font Loader
  WebFont.load({
    google: {
      families: ['Open Sans:400,400i,600,700']
    }
  });

  // magnific popups
  $('.js-play-btn').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    /*

    $('.js-newsletter-form').magnificPopup({
      type: 'inline',
      preloader: false,
      removalDelay: 300,
      mainClass: 'modal--zoom-in',
    });
      */



  var anim = document.querySelector('.animsition');
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '<div class="loader"></div>',
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'body'
  });

  // lazy load images
  var images = document.querySelectorAll('[data-src]');
  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var src = image.getAttribute('data-src');
    image.src = src;
  }

  $('.newsletter-form').submit(function(e) {
      e.preventDefault();
      var postdata = $('.form').serialize();


      $.ajax({
        type: 'POST',
        url: window.location.protocol + '//' + window.location.host + '/assets/lib/mailchimp/submit.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
          console.log(json);
          if(json.valid == 0) {
            $('.newsletter-form .form__error').hide();
            $('.newsletter-form .form__error').html(json.message);
            $('.newsletter-form .form__error').fadeIn('fast', function(){});
          }
          else {
            $('.newsletter-form .form__error').hide();
            $('.newsletter-form .form__content').fadeOut(function() {
              $('.newsletter-form .form__success').html(json.message).fadeIn();
            });
            fbq('track', 'Lead');
          }
        }
      });
    });

  $('.js-newsletter-form').submit(function(e) {

      e.preventDefault();
      var postdata = $('.js-newsletter-form').serialize();


      $.ajax({
        type: 'POST',
        url: window.location.protocol + '//' + window.location.host + '/assets/lib/mailchimp/submit.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
          if(json.valid == 0) {
            $('.js-newsletter-form .form__error').hide();
            $('.js-newsletter-form .form__error').html(json.message);
            $('.js-newsletter-form .form__error').fadeIn('fast', function(){});
          }
          else {
            $('.js-newsletter-form .form__error').hide();
            $('.js-newsletter-form .form__content').fadeOut(function() {
              $('.js-newsletter-form .form__success').html(json.message).fadeIn();
            });
            fbq('track', 'Lead');
          }
        }
      });
    });

  $('.js-message-form').submit(function(e) {
      e.preventDefault();
      var postdata = $('.form').serialize();


      $.ajax({
        type: 'POST',
        url: window.location.protocol + '//' + window.location.host + '/assets/lib/hit-me.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
          if(json.valid == 0) {
            $('.js-message-form .form__error').hide();
            $('.js-message-form .form__error').html(json.message);
            $('.js-message-form .form__error').fadeIn('fast', function(){});
          }
          else {
            $('.js-message-form .form__error').hide();
            $('.js-message-form .form__content').fadeOut(function() {
              $('.js-message-form .form__success').html(json.message).fadeIn();
            });
            fbq('track', 'Lead');
          }
        }
      });
    });

}();