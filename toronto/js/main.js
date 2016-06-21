$(function () {
//Menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('open');
        $(".etabs li").toggleClass("decrease");
    });
});
//NiceSelect
$(document).ready(function () {
    $('select').niceSelect();

    $('#tab-container').easytabs();

    $('.nice-select').click(function () {
           $(".etabs li").toggleClass("decrease");
    });

});


$('#tabs1').mCustomScrollbar({});
$('#tabs2').mCustomScrollbar({});




















