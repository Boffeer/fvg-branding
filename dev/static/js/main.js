$(document).ready(function () {
  $("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });
    svg4everybody({});

  $('.cases-slider').slick({
    // mobileFirst: true,
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

  $('.footer-slider').slick({
      centerMode: true,
      // centerPadding: '144px',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      arrows: true,
      swipeToSlide: true,
      nextArrow: '<svg class="slick-next" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.78" d="M28.2844 3L56.5687 31.2843L28.2844 59.5685" stroke="white" stroke-width="8"/></svg>',
      prevArrow: '<svg class="slick-prev" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.2843 3L6.00003 31.2843L34.2843 59.5685" stroke="white" stroke-width="8"/></svg>',
      responsive:[{
          breakpoint: 480,
          settings: {
              centerMode: false,
              arrows: false
          },
      }],
  })

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
    // $('.case-modal_wrap').css({'display': 'none'})
    if ($('.case-modal').hasClass('js-zoomer')){
      $('.case-modal').toggleClass('js-zoomer')
      setTimeout(()=>{$('.case-modal_wrap').css({'display': 'none'})}, 0.3)
    }  // $('.case-modal_wrap').css({'display': 'none'})
  })

  $('.hero_callback').click(function(){
    $('.hero-modal_wrap').css({'display': 'flex'})
  })

  $('.menu-burger_close').click(function(){
    $('.menu_wrap').slideToggle()
  })
  $('.menu_nav-item').click(function(){
    $('.menu_wrap').slideToggle()
  })
  $('.burger').click(function(){
    $('.menu_wrap').slideToggle()
  })

  $('.cases-item__btn').click(function(){
    var thisCase = $(this).data('case-number')

    $('.case-modal--'+thisCase).fadeToggle()
    $('.case-modal--'+thisCase).css({'display': 'flex'})
    // $('.case-modal--'+thisCase+' .case-modal').css({'transform': 'scale(1)'})
    $('.case-modal--'+thisCase+' .case-modal').toggleClass('js-zoomer')

  })


  let counterCounter = 0;
  $(window).scroll(function(){
    // var counterContainer = $(counterContainer)
    let counterContainer = $('.results'),
    counterScroll = $(window).scrollTop() + $(window).height(),
    counterOffset = counterContainer.offset().top;

    if (counterScroll > counterOffset && counterCounter == 0) {
      $('.results .counter-number').countTo({
        speed: 2000,
      });
      counterCounter = 1;
    }
  })


// --- End Ready
});