$(document).ready(function () {
    //validation
    $("input, select, textarea").jqBootstrapValidation();

    //Mixitup
    $("#portfolio-grid").mixItUp();

    //filter
    $(".filter-block-control li").click(function () {
        $(".filter-block-control li").removeClass("active");
        $(this).addClass("active");
    });


    //popup
     $(".popup").magnificPopup({
         type: 'image',
         closeOnContentClick: true,
         closeBtnInside: false,
         mainClass: 'mfp-no-margins mfp-with-zoom',          image: {
             verticalFit: true
         },
         zoom: {
             enabled: true,
             duration: 600
         }

     });

    $(".popup_content").magnificPopup({
        type:"inline",
        midClick: true,
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',          image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 600
        }
    });

    //Id для работы popup
    $(".portfolio-item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".port-descr").attr("id", "work_" + i);
    });




//Animated
    $(".home-text h1").animated("fadeInDown", "fadeOutUp");
    $(".home-text p").animated("fadeInUp", "fadeOutDown");
    $("section h2,.description").animated("fadeInUp", "fadeOutDown");
    $(".animation-center").animated("flipInY", "fadeOutY");
    $(".animation-left").animated("fadeInLeft", "fadeOutLeft");
    $(".animation-right").animated("fadeInRight", "fadeOutRight");
    $(".left .resume-item").animated("fadeInLeft", "fadeOutDown");
    $(".right .resume-item").animated("fadeInRight", "fadeOutDown");


// Высота header равняется высоте экрана
    function heightDetect() {
        $(".main-head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function () {
        heightDetect();
    });




});
//Preloader
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");


});

//Button header

$(".toggle-mnu").click(function () {
    $(".sandwich").toggleClass("active");
});
$(".top-mnu ul a").click(function () {
    $(".top-mnu").fadeOut(600);
    $(".sandwich").toggleClass("active");
});

$(".toggle-mnu").click(function () {
    if ($(".top-mnu").is(":visible")) {
        $(".home-text").removeClass("h-opacity");
        $(".top-mnu").fadeOut(600);
        $(".top-mnu li a").removeClass("fadeInUp animated");
    } else {
        $(".home-text").addClass("h-opacity");
        $(".top-mnu").fadeIn(600);
        $(".top-mnu li a").addClass("fadeInUp animated");
    }
    ;

});





//SlipHover
