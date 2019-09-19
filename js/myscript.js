/*Feature work section*/
jQuery(document).ready(function(){
	jQuery('.portfolio-item').isotope({
		itemSelector: '.filter',
		layoutMode: 'fitRows'
	});
	jQuery('.portfolio-menu ul li').click(function(e){
		e.preventDefault();
		jQuery('.portfolio-menu ul li').removeClass('active1');
		jQuery(this).addClass('active1');

		var selector = jQuery(this).attr('data-filter');
		jQuery('.portfolio-item').isotope({
			filter: selector
		});
		return false;
	});
});

/*Circle hover effect*/
$(document).ready(function(){
	$('.incircle,.incircle1,.incircle2,.incircle3').mouseover(function(){
		$(this).parent().css("border","2px solid #000");
	});
	$('.incircle,.incircle1,.incircle2,.incircle3').mouseout(function(){
		$(this).parent().css("border","2px solid #55E6C1");
	});
});

/*Readmore section*/
//$(document).ready(function(){
//	$('.readmore').mouseover(function(){
//		$('.square').css("background","#55E6C1");
//	});
//});
