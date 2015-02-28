$(function(){
	function mobile(){
		$('#fullpage').fullpage({
		        //Navigation
		        anchors:['main', 'profit', 'how-it-works', 'about-us', 'it-talent', 'technologies'],
		        menu: '#slideMenu',
		        navigation: false,
		        navigationPosition: 'right',
		        navigationTooltips: ['firstSlide', 'secondSlide'],
		        slidesNavigation: true,
		        slidesNavPosition: 'bottom',

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
	}
	function desktop(){
		$('#fullpage').fullpage({
		        //Navigation
		        anchors:['main', 'profit', 'how-it-works', 'about-us', 'it-talent', 'technologies'],
		        menu: '#slideMenu',
		        navigation: true,
		        navigationPosition: 'right',
		        navigationTooltips: [],
		        slidesNavigation: true,
		        slidesNavPosition: 'bottom',

		        //Scrolling
		        css3: true,
		        scrollingSpeed: 1500,
		        autoScrolling: true,
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

    $('.learn-more').on('click', function(){
    	$.fn.fullpage.moveTo(2);
    })

	function secHeight(){
		var sec = $('.sec1');
		sec.removeAttr('style').css("height",sec.height());
	};
	secHeight()


	function init(){
		secHeight();
	}
	$(window).resize(init).on( "orientationchange", function(){
		init();
	});
})