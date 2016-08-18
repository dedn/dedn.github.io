
$(function ()  {
	$("#tabs").tabs();
});

$(function  init() {
//Menu
	$('#toggle').click(function () {
		$(this).toggleClass('active');
		$('.nav').toggleClass('open');
	});
});


$(document).ready(function  init() {


	var clock = $('.clock').FlipClock({
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: false,
		autoStart: false,
		callbacks: {
			stop: function () {
				$(".message").html("Время прошло");
			}
		}
	});
	var dt = "August 20 2016 20:22:48"; //Задать время
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /= 1000;

	if (first > last) {
		clock.setTime(remaining);
	} else {
		clock.setTime(first);
	}
	;

	clock.setCountdown(true);
	clock.start();

	var clock = $('.clock-1').FlipClock({
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: false,
		autoStart: false,
		callbacks: {
			stop: function () {
				$(".message").html("Время прошло");
			}
		}
	});
	var dt = "August 22 2016 20:22:48"; //Задать время
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /= 1000;

	if (first > last) {
		clock.setTime(remaining);
	} else {
		clock.setTime(first);
	}
	;

	clock.setCountdown(true);
	clock.start();


	var clock = $('.clock-2').FlipClock({
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: false,
		autoStart: false,
		callbacks: {
			stop: function () {
				$(".message").html("Время прошло");
			}
		}
	});
	var dt = "August 30 2016 20:22:48"; //Задать время
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /= 1000;

	if (first > last) {
		clock.setTime(remaining);
	} else {
		clock.setTime(first);
	}
	;

	clock.setCountdown(true);
	clock.start();


});