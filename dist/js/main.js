$(function () {

	/*FORM*/
	$(document).ready(function () {

		//E-mail Ajax Send
		$("form").submit(function () { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function () {
				$('.overflow').fadeIn();
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});

	});

	/*PHONE MASK*/
	$(".ph").mask("+8 (999) 999-9999");

	/*SLIDER*/

	$('.slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 580,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.buy-slider').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: false,
		responsive: [{
				breakpoint: 1320,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false
				}
			}
		]
	});


	$('.product-slider').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: false,
		responsive: [{
				breakpoint: 1320,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false
				}
			}
		]
	});

	/*TABS*/

	$('.tabs-nav a').click(function (e) {
		e.preventDefault();

		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
		var tHref = $(this).attr('href');

		$(this).parent().parent().find('.tab').removeClass('active');
		$(tHref).addClass('active');
	});

	/*SINGLE-TABS*/

	/*TABS*/

	$('.single-tabs-nav a').click(function (e) {
		e.preventDefault();

		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
		var tHref = $(this).attr('href');

		$('.single-tabs-block').removeClass('active');
		$(tHref).addClass('active');
	});

	/*CATALOG*/

	$('.stores-more').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().find('.stores-all').css('display', 'block');
	});

	$('.stores-close').click(function (e) {
		e.preventDefault();
		$(this).parent().css('display', 'none');
	});

	

	/*SCROLL*/

	$(document).ready(function () {
		$(".scroll").on("click", function () {
			//отменяем стандартную обработку нажатия по ссылке


			//забираем идентификатор бока с атрибута href
			var id = $(this).attr('href'),

				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;

			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({
				scrollTop: top
			}, 1500);
		});
	});

	/*MENU*/

	$('.m-menu').click(function () {
		$('.menu').slideToggle();
	});

	/*MODAL CLOSE*/

	$('.modal-close').click(function () {
		$('.overflow').fadeOut();
		$('.overflow2').fadeOut();
	});


	/*SINGLE SLIDER*/

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: false,
		vertical: true,
		responsive: [{
				breakpoint: 767,
				settings: {
					vertical: false
				}
			},
			{
				breakpoint: 580,
				settings: {
					vertical: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 420,
				settings: {
					vertical: false,
					slidesToShow: 2
				}
			}
		]
	});

	/*SCROLL TOP*/

	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('#scroller').fadeIn();
		} else {
			$('#scroller').fadeOut();
		}
	});
	$('#scroller').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
		return false;
	});


	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".stores-all"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&&
			div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});



	/*COUNTER*/
	var target = $('#number');
	var targetPos = target.offset().top;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;
	$(window).scroll(function () {
		var winScrollTop = $(this).scrollTop();
		if (winScrollTop > scrollToElem) {
			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
			$(".count").each(function () {
				var tcount = $(this).data("count");
				$(this).animateNumber({
						number: tcount,
						numberStep: comma_separator_number_step
					},
					3000);
			});
		}
	});

	if ($.cookie('the_cookie')) {
		$('.overflow2').hide();
	} else {
		$('.overflow2').show();
	}
	$.cookie('the_cookie', 'the_value');

});
