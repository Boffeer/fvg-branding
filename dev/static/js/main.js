$(document).ready(function () {
  $("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });
    svg4everybody({});




  $('.hero').css({'opacity':'1'});




    $('.js-footer-slider').slick({
    	centerMode: true,
		// centerPadding: '144px',
    	slidesToShow: 1,
      slidesToScroll: 1,
    	infinite: true,
    	dots: true,
    	arrows: true,
      swipeToSlide: true,
      nextArrow: '<svg class="slick-next" width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.6534 77.9108L68.7661 46.7981C70.0353 45.5289 70.0353 43.4711 68.7661 42.2019L37.6534 11.0892C36.5795 10.0153 36.5795 8.27406 37.6534 7.20012L42.5555 2.2981C43.6294 1.22416 45.3706 1.22416 46.4445 2.2981L86.7019 42.5555C87.7758 43.6294 87.7758 45.3706 86.7019 46.4445L46.4445 86.7019C45.3706 87.7758 43.6294 87.7758 42.5555 86.7019L37.6534 81.7999C36.5795 80.7259 36.5795 78.9847 37.6534 77.9108Z" fill="white" stroke="#232323" stroke-width="1"/></svg>',
      prevArrow: '<svg class="slick-prev" width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M51.3466 11.0892L20.2339 42.2019C18.9647 43.4711 18.9647 45.5289 20.2339 46.7981L51.3466 77.9108C52.4205 78.9847 52.4205 80.7259 51.3466 81.7999L46.4445 86.7019C45.3706 87.7758 43.6294 87.7758 42.5555 86.7019L2.2981 46.4445C1.22416 45.3706 1.22416 43.6294 2.2981 42.5555L42.5555 2.2981C43.6294 1.22416 45.3706 1.22416 46.4445 2.2981L51.3466 7.20012C52.4205 8.27406 52.4205 10.0153 51.3466 11.0892Z" fill="white" stroke="#232323" stroke-width="1"/></svg>',
      responsive:[{
          breakpoint: 480,
          settings: {
              centerMode: false,
              arrows: false
          },
        }],
    })


    $('.hero--branding').click(function(){
		window.location.href='http://branding.fadeevgroup.com'
    })

    $('.hero--world').click(function(){
		window.location.href='http://world.fadeevgroup.com'
    })

    $('.hero--delivery').click(function(){
		window.location.href='http://delivery.fadeevgroup.com'
    })



window.addEventListener('scroll', function() {
  if (pageYOffset > 100){
    $('.burger').addClass('burger--scrolled');
    $('.menu-burger_close').addClass('burger--scrolled');

  } else {
    $('.menu-burger_close').removeClass('burger--scrolled');
    $('.burger').removeClass('burger--scrolled');
  }
});




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
	arrows: false,
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
  $('.work_btn--cta').click(function(){
    var formName = $(this).data('formname');
    $('.g-form-name').val(formName).change();
    $('.hero-cta-modal_wrap').fadeIn();
    $('html').addClass('modal-open');
  });
  $('.work_btn--contacts').click(function(){
    var formName = $(this).data('formname');
    $('.g-form-name').val(formName).change();
    $('.modal-contacts_wrap').fadeIn();
    $('html').addClass('modal-open');
  });



  AOS.init();

  $('.services-item__btn').click(function(){
    var service = $(this).data('service')
    $('.g-form-name').val(service).change();
    // $('.services-modal_wrap').css({'display': 'flex'})
    $('.hero-cta-modal_wrap').fadeIn()
    $('html').addClass('modal-open');
  })

  $('.modal_close-btn').click(function(){
    // $('.services-modal_wrap').css({'display': 'none'})
    // $('.hero-modal_wrap').css({'display': 'none'})    
    $('.services-modal_wrap').fadeOut();
    $('.hero-modal_wrap').fadeOut();
    $('.hero-cta-modal_wrap').fadeOut();
    $('.modal-contacts_wrap').fadeOut();
    $('html').removeClass('modal-open');

    // $('.case-modal_wrap').css({'display': 'none'})
    if ($('.case-modal').hasClass('js-zoomer')){
      $('.case-modal').toggleClass('js-zoomer')
      setTimeout(()=>{$('.case-modal_wrap').css({'display': 'none'})}, 0.3)
    }  // $('.case-modal_wrap').css({'display': 'none'})
  })



  $('.hero-cta').click(function(){
    $('.hero-cta-modal_wrap').fadeIn();
    $('html').addClass('modal-open');
  });

  $('.hero_callback').click(function(){
    $('.g-form-name').val('Перезвонить с главной').change()
    // $('.hero-modal_wrap').css({'display': 'flex'});
    $('.hero-modal_wrap').fadeIn();
    $('html').addClass('modal-open');
  })

  $('.menu-burger_close').click(function(){
    $('.menu_wrap').slideToggle()
    $('html').removeClass('modal-open');
  })

  $('.menu_nav-item').click(function(){
    $('.menu_wrap').slideToggle()
    $('html').removeClass('modal-open');
  })
  $('.hero-menu-logo--inside').click(function(){
    $('.menu_wrap').slideToggle()
    $('html').removeClass('modal-open');
  })


  $('.burger').click(function(){
    $('.menu_wrap').slideToggle()
    $('html').addClass('modal-open');
    

    for (let i = 0; i < 5; i++){
      setTimeout(function(){
        // $('.menu_nav .menu_nav-item:nth-child('+i+')').css({'color':'#000'})
        $('.menu_nav .menu_nav-item:nth-child('+i+')').addClass('js-menu_nav-item--opened');
      }, (350 * i));

      setTimeout(function(){
        $('.menu_nav .menu_nav-item:nth-child('+i+')').removeClass('js-menu_nav-item--opened');
      }, (350 * 1.5 * i));



      // setInterval(function(){
      //   $('.menu_nav .menu_nav-item:nth-child('+i+')').css({'color':'#fff'})
      // }, 100)
    }
  })









  $('.cases-item__btn').click(function(){
    var thisCase = $(this).data('case-number')

    $('html').addClass('modal-open');
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


// $('.menu_nav-item').mouseover(function(){
//   if ($('.menu_nav-item').hasClass('menu_nav-item--active')){
//     $(this).removeClass('menu_nav-item--active');
//   } else {
//     $(this).addClass('menu_nav-item--active');
//   }
// });




$('.case-modal').scroll(function() {
    var y = $('.case-modal').scrollTop();
    $(".case-modal .modal_close-btn").css('top', y+50);
});





// closing beyond popup

$(document).mouseup(function (e){
  var modalctr = $(".case-modal_wrap");
  var modal = $(".case-modal");
  if (!modal.is(e.target) && modal.has(e.target).length === 0){
    modalctr.fadeOut();
  }
  $('html').removeClass('modal-open');  
});

$(document).mouseup(function (e){
  var modalctr = $(".hero-modal_wrap");
  var modal = $(".hero-modal");
  if (!modal.is(e.target) && modal.has(e.target).length === 0){
    modalctr.fadeOut();
  }
  $('html').removeClass('modal-open');  
});

$(document).mouseup(function (e){
  var modalctr = $(".hero-cta-modal_wrap");
  var modal = $(".hero-modal");
  if (!modal.is(e.target) && modal.has(e.target).length === 0){
    modalctr.fadeOut();
  }
  $('html').removeClass('modal-open');  
});

$(document).mouseup(function (e){
  var modalctr = $(".modal-contacts_wrap");
  var modal = $(".hero-modal");
  if (!modal.is(e.target) && modal.has(e.target).length === 0){
    modalctr.fadeOut();
  }
  $('html').removeClass('modal-open');  
});




let heroClasses = [".header", ".headliner", ".hero-logo", ".descriptor", ".hero-btn", ".hero-socials"];

heroClasses.forEach(function(item, i, arr) {
  $(item).removeClass('aos-animate');
})


setTimeout(function() {
  $(".preloader").fadeOut();
  heroClasses.forEach(function(item, i, arr) {
    $(item).addClass('aos-animate');
  })
}, 200)



// --- End Ready
});


jQuery(document).ready(function ($) {

  $("form").submit(function () {
    var str = $(this).serialize();
    $('.hero-modal_wrap').fadeOut()
    $('.services-modal_wrap').fadeOut()
    $.ajax({
      type: "POST",
      url: "static/php/contact.php",
      data: str,
      success: function ()
      {
          $('.pop-success_wrap').fadeIn()
          setTimeout(function(){$('.pop-success_wrap').fadeOut()}, 1000)
      }
    }
    );
    return false;
  });

});
