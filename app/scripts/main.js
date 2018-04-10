
(function() {

    // polaroid effect
    var polaroidWrap = $('.polaroid-images');
    var polaroidSlide = $('.polaroid-images__center-item .polaroid-images__item');
    var polaroidArrowLeft = $('.polaroid-images .arrow-left');
    var polaroidArrowRight = $('.polaroid-images .arrow-right');


    polaroidArrowLeft.on('click', function(event) {
      event.stopPropagation();
      var self = this;
      $(this).attr('disabled', true);
      var currentIndex = $('.polaroid-images__item.is-active').index();
      $('.polaroid-images__item').removeClass('in-progress-off');
      polaroidSlide.css('transform-origin', 'left 80%');

      $('.polaroid-images__item.is-active').velocity(
        {
          translateZ: 0,
          rotateZ: "-34deg",
          scale: 0.5,
          translateX: "-120px",
          translateY: "-180px",
          zIndex: 998
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
              }, {
                delay: 100,
                complete: function() {
                  $(self).attr('disabled', false);
                }
              });
          }
        });
    });

    polaroidArrowRight.on('click', function(event) {
    event.stopPropagation();
    var self = this;
    $(this).attr('disabled', true);
    var currentIndex = $('.polaroid-images__item.is-active').index();
    $('.polaroid-images__item').removeClass('in-progress-off');
    polaroidSlide.css('transform-origin', 'right 80%');

    $('.polaroid-images__item.is-active').velocity(
      {
        translateZ: 0,
        rotateZ: "34deg",
        scale: 0.5,
        translateX: "120px",
        translateY: "-180px",
        zIndex: 998
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
              translateY: [0, -180]
            }, {
              delay: 100,
              complete: function() {
                $(self).attr('disabled', false);
              }
            });
        }
      });
    });


    $('.corporate__head__nav_btn').velocity({ opacity: 1, translateX: [ 0, 100 ] }, { display: 'flex', duration: 1000 });
    $('.corporate__bcg-1__inner_title').velocity('transition.slideDownIn', 800)
    $('.corporate__bcg-1__inner_subtitle').velocity('transition.slideUpIn', 300, function() {
      $('.corporate__bcg-1__inner .custom-button-orange').velocity('transition.whirlIn', {display: 'flex', visibility: 'visible'});
    })
    $('.corporate__bcg-1_vegies').velocity('transition.fadeIn', 3000);
    $('.corporate__head__nav_item').velocity('transition.slideUpIn',
      { stagger: 100, complete: function() {
      $('.corporate__bcg-1__inner_phone').velocity('transition.slideUpBigIn');
    }});

  	// init controller
  	var controller = new ScrollMagic.Controller();

  	// build scene
  	var scene1 = new ScrollMagic.Scene({triggerElement: ".corporate__bcg-2"})
				.setVelocity(".corporate__bcg-2__products",
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

     var scene2 = new ScrollMagic.Scene({triggerElement: ".corporate__bcg-2__started_phone", triggerHook: 0.7})
				.setVelocity(".corporate__bcg-2__started_phone",
          { opacity: 1,
            duration: 10,
            complete: function() {
              $('.corporate__bcg-2__started_rectangles').velocity('transition.fadeIn', {
                duration: 600,
                complete: function() {
                  $('.corporate__bcg-2__started_phone .phone-img').velocity('transition.slideLeftBigIn', 500, function() {
                    $('.corporate__bcg-2__started_phone .phone-screen').velocity('transition.fadeIn', 2500)
                  });
                }
              });
              scene2.removeVelocity();
            }
          })
				//.addIndicators()
				.addTo(controller);

     var scene3 = new ScrollMagic.Scene({triggerElement: ".corporate__bcg-2__started_info", triggerHook: 0.6})
				.setVelocity(".corporate__bcg-2__started_info",
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

     var scene4 = new ScrollMagic.Scene({triggerElement: ".corporate__bcg-3_img-list", triggerHook: 0.5})
        .setVelocity(".corporate__bcg-3_img-list",
         { opacity: 1,
           duration: 10,
           complete: function() {
             $('.corporate__bcg-3_img-list img').velocity(
               { opacity: 1, translateX: [ 0, 500 ] },
               { display: 'block', duration: 2600 });
             scene4.removeVelocity();
           }
         })
        //.addIndicators()
        .addTo(controller);

     var scene5 = new ScrollMagic.Scene({triggerElement: ".polaroid-images", triggerHook: 0.5})
        .setVelocity(".polaroid-images",
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

     var scene6 = new ScrollMagic.Scene({triggerElement: ".corporate__bcg-5_left", triggerHook: 0.5})
        .setVelocity(".corporate__bcg-5_left",
          { opacity: 1,
            duration: 100,
            complete: function() {
              $('.corporate__bcg-5__info').velocity('transition.swoopIn', {stagger: 300});
              scene6.removeVelocity();
            }
          })
        //.addIndicators()
        .addTo(controller);

})();
