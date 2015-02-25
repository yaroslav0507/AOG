$(function(){

	function secHeight(){
		var sec = $('.sec1');
		sec.removeAttr('style').css("height",sec.height());
	};
	secHeight()


	function bProfit(){
		$('.b-profit').height($('.sec2').height() - $('.dev-rate').height());
	}
	init()


	function init(){
		secHeight();
		bProfit();
	}
	$(window).resize(init)
})