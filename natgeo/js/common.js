

$(document).ready(function () {
    $('.activ').click(function (eventObject) {
        if ($(this).attr("class") === ("activ no-activ")) {
            $(this).removeClass("no-activ").addClass("activ-2");
        }
        else {
            $(this).removeClass("activ-2").addClass("no-activ");
        }

    });

    $("input[name='check']").click(function (eventObject) {
        if ($(this).is(':checked')) {
            $(".activ").removeClass("no-activ").addClass("activ-2");

        } else {
            $(".activ").removeClass("activ-2").addClass("no-activ");
        }

    });

$('.visibility-shoos-1').hover(
       function(){ $(".demonstartion-cont").addClass('.demonstartion-cont-visibility') },
       function(){ $(".demonstartion-cont").removeClass('.demonstartion-cont-visibility') }
);


    $('.slider-book').bxSlider({
        slideWidth: 240,
        minSlides: 1,
        maxSlides: 4,
        slideMargin: 40,
        pager: false,
        controls: true,
        nextText: "",
        prevText: "",
        auto: true,
        pause: 4000,
    });


});



$(function() {
         $(".categories").click(function() {
                  
             $(".item").toggleClass("item-visibiliti");
         })
    });




$(document).ready(function(){
  $('li').each(function(){
    $('a').on('mouseover', function() {
      $('.demonstartion-cont').toggleClass('demonstartion-cont-visibility');
    });
  });
});


//Preloader
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");


});



//play/pause to video
var video = document.getElementById("video");

$( ".pause-video" ).click(function() {
    $(this).fadeOut(300);
    $(".play-video").fadeIn(300).css("display", "block");
});

$( ".play-video" ).click(function() {
    $( this ).fadeOut(300);
    $(".pause-video").fadeIn(300).css("display", "block");
});

function playVid() {
    video.play();
}
function pauseVid() {
    video.pause();
}



$(function() {
    var slider2_initialized = false;
    var slider3_initialized = false;
    var slider4_initialized = false;
    var slider5_initialized = false;
    var slider6_initialized = false;
    var slider7_initialized = false;

    $("#tabs") .tabs({
        activate: function( event, ui ) {
            //console.log("ui = ");console.log(ui);
            var tab_id = $(ui.newPanel).attr('id');//alert(tab_id);

            if(tab_id == "tabs-2" && slider2_initialized == false)
            {
                $('.bxslider2').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: false,
                    pager: true,
                    autoControls:true
                });
                //update initialization flag to true
                slider2_initialized = true;
            }
            else if(tab_id == "tabs-3" && slider3_initialized == false)
            {
                $('.bxslider3').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: false,
                    pager: true,
                    autoControls:true
                });
                //update initialization flag to true
                slider3_initialized = true;
            }
            if(tab_id == "tabs-4" && slider4_initialized == false)
            {
                $('.bxslider4').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: false,
                    pager: true,
                    autoControls:true
                });
                //update initialization flag to true
                slider4_initialized = true;
            }
            else if(tab_id == "tabs-5" && slider5_initialized == false)
            {
                $('.bxslider5').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: false,
                    pager: true,
                    autoControls:true

                });
                //update initialization flag to true
                slider5_initialized = true;
            }
            else if(tab_id == "tabs-6" && slider6_initialized == false)
            {
                $('.bxslider6').bxSlider({
                    auto:true,
                    mode: 'fade',
                    captions: false,
                    pager: true,
                    autoControls:true
                });
                //update initialization flag to true
                slider6_initialized = true;
            }


        }
    });

    $('.bxslider1').bxSlider({
        auto:true,
        mode: 'fade',
        captions: false,
        pager: true,
        autoControls:true
    });



});

$('#tab-container').easytabs();

$(document).ready(function () {
    $('.bx-stop').click(function (eventObject) {
        
        $(this).toggleClass("hidden");
        $(".bx-start").removeClass("hidden").addClass("active-test");

          });

     $('.bx-start').click(function (eventObject) {
        
        $(this).toggleClass("hidden");
        $(".bx-stop").removeClass("hidden").addClass("active-test");
               

          });
    });


 $(".my-rating").starRating({
        starSize: 15,
        callback: function(currentRating, $el){
            // make a server call here
        }
    });

















