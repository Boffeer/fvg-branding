$(document).ready(function () {
    svg4everybody({});

  $('.cases-slider').slick({
    // centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });



  $('.reviews-slider').slick({
    // centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.work-slider').slick({
    // centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  AOS.init();

  $('.services-item__btn').click(function(){
    $('.services-modal_wrap').css({'display': 'flex'})
  })
  $('.modal_close-btn').click(function(){
    $('.services-modal_wrap').css({'display': 'none'})
    $('.hero-modal_wrap').css({'display': 'none'})
  })
  $('.hero_callback').click(function(){
    $('.hero-modal_wrap').css({'display': 'flex'})
  })

});