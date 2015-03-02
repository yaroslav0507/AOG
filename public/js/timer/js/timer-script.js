$(document).ready(function () {
//код jQuery
	var myDate = new Date();
	var day = 3;
	var hour = 16;
	var minute = 42;
	function returnEndDate(d,h,m){
		myDate.setDate(myDate.getDate()+d);
		myDate.setHours(myDate.getHours()+h);
		myDate.setMinutes(myDate.getMinutes()+m);
		return myDate;
	}
	
	if($.cookie("timer")){
		var dateEnd = $.cookie("timer");
	}else{
		var dateEnd = returnEndDate(day,hour,minute);
		$.cookie("timer", dateEnd, {expires: 7});
	}
//функция вызова таймера
function get_timer() {
	
	//Дата для обратного отсчета
	var date_new = dateEnd; // June 3,2012 02:00
	////////////////////////////////////
	////////////////////////////////////
	
	//Объект даты для обратного отсчета
	var date_t = new Date(date_new);
	//Объект текущей даты
	var date = new Date();
	//Вычесляем сколько миллисекунд пройдет 
	//от текущей даты до даты отсчета времени
	var timer = date_t - date;
	
	//Проверяем не нужно ли закончить отсчет
	//если дата отсчета еще не истекла, то количество
	//миллисекунд в переменной date_t будет больше чем в переменной date
	if(date_t > date) {
		
		//Вычисляем сколько осталось дней до даты отсчета.
		//Для этого количество миллисекунд до даты остчета делим
		//на количество миллисекунд в одном дне
		var day = parseInt(timer/(60*60*1000*24));
		//если полученное число меньше 10 прибавляем 0
		if(day < 10) {
			day = '0' + day;
		}
		//Приводим результат к строке
		day = day.toString();
			
		//Вычисляем сколько осталось часов до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одном часе и отбрасываем дни
		var hour = parseInt(timer/(60*60*1000))%24;
		//если полученное число меньше 10 прибавляем 0
		if(hour < 10) {
			hour = '0' + hour;
		}
		//Приводим результат к строке
		hour = hour.toString();
			
		//Вычисляем сколько осталось минут до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем часы
		var min = parseInt(timer/(1000*60))%60;
		//если полученное число меньше 10 прибавляем 0
		if(min < 10) {
			min = '0' + min;
		}
		//Приводим результат к строке
		min = min.toString();
			
		//Вычисляем сколько осталось секунд до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем минуты
		var sec = parseInt(timer/1000)%60;
		//если полученное число меньше 10 прибавляем 0
		if(sec < 10) {
			sec = '0' + sec;
		}
		//Приводим результат к строке
		sec = sec.toString();
		
		//Выводим дни
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков дней
		if(day[1] == 9 && 
			hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countbox-days1"),day[0]);
		}
		else {
			$(".countbox-days1").html(day[0]);
		}
		//Для единиц дней
		if(hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countbox-days2"),day[1]);
		}
		else {
			$(".countbox-days2").html(day[1]);
		}
		//Выводим часы
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков часов
		if(hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countbox-hours1"),hour[0]);
		}
		else {
			$(".countbox-hours1").html(hour[0]);
		}
		//Для единиц чассов	
		if(min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countbox-hours2"),hour[1]);
		}
		else {
			$(".countbox-hours2").html(hour[1]);
		}
			
		//Выводим минуты
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков минут
		if(min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($(".countbox-mins1"),min[0]);
		}
		else {
			$(".countbox-mins1").html(min[0]);
		}
		//Для единиц минут
		if(sec[0] == 5 && sec[1] == 9) {
			animation($(".countbox-mins2"),min[1]);
		}
		else {
			$(".countbox-mins2").html(min[1]);
		}
			
		//Выводим секунды
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков секунд
		if(sec[1] == 9) {
			animation($(".countbox-secs1"),sec[0]);
		}
		else {
			$(".countbox-secs1").html(sec[0]);
		}
		animation($("#countbox-secs2"),sec[1]);	
		//Переодически вызываем созданную функцию, 
		//интервал вызова одна секунда(1000 милли секунд)
		setTimeout(get_timer,1000); 
	}
	else {
		$("#alert").html("<div id='stop'>Акция завершена</div>");
	}
	
}
//Функция для красивого отображения времени.
function animation(vibor,param) { 
	vibor.html(param)
		.css({})
		.animate({});
}
//Вызываем функцию на исполнение
get_timer();
});