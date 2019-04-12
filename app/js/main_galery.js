$(document).ready(function(){
		$('.bxslider').bxSlider({
			minSlides: 6,
			maxSlides: 6,
			slideMargin: 10,
			slideWidth: 200,
			infiniteLoop: false,
			moveSlides: 1,
			
			
		});

		$().fancybox({
    selector : '.imglist a:visible'
});


	});