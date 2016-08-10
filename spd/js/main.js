$(function () {
    $("#tabs").tabs();
});
$(function () {
//Menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('open');
    });
});


$(document).ready(function () {


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
    var dt = "August 15 2016 20:22:48"; //Задать время
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
    var dt = "August 17 2016 20:22:48"; //Задать время
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
    var dt = "August 21 2016 20:22:48"; //Задать время
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