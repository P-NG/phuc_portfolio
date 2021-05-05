console.log('sdfa')
$(document).ready(function() {
  console.log('hi');
  var cohartItem = document.getElementById('cohart');
  var footer = document.getElementsByClassName('footer-container')[0];
  var aboutButton = document.getElementsByClassName('about-button')[0];


  $(function() {
    $('#r-mobile-arrow').hide();
    $('.about-button').click(function() {
      $('html,body').animate({
        scrollTop: $('.footer-container').offset().top
      }, 1000);
    });

    $('.web-work-button').click(function() {
      $('#r-mobile-arrow').hide();
      $('#r-web-arrow').show();
      $('div.mobile-work-active').removeClass('mobile-work-active')
      $(this).addClass("web-work-active")
      $('html,body').animate({
        scrollTop: $('.overview-container').offset().top - 300
      }, 500);

    });

    $('.mobile-work-button').click(function() {
      $('#r-web-arrow').hide();
      $('#r-mobile-arrow').show();
      $('.web-work-button').removeClass('web-work-active');
      $(this).addClass("mobile-work-active");
      $('html,body').animate({
        scrollTop: $('.mobile-container').offset().top - 300
      }, 500);
    });

  })

});
