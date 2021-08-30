/*BENEFITS*/
	$('.benefits-accardeon__title').click(function (e) {
		e.preventDefault;
		e.target.parentNode.classList.toggle('active');
	});
	$('.benefits-subaccardeon__title').click(function (e) {
		e.preventDefault;
		e.target.parentNode.classList.toggle('active');
	});



	// benfits-1 tabs


	$('.benefits__block').each(function() {
		let ths = $(this);
		ths.find('.benefits-accardeon').not(':first').hide();
		ths.find('.tabs-nav__item').click(function() {
			ths.find('.tabs-nav__item').removeClass('active').eq($(this).index()).addClass('active');
			ths.find('.benefits-accardeon').hide().eq($(this).index()).fadeIn(100)
		}).eq(0).addClass('active');
	});

		// benfits-2 tabs

		$('.benfits-2 > .benefits__block').each(function() {
			let ths = $(this);
			ths.find('.benefits-accardeon').not(':first').hide();
			ths.find('.tabs-nav__item').click(function() {
				ths.find('.tabs-nav__item').removeClass('active').eq($(this).index()).addClass('active');
				ths.find('.benefits-accardeon').hide().eq($(this).index()).fadeIn(100)
			}).eq(0).addClass('active');
		});


		// benefits-3 tabs
		$('.benfits-3 > .benefits__block').each(function() {
			let ths = $(this);
			ths.find('.benefits-accardeon').not(':first').hide();
			ths.find('.tabs-nav__item').click(function() {
				ths.find('.tabs-nav__item').removeClass('active').eq($(this).index()).addClass('active');
				ths.find('.benefits-accardeon').hide().eq($(this).index()).fadeIn(100)
			}).eq(0).addClass('active');
		});