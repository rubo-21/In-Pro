$(function() {

	/*clients*/
	$(".js-clients-owl-carousel").owlCarousel({
		items: 5,
      pagination: false,
      loop: true,
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,3], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

    var owl_clients = $('.js-clients-owl-carousel').owlCarousel();
    $(".owl-prev").click(function () {
        owl_clients.trigger('prev.owl.carousel');
    });

    $(".owl-next").click(function () {
        owl_clients.trigger('next.owl.carousel');
    });
    owl_clients.on('changed.owl.carousel', function(event) {
		var center_element = event.item.index-2;
		if(center_element>event.item.count){
			center_element-=event.item.count;
		}

		changeClientInfo(center_element);
    });


    function changeClientInfo(item_num){
        var text = $('.b-owl-carousel .client'+item_num+'').attr('data-name');
        var url = $('.b-owl-carousel .client'+item_num+'').attr('data-url');
        var review = $('.b-owl-carousel .client'+item_num+'').attr('data-review');

        $('.b-clients__name a').text(text);
        $('.b-clients__name a').attr('href',url);

        if(review){
            $('.b-clients__review').show();
            $('.b-clients__review').html('');
            review = review.split(';');
            var i = 0;
            var word = '';
            for(var r in review){
                if(i>0){
                    word='displaynone';
                }
                $('.b-clients__review').append('<a href="'+review[r]+'" rel="review" class="fancybox '+word+'">Отзывы заказчика</a>');
                i++;
             }

        }else{
            $('.b-clients__review').hide();
        }


        $('.b-owl-carousel .b-clients-owl-carousel__item').addClass('grayfilter');
        $('.b-owl-carousel .client'+item_num+'').removeClass('grayfilter');
    }

    changeClientInfo(3);


	/***** NEW ******/
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
