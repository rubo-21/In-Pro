$(function() {

	$(".js-clients-owl-carousel").owlCarousel({
		items: 5,
		navigation: true,
		navigationText: [
		  '<i class="fa fa-angle-left"></i>',
		  '<i class="fa fa-angle-right"></i>'
		],
		afterMove: function(){
			console.log(11);
			console.log($(this));
		}
	});

	$(".js-partners-owl-carousel").owlCarousel({
		items: 5,
		navigation: true,
		navigationText: [
		  '<i class="fa fa-angle-left"></i>',
		  '<i class="fa fa-angle-right"></i>'
		],
		afterMove: function(){
			console.log(11);
			console.log($(this));
		}
	});

	$(".js-licenses-owl-carousel").owlCarousel({
		items: 5,
		navigation: true,
		navigationText: [
		  '<i class="fa fa-angle-left"></i>',
		  '<i class="fa fa-angle-right"></i>'
		],
		afterMove: function(){
			console.log(11);
			console.log($(this));
		}
	});

});
