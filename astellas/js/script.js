/**
 * Created by user on 09.11.16.
 */


$('#toggle-left').click(function () {
    $('.toggle-hover, .trinagle-blue').toggleClass('active');
    if ($('.toggle-hover').hasClass('active')) {
        $('.hexagone-left').removeClass('pulsate');
    } else {
        $('.hexagone-left').addClass('pulsate');
    }

    $('.title-left-hover, .left-content').toggleClass('open');
    if ($('.title-left-hover, .left-content').hasClass('open')) {
        $('.title-right-hover, .right-content').removeClass('open-right');
        $('.toggle-hover, .trinagle-grey').removeClass('active');
    }
});


$('#toggle-right').click(function () {
    $('.toggle-hover-right, .trinagle-grey').toggleClass('active');
    if ($('.toggle-hover').hasClass('active')) {
        $('.hexagone-right').removeClass('pulsate');
    } else {
        $('.hexagone-right').addClass('pulsate');
    }
    $('.title-right-hover, .right-content').toggleClass('open-right');

    if ($('.title-right-hover, .right-content').hasClass('open-right')) {
        $('.title-left-hover, .left-content').removeClass('open');
        $('.toggle-hover, .trinagle-blue').removeClass('active');
    }

});


