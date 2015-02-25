$(function(){
    $('#fullpage').fullpage({
    	//Navigation

        navigation: true,
        

    });

    $('.learn-more').on('click', function(){
    	$.fn.fullpage.moveTo(2);
    })

	function secHeight(){
		var sec = $('.sec1');
		sec.removeAttr('style').css("height",sec.height());
	};
	secHeight()


	/*Vertical alignment ov div.b-profit section 2 compartible with fullpage.js*/
	function bProfit(){
		$('.b-profit').height($('.sec2').outerHeight(true) - $('.dev-rate').outerHeight(true));
	}
	init()


	function init(){
		secHeight();
		bProfit();
	}
	$(window).resize(init).on( "orientationchange", function(){
		init();
	});
})