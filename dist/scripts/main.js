! function () {
	function e() {
		var e = this;
		$(this).attr("disabled", !0);
		var i = $(".polaroid-images__item.is-active").index();
		$(".polaroid-images__item").removeClass("in-progress-off"), t.css("transform-origin", "left 80%"), $(".polaroid-images__item.is-active").velocity({
			translateZ: 0,
			rotateZ: "-34deg",
			scale: .5,
			translateX: "-120px",
			translateY: "-180px",
			zIndex: 998,
			opacity: 1
		}, {
			progress: function (e) {
				$(e).addClass("in-progress-on"), $(e).removeClass("is-active"), $(e).css("z-index", 999), 0 === i ? t.eq(t.length - 1).addClass("is-active") : t.eq(i - 1).addClass("is-active")
			},
			complete: function () {
				$(".polaroid-images__item.in-progress-on").addClass("in-progress-off").removeClass("in-progress-on"), $(".polaroid-images__item.in-progress-off").css("z-index", 996), $(".polaroid-images__item.in-progress-off").velocity({
					translateZ: 0,
					rotateZ: [0, -34],
					scale: [1, .5],
					translateX: [0, -120],
					translateY: [0, -180],
					opacity: .8
				}, {
					delay: 100,
					complete: function () {
						$(e).attr("disabled", !1)
					}
				})
			}
		})
	}

	function i() {
		var e = this;
		$(this).attr("disabled", !0);
		var i = $(".polaroid-images__item.is-active").index();
		$(".polaroid-images__item").removeClass("in-progress-off"), t.css("transform-origin", "right 80%"), $(".polaroid-images__item.is-active").velocity({
			translateZ: 0,
			rotateZ: "34deg",
			scale: .5,
			translateX: "120px",
			translateY: "-180px",
			zIndex: 998,
			opacity: 1
		}, {
			progress: function (e) {
				$(e).addClass("in-progress-on"), $(e).removeClass("is-active"), $(e).css("z-index", 999), i === t.length - 1 ? t.eq(0).addClass("is-active") : t.eq(i + 1).addClass("is-active")
			},
			complete: function () {
				$(".polaroid-images__item.in-progress-on").addClass("in-progress-off").removeClass("in-progress-on"), $(".polaroid-images__item.in-progress-off").css("z-index", 996), $(".polaroid-images__item.in-progress-off").velocity({
					translateZ: 0,
					rotateZ: [0, 34],
					scale: [1, .5],
					translateX: [0, 120],
					translateY: [0, -180],
					opacity: .8
				}, {
					delay: 100,
					complete: function () {
						$(e).attr("disabled", !1)
					}
				})
			}
		})
	}
	var t = ($(".polaroid-images"), $(".polaroid-images__center-item .polaroid-images__item")),
		o = $(".polaroid-images .arrow-left"),
		a = $(".polaroid-images .arrow-right");
	o.on("click", e), a.on("click", i), $(".polaroid-images").hammer().bind("swipeleft", e), $(".polaroid-images").hammer().bind("swiperight", i), $(".corporate__head__nav_btn").velocity({
		opacity: 1,
		translateX: [0, 100]
	}, {
		display: "flex",
		duration: 1e3
	}), $(".corporate__bcg-1__inner_title").velocity("transition.slideDownIn", 800), $(".corporate__bcg-1__inner_subtitle").velocity("transition.slideUpIn", 300, function () {
		$(".corporate__bcg-1__inner .custom-button-orange").velocity("transition.fadeIn", {
			display: "flex",
			visibility: "visible"
		})
	}), $(".corporate__bcg-1_vegies").velocity("transition.fadeIn", 3e3), $(".corporate__head__nav_item").velocity("transition.slideUpIn", {
		stagger: 100,
		complete: function () {
			$(".corporate__bcg-1__inner_phone").velocity("transition.slideUpBigIn")
		}
	}), $(".corporate__head__nav_menu-togler").change(function () {
		var e = $(this).find('input[type="checkbox"]');
		setTimeout(function () {
			e.is(":checked") ? $(".corporate__head__nav_inner").velocity("transition.fadeIn", {
				display: "flex"
			}) : $(".corporate__head__nav_inner").velocity("transition.fadeOut")
		}, 10)
	});
	for (var r = ["My Body", "My Metabolism", "My Goals", "My Life"], s = 0; s < r.length; s++) 0 === s ? ($(".corporate__bcg-1__inner_title .text-sky").append('<span class="is-visible">' + r[s] + "</span>"), $(".corporate__bcg-1__inner_title .text-sky").css("padding-right", $(".corporate__bcg-1__inner_title .text-sky .is-visible").width())) : $(".corporate__bcg-1__inner_title .text-sky").append('<span class="is-hidden">' + r[s] + "</span>");
	setInterval(function () {
		var e = $(".corporate__bcg-1__inner_title .text-sky .is-visible");
		e.index() === $(".corporate__bcg-1__inner_title .text-sky > span").length - 1 ? (e.removeClass("is-visible").addClass("is-hidden"), $(".corporate__bcg-1__inner_title .text-sky span:first").removeClass("is-hidden").addClass("is-visible")) : (e.removeClass("is-visible").addClass("is-hidden").next().removeClass("is-hidden").addClass("is-visible"), $(".corporate__bcg-1__inner_title .text-sky").css("padding-right", $(".corporate__bcg-1__inner_title .text-sky .is-visible").width()))
	}, 4e3);
	var n = new ScrollMagic.Controller,
		c = new ScrollMagic.Scene({
			triggerElement: ".corporate__bcg-2"
		}).setVelocity(".corporate__bcg-2__products", {
			display: "flex",
			opacity: 1,
			duration: 10,
			complete: function () {
				$(".corporate__bcg-2__products_item").velocity("transition.slideUpBigIn", {
					stagger: 250,
					display: "flex",
					duration: 1e3
				}), c.removeVelocity()
			}
		}).addTo(n),
		l = new ScrollMagic.Scene({
			triggerElement: ".corporate__bcg-2__started_phone",
			triggerHook: .7
		}).setVelocity(".corporate__bcg-2__started_phone", {
			opacity: 1,
			duration: 10,
			complete: function () {
				$(".corporate__bcg-2__started_rectangles").velocity("transition.fadeIn", {
					duration: 600,
					complete: function () {
						$(".corporate__bcg-2__started_phone .phone-img").velocity("transition.slideLeftBigIn", 500, function () {
							$(".corporate__bcg-2__started_phone .phone-screen").velocity({
								scale: [1, 0]
							}, {
								duration: 800,
								easing: [250, 60]
							})
						})
					}
				}), l.removeVelocity()
			}
		}).addTo(n),
		_ = new ScrollMagic.Scene({
			triggerElement: ".corporate__bcg-2__started_info",
			triggerHook: .6
		}).setVelocity(".corporate__bcg-2__started_info", {
			opacity: 1,
			duration: 10,
			complete: function () {
				$(".corporate__bcg-2__started_item").velocity("transition.slideUpIn", {
					stagger: 350,
					display: "flex"
				}), _.removeVelocity()
			}
		}).addTo(n),
		d = new ScrollMagic.Scene({
			triggerElement: ".corporate__bcg-3_img-list",
			triggerHook: .5
		}).setVelocity(".corporate__bcg-3_img-list", {
			opacity: 1,
			duration: 10,
			complete: function () {
				$(".corporate__bcg-3_img-list img").velocity({
					opacity: 1,
					translateX: [0, 1e3]
				}, {
					display: "block",
					duration: 1e3,
					easing: [450, 35]
				}), d.removeVelocity()
			}
		}).addTo(n),
		p = new ScrollMagic.Scene({
			triggerElement: ".polaroid-images",
			triggerHook: .5
		}).setVelocity(".polaroid-images", {
			opacity: 1,
			duration: 100,
			complete: function () {
				$(".polaroid-images__item.is-active .polaroid-images__item_photo").velocity({
					opacity: 1
				}, {
					display: "block",
					duration: 2500
				}), p.removeVelocity()
			}
		}).addTo(n),
		g = new ScrollMagic.Scene({
			triggerElement: ".corporate__bcg-5_left",
			triggerHook: .5
		}).setVelocity(".corporate__bcg-5_left", {
			opacity: 1,
			duration: 100,
			complete: function () {
				$(".corporate__bcg-5__info").velocity("transition.swoopIn", {
					stagger: 300
				}), g.removeVelocity()
			}
		}).addTo(n);
	new ScrollMagic.Scene({
		triggerElement: ".corporate",
		triggerHook: 0
	}).setPin(".corporate__head_fixed").addTo(n)
}();
