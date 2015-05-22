var Slider = {
	count: 1,
	maxCount: 4
};

$('.js-slider-controls__left').css('visibility', 'hidden');

$(document).on('click', '.js-slider-controls__left', SliderPrev);
$(document).on('click', '.js-slider-controls__right', SliderNext);
$(document).on('click', '.js-slider-nav', function(e){
	var count = $(this).find('input').val();
	if(count && Slider.count !== count){
		$('.b-slider-navbar__item__selected').removeClass('b-slider-navbar__item__selected');
		$(this).addClass('b-slider-navbar__item__selected');
		SliderGotoSlide(count);
	}
});

function SliderCheck() {
	if(Slider.count < 1) Slider.count = 1;
	if(Slider.count > Slider.maxCount) Slider.count = Slider.maxCount;
	if (Slider.count == 1) $('.js-slider-controls__left').css('visibility', 'hidden');
	else $('.js-slider-controls__left').css('visibility', 'visible');
	if (Slider.count == Slider.maxCount) $('.js-slider-controls__right').css('visibility', 'hidden');
	else $('.js-slider-controls__right').css('visibility', 'visible');
}

function SliderNext() {
	++Slider.count;
	SliderCheck();
	if(Slider.count) {
		$('.js-home-page-main').css({
			'background': "url('assets/img/bg_slider"+ Slider.count +".jpg') center no-repeat",
			'backgroundSize': '100% 100%'
		});
		$('.js-slider-content').hide();
		var tmp = Slider.count - 1;
		$('.b-slider-navbar__item__selected').removeClass('b-slider-navbar__item__selected');
		$('.js-slider-nav').eq(tmp).addClass('b-slider-navbar__item__selected');
		$('.js-slider-content').eq(tmp).fadeIn();
	}
}

function SliderPrev() {
	--Slider.count;
	SliderCheck();
	if(Slider.count) {
		$('.js-home-page-main').css({
			'background': "url('assets/img/bg_slider"+ Slider.count +".jpg') center no-repeat",
			'backgroundSize': '100% 100%'
		});
		$('.js-slider-content').hide();
		var tmp = Slider.count - 1;
		$('.b-slider-navbar__item__selected').removeClass('b-slider-navbar__item__selected');
		$('.js-slider-nav').eq(tmp).addClass('b-slider-navbar__item__selected');
		$('.js-slider-content').eq(tmp).fadeIn();
	}
}

function SliderGotoSlide(count){
	if(count) {
		Slider.count = count;
		SliderCheck();
		$('.js-home-page-main').css({
			'background': "url('assets/img/bg_slider"+ count +".jpg') center no-repeat",
			'backgroundSize': '100% 100%'
		});
		$('.js-slider-content').hide();
		var tmp = Slider.count - 1;
		$('.js-slider-content').eq(tmp).fadeIn();
	}
}
