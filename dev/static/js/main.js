$(document).ready(function () {
  $("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });


    svg4everybody({});



    $('.js-footer-slider').slick({
    	centerMode: true,
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

// (function($){

//  $.event.special.wheelup = $.event.special.wheeldown = $.event.special.wheelleft = $.event.special.wheelright = {
//     setup: function(){
//         if(waka.touchable)return false;
//         // Gecko, WebKit
//         if(this.addEventListener) 
//             this.addEventListener('DOMMouseScroll', handler, false);
//         // IE, Presto
//             this.onmousewheel = handler;
//     },    
//     teardown: function(){
//         if(waka.touchable)return false;
//         // Gecko, WebKit
//         if(this.removeEventListener) 
//             this.removeEventListener('DOMMouseScroll', handler, false);
//         // IE, Presto
//             this.onmousewheel = null;
//     }
//  };

//  $.fn.extend({
//     wheelup: function(f){
//         return f ? this.bind('wheelup',f) : this.trigger('wheelup');
//     },    
//     unwheelup: function(f){
//         return this.unbind('wheelup',f);
//     },
//     wheeldown: function(f){
//         return f ? this.bind('wheeldown',f) : this.trigger('wheeldown');
//     },    
//     unwheeldown: function(f){
//         return this.unbind('wheeldown',f);
//     },
//     wheelleft: function(f){
//         return f ? this.bind('wheelleft',f) : this.trigger('wheelleft');
//     },    
//     unwheelleft: function(f){
//         return this.unbind('wheelleft',f);
//     },
//     wheelright: function(f){
//         return f ? this.bind('wheelright',f) : this.trigger('wheelright');
//     },    
//     unwheelright: function(f){
//         return this.unbind('wheelright',f);
//     }
//  });

//  function handler(ev){
//     var e = ev, 
//         args = [].slice.call( arguments, 1 ), 
//         delta = 0, deltaX = 0, deltaY = 0;

//     ev = $.event.fix(e);

//     // Old school scrollwheel delta
//     if(e.wheelDelta)delta = e.wheelDelta/120;
//     if(e.detail)delta = -e.detail/3;

//     // New school multidimensional scroll (touchpads) deltas
//     deltaY = delta;

//     // Gecko
//     if(e.axis !== undefined && e.axis === e.HORIZONTAL_AXIS){
//         deltaX = -1*delta;
//     }

//     // Webkit
//     if(e.wheelDeltaY !== undefined )deltaY = e.wheelDeltaY/120; 
//     if(e.wheelDeltaX !== undefined )deltaX = -1*e.wheelDeltaX/120;

//     if(deltaY > 0)ev.type = 'wheelup';
//     if(deltaY < 0)ev.type = 'wheeldown';
//     if(deltaX > 0)ev.type = 'wheelright';
//     if(deltaX < 0)ev.type = 'wheelleft';

//     // Add event and delta to the front of the arguments
//     args.unshift(ev, delta, deltaX, deltaY);

//     $(".work-slider").addEventListener('wheelright', function(){
//         item.preventDefault();
//         $(".work-slider").slick("slickNext");
//       });
//     $(".work-slider").addEventListener('wheelleft', function(){
//         item.preventDefault();
//         $(".work-slider").slick("slickPrev");
//       });
    
//     return ($.event.dispatch || $.event.handle).apply(this, args);
//  }


// })(jQuery);




let slidersList = [".cases-slider", ".work-slider", "footer-slider"];

// slidersList.forEach(function(item, i, arr){
//   // $(item).mouseover(function(){
//       $(item).addEventListener('wheelright', function(){
//           item.preventDefault();
//           $(item).slick("slickNext");
//         });
//       $(item).addEventListener('wheelleft', function(){
//           item.preventDefault();
//           $(item).slick("slickPrev");
//         });
//       // })
// });






  $('.cases-slider').slick({
    slidesToShow: 2,
    dots: true,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          arrows: false,
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
    slidesToShow: 3,
    swipeToSlide: true,
    dots: true,
	arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
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
    $('.hero-cta-modal_wrap').fadeIn()
    $('html').addClass('modal-open');
  })


  $('.modal_close-btn').click(function(){
    $('.services-modal_wrap').fadeOut();
    $('.hero-modal_wrap').fadeOut();
    $('.hero-cta-modal_wrap').fadeOut();
    $('.modal-contacts_wrap').fadeOut();
    $('.hero-callback-modal_wrap').fadeOut();
    $('html').removeClass('modal-open');

    if ($('.case-modal').hasClass('js-zoomer')){
      $('.case-modal').toggleClass('js-zoomer')
      setTimeout(()=>{$('.case-modal_wrap').css({'display': 'none'})}, 0.3)
    } 
  })



  $('.hero-cta').click(function(){
    $('.hero-cta-modal_wrap').fadeIn();
    $('html').addClass('modal-open');
  });

  $('.hero_callback').click(function(){
    $('.g-form-name').val('Перезвонить с главной').change()
    $('.hero-callback-modal_wrap').fadeIn();
    // $('.hero-modal_wrap').fadeIn();
    $('html').addClass('modal-open');
  })




  $('.menu-burger_close').click(function(){
    // $('.menu_wrap').slideToggle()
    $('.menu_wrap').fadeToggle()
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
    // $('.menu_wrap').slideToggle()
    $('.menu_wrap').fadeToggle()
    $('html').addClass('modal-open');
    

    let j = 1.5;
    for (let i = 0; i < 5; i++){
      i == 4 ? j = 1.4 : j = 1.5
      setTimeout(function(){
        $('.menu_nav .menu_nav-item:nth-child('+i+')').addClass('js-menu_nav-item--opened');
      }, (350 * i));

      setTimeout(function(){
        $('.menu_nav .menu_nav-item:nth-child('+i+')').removeClass('js-menu_nav-item--opened');
      }, (350 * j * i));
    }
  })









  $('.cases-item__btn').click(function(){
    var thisCase = $(this).data('case-number')

    $('html').addClass('modal-open');
    $('.case-modal--'+thisCase).fadeToggle()
    $('.case-modal--'+thisCase).css({'display': 'flex'})
    $('.case-modal--'+thisCase+' .case-modal').toggleClass('js-zoomer')

  })







  let counterCounter = 0;
  $(window).scroll(function(){
    let counterContainer = $('.results'),
    counterScroll = $(window).scrollTop() + $(window).height(),
    counterOffset = counterContainer.offset().top;

    if (counterScroll > counterOffset && counterCounter == 0) {
      let resultsCounterNumber = 1
      if (resultsCounterNumber < 6){
        setInterval(function() {
          $('.results-item:nth-child('+ resultsCounterNumber +') .counter-number').countTo({
              speed: (3000 / resultsCounterNumber),});
          resultsCounterNumber++;
          }, 1000)
      }
      counterCounter = 1;
    }
  });




$('.case-modal').scroll(function() {
    var y = $('.case-modal').scrollTop();
    $(".case-modal .modal_close-btn").css('top', y+20);
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

$(document).mouseup(function (e){
  var modalctr = $(".hero-callback-modal_wrap");
  var modal = $(".hero-modal");
  if (!modal.is(e.target) && modal.has(e.target).length === 0){
    modalctr.fadeOut();
  }
  $('html').removeClass('modal-open');  
});




// let heroClasses = [".header", ".headliner", ".hero-logo", ".descriptor", ".hero-btn", ".hero-socials"];

// heroClasses.forEach(function(item, i, arr) {
//   $(item).removeClass('aos-animate');
// })


// setTimeout(function() {
//   $(".preloader").fadeOut();
//   heroClasses.forEach(function(item, i, arr) {
//     $(item).addClass('aos-animate');
//   })
// }, 200)



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
      beforeSend: function() {
        // $('form button').attr("disabled");
        // $('form button').attr("disabled")
        // $('form button').text('Отправка данных')
        $('form button').css({"opacity": "0.6"})
      },
      success: function ()
      {
        $('.pop-success_wrap').fadeIn();
          setTimeout(function(){$('.pop-success_wrap').fadeOut()}, 1000)
        // $('form button').text('Данные отправены!')
        $('form button').css({"opacity": "1"});
        // setTimeout(function(){
          // $('form button').text('Отправить')
        // },10000)
        
      }
    }
    );
    return false;
  });

});
