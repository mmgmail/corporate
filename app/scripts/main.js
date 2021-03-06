
(function() {

    // polaroid effect
    var polaroidWrap = $('.polaroid-images');
    var polaroidSlide = $('.polaroid-images__center-item .polaroid-images__item');
    var polaroidArrowLeft = $('.polaroid-images .arrow-left');
    var polaroidArrowRight = $('.polaroid-images .arrow-right');

    function hadlerOnLeft() {
      var self = this;
      $(this).attr('disabled', true);
      var currentIndex = $('.polaroid-images__item.is-active').index();
      $('.polaroid-images__item').removeClass('in-progress-off');
      polaroidSlide.css('transform-origin', 'left 80%');

      $('.polaroid-images__item.is-active').velocity(
        {
          translateZ: 0,
          rotateZ: '-34deg',
          scale: 0.5,
          translateX: '-120px',
          translateY: '-180px',
          zIndex: 998,
          opacity: 1
        }, {
          progress: function(element) {
            $(element).addClass('in-progress-on');
            $(element).removeClass('is-active');
            $(element).css('z-index', 999);

            if (currentIndex === 0) {
              polaroidSlide.eq(polaroidSlide.length - 1).addClass('is-active');
            } else {
              polaroidSlide.eq(currentIndex - 1).addClass('is-active');
            }
          },
          complete: function() {
            $('.polaroid-images__item.in-progress-on').addClass('in-progress-off').removeClass('in-progress-on');
            $('.polaroid-images__item.in-progress-off').css('z-index', 996);
            $('.polaroid-images__item.in-progress-off').velocity(
              {
                translateZ: 0,
                rotateZ: [0, -34],
                scale: [1, 0.5],
                translateX: [0, -120],
                translateY: [0, -180],
                opacity: 0.8
              }, {
                delay: 100,
                complete: function() {
                  $(self).attr('disabled', false);
                }
              });
          }
        });
    }

    function hadlerOnRight() {
      var self = this;
      $(this).attr('disabled', true);
      var currentIndex = $('.polaroid-images__item.is-active').index();
      $('.polaroid-images__item').removeClass('in-progress-off');
      polaroidSlide.css('transform-origin', 'right 80%');

      $('.polaroid-images__item.is-active').velocity(
        {
          translateZ: 0,
          rotateZ: '34deg',
          scale: 0.5,
          translateX: '120px',
          translateY: '-180px',
          zIndex: 998,
          opacity: 1
        }, {
          progress: function(element) {
            $(element).addClass('in-progress-on');
            $(element).removeClass('is-active');
            $(element).css('z-index', 999);

            if (currentIndex === polaroidSlide.length - 1) {
              polaroidSlide.eq(0).addClass('is-active');
            } else {
              polaroidSlide.eq(currentIndex + 1).addClass('is-active');
            }
          },
          complete: function() {
            $('.polaroid-images__item.in-progress-on').addClass('in-progress-off').removeClass('in-progress-on');
            $('.polaroid-images__item.in-progress-off').css('z-index', 996);
            $('.polaroid-images__item.in-progress-off').velocity(
              {
                translateZ: 0,
                rotateZ: [0, 34],
                scale: [1, 0.5],
                translateX: [0, 120],
                translateY: [0, -180],
                opacity: 0.8
              }, {
                delay: 100,
                complete: function() {
                  $(self).attr('disabled', false);
                }
              });
          }
        });
    }

    polaroidArrowLeft.on('click', hadlerOnLeft);
    polaroidArrowRight.on('click', hadlerOnRight);
    $('.polaroid-images').hammer().bind('swipeleft', hadlerOnLeft);
    $('.polaroid-images').hammer().bind('swiperight', hadlerOnRight);

    // animation
    $('.corporate__bcg-1__inner_title').velocity('transition.slideDownIn', 800);
    $('.corporate__bcg-1__inner_subtitle').velocity('transition.slideUpIn', 300);
    $('.corporate__bcg-1__inner .custom-button-orange').velocity('transition.fadeIn', {display: 'flex', visibility: 'visible'}, 300);
    $('.corporate__bcg-1_vegies').velocity('transition.fadeIn', 3000);
    $('.corporate__bcg-1__inner_phone').velocity('transition.slideUpBigIn');
    $('.corporate__head__nav_item').velocity('transition.slideUpIn');

    $('.corporate__head__nav_menu-togler').change(function() {
      var check = $(this).find('input[type="checkbox"]');
      setTimeout(function() {
        if(check.is(':checked')) {
          $('.corporate__head__nav_inner').velocity('transition.fadeIn', {display: 'flex'});
        } else {
          $('.corporate__head__nav_inner').velocity('transition.fadeOut');
        }
      }, 10);
    });

    $('.corporate__head__nav_inner a').click(function() {
      $('.corporate__head__nav_menu-togler input').attr('checked', false);
      $('.corporate__head__nav_inner').velocity('transition.fadeOut');
    });

    //dynamic words

    var wordsArray = ['My Body', 'My Metabolism', 'My Goals', 'My Life'];
    for(var i = 0; i < wordsArray.length; i++) {
      if (i === 0) {
        $('.corporate__bcg-1__inner_title .text-sky').append('<span class="is-visible">' + wordsArray[i] + '</span>');
        $('.corporate__bcg-1__inner_title .text-sky').css('padding-right', $('.corporate__bcg-1__inner_title .text-sky .is-visible').width());
      } else {
        $('.corporate__bcg-1__inner_title .text-sky').append('<span class="is-hidden">' + wordsArray[i] + '</span>');
      }
    }

    setInterval(function() {
      var visible = $('.corporate__bcg-1__inner_title .text-sky .is-visible');
      if(visible.index() === $('.corporate__bcg-1__inner_title .text-sky > span').length - 1) {
          visible.removeClass('is-visible').addClass('is-hidden');
          $('.corporate__bcg-1__inner_title .text-sky span:first').removeClass('is-hidden').addClass('is-visible');
      } else {
          visible.removeClass('is-visible').addClass('is-hidden').next().removeClass('is-hidden').addClass('is-visible');
          $('.corporate__bcg-1__inner_title .text-sky').css('padding-right', $('.corporate__bcg-1__inner_title .text-sky .is-visible').width());
      }
    }, 4000);

  	// init controller
  	var controller = new ScrollMagic.Controller();

  	// build scene
  	var scene1 = new ScrollMagic.Scene({triggerElement: '.corporate__bcg-2'})
				.setVelocity('.corporate__bcg-2__products',
          { display: 'flex',
            opacity: 1,
            duration: 10,
            complete: function() {
              $('.corporate__bcg-2__products_item').velocity('transition.slideUpBigIn', { stagger: 250, display: 'flex', duration: 1000});
              scene1.removeVelocity();
            }
          })
				//.addIndicators()
				.addTo(controller);

     var scene2 = new ScrollMagic.Scene({triggerElement: '.corporate__bcg-2__started_phone', triggerHook: 0.7})
				.setVelocity('.corporate__bcg-2__started_phone',
          { opacity: 1,
            duration: 10,
            complete: function() {
              $('.corporate__bcg-2__started_rectangles').velocity('transition.fadeIn', {
                duration: 600,
                complete: function() {
                  $('.corporate__bcg-2__started_phone .phone-img').velocity('transition.slideLeftBigIn', 500, function() {
                    $('.corporate__bcg-2__started_phone .phone-screen').velocity({scale: [1, 0]}, {duration: 800, easing: [ 250, 60 ]});
                  });
                }
              });
              scene2.removeVelocity();
            }
          })
				//.addIndicators()
				.addTo(controller);

     var scene3 = new ScrollMagic.Scene({triggerElement: '.corporate__bcg-2__started_info', triggerHook: 0.6})
				.setVelocity('.corporate__bcg-2__started_info',
         { opacity: 1,
           duration: 10,
           complete: function() {
             $('.corporate__bcg-2__started_item').velocity('transition.slideUpIn', {
               stagger: 350,
               display: 'flex'
             });
             scene3.removeVelocity();
           }
         })
				//.addIndicators()
				.addTo(controller);

     var scene4 = new ScrollMagic.Scene({triggerElement: '.corporate__bcg-3_img-list', triggerHook: 0.5})
        .setVelocity('.corporate__bcg-3_img-list',
         { opacity: 1,
           duration: 10,
           complete: function() {
             $('.corporate__bcg-3_img-list img').velocity(
               { opacity: 1, translateX: [ 0, 1000 ] },
               { display: 'block', duration: 1000, easing: [ 450, 35 ] });
             scene4.removeVelocity();
           }
         })
        //.addIndicators()
        .addTo(controller);

     var scene5 = new ScrollMagic.Scene({triggerElement: '.polaroid-images', triggerHook: 0.5})
        .setVelocity('.polaroid-images',
         { opacity: 1,
           duration: 100,
           complete: function() {
             $('.polaroid-images__item.is-active .polaroid-images__item_photo').velocity(
               { opacity: 1 },
               { display: 'block', duration: 2500 });
             scene5.removeVelocity();
           }
         })
        //.addIndicators()
        .addTo(controller);

     var scene6 = new ScrollMagic.Scene({triggerElement: '.corporate__bcg-5_left', triggerHook: 0.5})
        .setVelocity('.corporate__bcg-5_left',
          { opacity: 1,
            duration: 100,
            complete: function() {
              $('.corporate__bcg-5__info').velocity('transition.swoopIn', {stagger: 300});
              scene6.removeVelocity();
            }
          })
        //.addIndicators()
        .addTo(controller);

      var scene7 = new ScrollMagic.Scene({triggerElement: '.corporate', triggerHook: 0})
         .setPin('.corporate__head_fixed')
         //.addIndicators()
         .addTo(controller);

})();
