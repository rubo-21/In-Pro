$(function () {
	'use strict';

	$(document).on('mouseover', '.js-search-icon', function() {
		$('.js-search').fadeIn('fast');
		$(this).hide();
	});

	$(document).on('mouseleave', '.js-search', function() {
		console.log('work');
		$('.js-search-icon').show();
		$(this).hide();
		$(this).find('input').val('');
	});
});
