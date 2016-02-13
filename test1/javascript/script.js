$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('open');
});

$(document).ready(function(){
    var options = {
        //slides: '.slide', // The name of a slide in the slidesContainer
        swipe: false,    // Add possibility to Swipe
        //magneticSwipe: false, // Add 'magnetic' swiping. When the user swipes over the screen the slides will attach to the mouse's position
        transition: "fade", // Accepts "slide" and "fade" for a slide or fade transition
        //slideTracker: true, // Add a UL with list items to track the current slide
        slideTrackerID: 'hero-slideposition', // The name of the UL that tracks the slides
        //slideOnInterval: true, // Slide on interval
        interval: 4500, // Interval to slide on if slideOnInterval is enabled
        //animateDuration: 1500, // Duration of an animation
        //animationEasing: 'easeOutSine', // Accepts: linear ease in out in-out snap easeOutCubic easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInBack easeOutBack easeInOutBack
        //pauseOnHover: false, // Pause when user hovers the slide container
        //useDefaultCSS: false, // Add default CSS for positioning the slides
        //neverEnding: true // Create a 'neverending/repeating' slider effect.
    };
    var options1 = {
        swipe: false,
        transition: "slide",
        slideTrackerID: "quotations-controls",
        interval: 4500
    }

    $(".hero-slider").simpleSlider(options);
    $(".quotations-slider").simpleSlider(options1);
});


//parallax
var block = $('.parallax');
var positionBlock = block.position().top;
var parallaxImg = $(".parallax-bg");

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= positionBlock - 600) {
        parallaxImg.css("display", "block");
    } else {
        parallaxImg.css("display", "none");
    }
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



//animation for counters
function animationCounters(value, counter){
    $({someValue: 0}).animate({someValue: value}, {
        duration: 7000,
        easing:'swing', // can be anything
        step: function() { // called on every step
            // Update the element's text with rounded-up value:
            $(counter).text(commaSeparateNumber(Math.round(this.someValue)));
        }
    });
}

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
        val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    return val;
}


//animation counter
var parentPos = Math.round($('.achievements').offset().top);
//alert(parentPos);
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    console.log(scroll + " parent: " + parentPos);
    if (scroll >= parentPos - 120) {
        // нужно будет спросить
        animationCounters(265, '.counter-1');
        animationCounters(198, '.counter-2');
        animationCounters(1898, '.counter-3');
        animationCounters(365, '.counter-4');
    }
});


//animations

new WOW().init();

$(addAnimClasses)

function addAnimClasses(){
    $('.section-title').addClass('slideInDown wow');
    $('.section-description').addClass('zoomIn wow').attr('data-wow-delay','.5s');
    $('.find-more-btn').addClass('fadeInDown wow').attr('data-wow-delay','1s');
    $('.portfolio-list li').addClass('fadeInDown wow').attr('data-wow-offset','250');
    $('.achievements-list li').addClass('fadeInLeft wow').attr('data-wow-offset','250').attr('data-wow-delay','.5s');
    $('.quotations-slider').addClass('bounceInUp wow').attr('data-wow-duration','1.2s').attr('data-wow-delay','1s');
    $('#quotations-controls').addClass('fadeIn wow').attr('data-wow-delay','1s');
    $('.newsletter-form input').addClass('fadeIn wow');

}
