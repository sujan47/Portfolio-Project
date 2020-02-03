$(document).ready(function () {
  //SuperSlides
  $('#slides').superslides({
    play: 5000,
    pagination: false
  });

  // typedJs
  var typed = new Typed('.typed', {
    // Waits 1000ms after typing "First"
    strings: ['Web Designer', 'Web Developer', 'Laravel Expert'],
    loop: true,
    typeSpeed: 70,
    showCursor: false
  });

  // OWlCrousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  // EasyPieChart

  var skillsTopOffset = $('.skillsSection').offset().top;
  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      // Easy Pie Chart
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: 'white',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep(from, to, percent) {
          $(this.el)
            .find('.percent')
            .text(Math.round(percent));
        }
      });
    }
  });

  // CounterUpJs
  $('.counter').counterUp({
    delay: 5,
    time: 1000
  });

  //   Slide Navigation
  $('#navigation li a').click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate({
      scrollTop: targetPosition - 40
    }, 'slow');
  });

  //fancybox
  $("[data-fancybox]").fancybox();


  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

  //Isotope

  $("[data-fancybox]").fancybox();


  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

  $("#filters a").click(function () {

    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });

    return false;
  });



});