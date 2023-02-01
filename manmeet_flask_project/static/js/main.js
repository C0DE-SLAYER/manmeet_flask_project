'use strict';

$(window).on('load', function() {

	/*------------------
		filter to active
	--------------------*/
	$('.filter-controls li').on('click', function() {
		$('.filter-controls li').removeClass('active');
		$(this).addClass('active');
	});

	if($('.gallery__warp').length > 0 ) {
		var containerEl = document.querySelector('.gallery__warp');
		mixitup(containerEl);
	}

	/*------------------
		calling lightgallery function to start image gallery 
	--------------------*/
	$(document).ready(function () {
		$('#lightgallery').lightGallery({
			download: false,
			autoplay: true,
		});
	  });
});

(function($) {

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});
})(jQuery);

// code for backtotop button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}