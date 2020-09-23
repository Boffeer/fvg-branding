$(document).ready(function () {
    svg4everybody({});

  $('.cases-slider').slick({
    mobileFirst: true,
    slidesToShow: 2,
    dots: true,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
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
    // mobileFirst:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: true,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
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
    $('.case-modal_wrap').css({'display': 'none'})
  })

  $('.hero_callback').click(function(){
    $('.hero-modal_wrap').css({'display': 'flex'})
  })

  $('.menu-burger_close').click(function(){
    $('.menu_wrap').fadeOut()
  })
  $('.burger').click(function(){
    $('.menu_wrap').fadeIn()
  })

  $('.cases-item__btn').click(function(){
    var thisCase = $(this).data('case-number')
    $('.case-modal--'+thisCase).css({'display': 'flex'})
  })

});