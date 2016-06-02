$(document).ready(function () {

//Animated
//    $(".home-text h1").animated("fadeInDown", "fadeOutUp");
//    $(".home-text p").animated("fadeInUp", "fadeOutDown");
    $("section h2,.description").animated("fadeInUp", "fadeOutDown");
    //$(".animation-center").animated("flipInY", "fadeOutY");
    //$(".animation-left").animated("fadeInLeft", "fadeOutLeft");
    //$(".animation-right").animated("fadeInRight", "fadeOutRight");
    //$(".left .resume-item").animated("fadeInLeft", "fadeOutDown");
    //$(".right .resume-item").animated("fadeInRight", "fadeOutDown");


});
//Preloader
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");


});





