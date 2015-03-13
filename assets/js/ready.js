
function resizeSection(){
	var closestSection = $('.header-menu').closest('.section');
	var secHeight = closestSection.height();
	var secExpanded = secHeight + 1.5 * $('#mobileMenu').outerHeight();
	var secMinheight = closestSection.css('min-height');
	if($(window).width() < 768){
		function handler1() {
		    closestSection.css('max-height',secExpanded).height(secExpanded);
			$('#mobileMenu').show(300);
			$('.menu').addClass('rotate90');
			$(this).one("click", handler2);
		}
		function handler2() {
		    closestSection.css('max-height','auto').height(secMinheight);
			$('#mobileMenu').hide(0);
			$('.menu').removeClass('rotate90');
			$(this).one("click", handler1);
		}
		$(".header-menu").one("click", handler1);

		/*
			remove animations on small devices
		$('.wow').each(function(){var lastClass = $(this).attr('class').split(' ').pop(); $(this).removeClass(lastClass )});

		*/
	}
	else{
		$('.header-menu').off("click");
		$('#mobileMenu').removeAttr('style');
		$('.menu').removeClass('rotate90');
	}
}
function bodyOverflow(){
	$('html').removeAttr('style');
	$('html').css('overflow','hidden');
	if ($(window).width() >= 1200) {
		$('html').css('overflow','hidden');
	}
	else {
		$('html').css('overflow','visible');
	}
}

var isPhoneDevice = "ontouchstart" in document.documentElement; 

$(window).resize(function(){
	resizeSection();
	bodyOverflow();
});
	bodyOverflow();
$(function(){
	resizeSection();
	setTimeout(bodyOverflow, 1);
	function mobile(){
		$('#fullpage').fullpage({
		        //Navigation
		        //anchors:['main', 'profit', 'how-it-works', 'about-us', 'it-talent', 'technologies'],
		       // menu: '#slideMenu',
		        //navigation: true,
		        //navigationPosition: 'right',
		       // navigationTooltips: ['Home', 'Grow Your Business', 'How It Works', 'About Us', 'Ukrainian IT Tallent', 'Our Technologies'],
		       // slidesNavigation: true,
		        //slidesNavPosition: 'bottom',

		        //Scrolling
		        css3: true,
		        scrollingSpeed: 1500,
		        autoScrolling: false,
		        scrollBar: false,
		        easing: 'easeInQuart',
		        easingcss3: 'ease',
		        loopBottom: false,
		        loopTop: false,
		        loopHorizontal: true,
		        continuousVertical: false,
		        normalScrollElements: '',
		        scrollOverflow: false,
		        touchSensitivity: 15,
		        normalScrollElementTouchThreshold: 5,

		        //Accessibility
		        keyboardScrolling: true,
		        animateAnchor: true,
		        recordHistory: true,

		        //Design
		        controlArrows: true,
		        verticalCentered: false,
		        resize : true,
		        responsive: 760,

		        //Custom selectors
		        sectionSelector: '.section',
		        slideSelector: '.slide',

		        //events
		        onLeave: function(index, nextIndex, direction){},
		        afterLoad: function(anchorLink, index){},
		        afterRender: function(){},
		        afterResize: function(){},
		        afterSlideLoad: function(anchorLink, index, slideAnchor){},
		        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
		    });
		resizeSection();
	}
	function desktop(){
		$('#fullpage').fullpage({
		        //Navigation
		        anchors:['main', 'profit', 'how-it-works', 'about-us', 'it-talent', 'technologies'],
		        menu: '#slideMenu',
		        navigation: true,
		        navigationPosition: 'right',
		        navigationTooltips: ['Home', 'Grow Your Business', 'How It Works', 'About Us', 'Ukrainian IT Tallent', 'Our Technologies'],
		        slidesNavigation: false,
		        slidesNavPosition: 'bottom',

		        //Scrolling
		        css3: true,
		        scrollingSpeed: 1500,
		        autoScrolling: true,
		        scrollBar: true,
		        easing: 'easeInQuart',
		        easingcss3: 'ease',
		        loopBottom: false,
		        loopTop: false,
		        loopHorizontal: true,
		        continuousVertical: false,
		        normalScrollElements: '',
		        scrollOverflow: false,
		        touchSensitivity: 15,
		        normalScrollElementTouchThreshold: 5,

		        //Accessibility
		        keyboardScrolling: true,
		        animateAnchor: true,
		        recordHistory: true,

		        //Design
		        controlArrows: true,
		        verticalCentered: false,
		        resize : true,
		        responsive: 760,

		        //Custom selectors
		        sectionSelector: '.section',
		        slideSelector: '.slide',

		        //events
		        onLeave: function(index, nextIndex, direction){},
		        afterLoad: function(anchorLink, index){},
		        afterRender: function(){},
		        afterResize: function(){},
		        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex, menuLinks){},
		        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
		});
	}
	function screenSize(){
    	if($(window).height() <= 550){
			mobile();
		}
		else{
			desktop();
		}
	}
	function detectmob() { 
		 if( navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)
		 ){	
			mobile();
		  }
		 else {
			screenSize();
		  }
		}
	   detectmob();

	function anchor(className, section){
	    $('.' + className).on('click', function(){
	    	$.fn.fullpage.moveTo(section);
	    })		
	}

	anchor('learn-more', 2);
	anchor('learn-more', 2);
	anchor('learn-more', 2);

	function secHeight(){
		var sec = $('.sec1');
		sec.removeAttr('style').css("height",sec.height());
	};
	//secHeight()


	function init(){
		//secHeight();
		($(window).height() <= 654) ? $('section').height(653) : '';

	}
	$(window).resize(init).on( "orientationchange", function(){
		init();
	});
	function numHover(icon, num){
		$('.step.' + num).hover(function(){
			$('.' + icon).css('background-position','0 -127px').addClass('rotating').closest('.icon').find('.mask').css('background-position-y','-147px');
		},
		function () {
			$('.' + icon).removeAttr('style').removeClass('rotating').closest('.icon').find('.mask').removeAttr('style');
		});
	}
	numHover('request', 'first');
	numHover('receive', 'second');
	numHover('work', 'third');


	/*Smooth scrolling to the menu anchor links*/
	$('.slide-anchor').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1000);
	    return false;
	});

})
