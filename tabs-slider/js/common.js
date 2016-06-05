$(function () {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
    ;

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    ;

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });

});

$(window).load(function () {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});

//
//$('#tab-container').easytabs();
//
//$(document).ready(function () {
//    $('.slider').bxSlider({
//        responsive: 'true',
//        auto: 'true',
//        pause: '4000',
//        pager: 'false',
//        controls: 'false'
//
//
//    });
//    $('.slider1').bxSlider({
//        responsive: 'true',
//        auto: 'true',
//        pause: '4000',
//        pager: 'false',
//        controls: 'false'
//
//
//    });
//    $('.slider2').bxSlider({
//        responsive: 'true',
//        auto: 'true',
//        pause: '4000',
//        pager: 'false',
//        controls: 'false'
//
//
//    });
//});
//
//
//var sliders = {};
//sliders.tab1 = $('.slider').bxSlider();
//sliders.tab2 = $('.slider1').bxSlider();
//sliders.tab3 = $('.slider2').bxSlider();
//ul.init({
//    toggleActiveClass: 'active',
//    contentActiveClass: 'active',
//    initClass: 'js-tabby',
//    callbackBefore: function (toggle, tabID) {
//    },
//    callbackAfter: function (toggle, tabID) {
//        sliders[tabID.substr(1)].reloadSlider();
//    }
//});


$(function() {
    var slider2_initialized = false;
    var slider3_initialized = false;
    var slider4_initialized = false;
    var slider5_initialized = false;
    var slider6_initialized = false;
    var slider7_initialized = false;

    $( "#tabs" ).tabs({
        activate: function( event, ui ) {
            //console.log("ui = ");console.log(ui);
            var tab_id = $(ui.newPanel).attr('id');//alert(tab_id);

            if(tab_id == "tabs-2" && slider2_initialized == false)
            {
                $('.bxslider2').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: true
                });
                //update initialization flag to true
                slider2_initialized = true;
            }
            else if(tab_id == "tabs-3" && slider3_initialized == false)
            {
                $('.bxslider3').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: true
                });
                //update initialization flag to true
                slider3_initialized = true;
            }
            if(tab_id == "tabs-4" && slider4_initialized == false)
            {
                $('.bxslider4').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: true
                });
                //update initialization flag to true
                slider4_initialized = true;
            }
            else if(tab_id == "tabs-5" && slider5_initialized == false)
            {
                $('.bxslider5').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: true
                });
                //update initialization flag to true
                slider5_initialized = true;
            }
            else if(tab_id == "tabs-6" && slider6_initialized == false)
            {
                $('.bxslider6').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: true
                });
                //update initialization flag to true
                slider6_initialized = true;
            }



        }
    });

    $('.bxslider1').bxSlider({
        auto:true,
        mode: 'fade',
        captions: true
    });



});