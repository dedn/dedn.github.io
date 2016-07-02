function sendMail(number, name) {
    if (number == "" || name == "") {
        alert("Поля \"Ваше имя\" и \"Телефон\" должны быть заполнены");
        return false;
    }
    $.post("send_mail.php", "name=" + name + "&number=" + number + "&r=" + Math.random(), function(resp_text, status) {
        if (status == "success") {
            alert("Спасибо за заявку. Мы вам позвоним в ближайшее время");
        } else {
            alert("Отсылка заявки не удалась. Попробуйте отослать еще раз.");
        }
    })
    return false;
}
//Bxslider

$(document).ready(function() {
    $('.bxslider').bxSlider({
        pager: true,
        responsive: true,
        auto: true,
        pause: 4000,
        controls: true
    });
});




jQuery(document).ready(function($) {
    var $timer1 = $('.timer1');
    var $timer2 = $('.timer2');
    var inter_val_timer1 = 20000; //интервал 20 с
    var inter_val_timer2 = 20000; //интервал 20 с
    var start_timer1 = 2000; //начальное значени таймер 1
    var start_timer2 = 200; //начальное значени таймер 2
    if ($.cookie('timer1')) {
        start_timer1 = Number($.cookie('timer1'))
    }
    if ($.cookie('timer2')) {
        start_timer2 = Number($.cookie('timer2'))
    }
    setInterval(function() {
        start_timer1 += 1;
        $.cookie('timer1', start_timer1);
        timer_html(start_timer1, $timer1);
    }, inter_val_timer1)
    setInterval(function() {
        start_timer2 += 1;
        $.cookie('timer2', start_timer2);
        //console.log(start_timer1);
        timer_html(start_timer2, $timer2);
    }, inter_val_timer2)

    function timer_html(num, $el) {
        var str = String(num);
        var html = "";
        for (var i = 0; i < str.length; i++) {
            html += '<span class="timer_el">' + str[i] + '</span>';
        }
        $el.html(html);
    };
    timer_html(start_timer1, $timer1)
    timer_html(start_timer2, $timer2)
});




// jQuery(document).ready(function($) {
//     var $timer1 = $('#timer1');
//     var $timer2 = $('#timer2');
//     var inter_val_timer1 = 20000; //интервал 20 с
//     var inter_val_timer2 = 20000; //интервал 20 с
//     var start_timer1 = 2000; //начальное значени таймер 1
//     var start_timer2 = 200; //начальное значени таймер 2
//     if ($.cookie('timer1')) {
//         start_timer1 = Number($.cookie('timer1'))
//     }
//     if ($.cookie('timer2')) {
//         start_timer2 = Number($.cookie('timer2'))
//     }
//     setInterval(function() {
//         start_timer1 += 1;
//         $.cookie('timer1', start_timer1);
//         timer_html(start_timer1, $timer1);
//     }, inter_val_timer1)
//     setInterval(function() {
//         start_timer2 += 1;
//         $.cookie('timer2', start_timer2);
//         //console.log(start_timer1);
//         timer_html(start_timer2, $timer2);
//     }, inter_val_timer2)
//
//     function timer_html(num, $el) {
//         var str = String(num);
//         var html = "";
//         for (var i = 0; i < str.length; i++) {
//             html += '<span class="timer_el">' + str[i] + '</span>';
//         }
//         $el.html(html);
//     };
//     timer_html(start_timer1, $timer1)
//     timer_html(start_timer2, $timer2)
// });

//scrol
$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});