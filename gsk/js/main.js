//Tabs
(function ($) {
    jQuery.fn.lightTabs = function (options) {

        var createTabs = function () {
            tabs = this;
            i = 0;

            showPage = function (i) {
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).children("ul").children("li").each(function (index, element) {
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function () {
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);
$(document).ready(function () {
    $(".tabs").lightTabs();
});


//Bxslider
$(function () {
    $('.bxslider').bxSlider({
        pager: false,
        responsive: true,
        auto: true,
        pause: 4000,
        controls: true
    });

    $('.slider').bxSlider({
        pagerCustom: '.bx-pager'
    });

    $('.sliderinner').bxSlider({
        pagerCustom: '.bx-pagerinner'
    });

    $('#slider2').bxSlider({
        pager: true,
        responsive: true,
        auto: true,
        pause: 4000,
        controls: true
    });

});
//Reload Slider on tabs
$(function () {

    var slidernext = $('.slidernext').bxSlider({
        pagerCustom: '.bx-pagernext'
    });
    var slidernext1 = $('.slidernext1').bxSlider({
        pagerCustom: '.bx-pagernext'
    });
    var slidernext2 = $('.slidernext2').bxSlider({
        pagerCustom: '.bx-pagernext'
    });
    var slidernext3 = $('.slidernext3').bxSlider({
        pagerCustom: '.bx-pagernext'
    });


    $('#main-portfolio .tabs-item').on('click', function () {
        slidernext.reloadSlider();
        slidernext1.reloadSlider();
        slidernext2.reloadSlider();
        slidernext3.reloadSlider();


    });


});

$(function () {
    var bxslidereqipment = $('.bxslidereqipment').bxSlider({
        pager: false,
        responsive: true,
        auto: true,
        pause: 4000,
        controls: true,
    });
    var bxslidereqipment1 = $('.bxslidereqipment1').bxSlider({
        pager: false,
        responsive: true,
        auto: true,
        pause: 4000,
        controls: true,
    });

    $('#equipment .tabs-item').on('click', function () {
        bxslidereqipment.reloadSlider();
        bxslidereqipment1.reloadSlider();

    });


});


$(function () {
//Menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('open');
    });
});
//липкое меню
$(document).ready(function () {

    var navPos, winPos, navHeight;

    function refreshVar() {
        navPos = $('nav').offset().top;
        navHeight = $('nav').outerHeight(true);
    }

    refreshVar();
    $(window).resize(refreshVar);

    $('<div class="clone-nav"></div>').insertBefore('nav').css('height', navHeight).hide();

    $(window).scroll(function () {
        winPos = $(window).scrollTop();

        if (winPos >= navPos) {
            $('nav').addClass('fixed shadow');
            $('.clone-nav').show();
        }
        else {
            $('nav').removeClass('fixed shadow');
            $('.clone-nav').hide();
        }
    });

});


$('#more-rewievs').click(function () {
    $('#loading-div').fadeIn();
    $(this).hide();
});


//map
function initMap() {

    var centerLatLng = new google.maps.LatLng(55.494033, 37.570933);


    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 18,               // Зум по умолчанию. Возможные значения от 0 до 21
        scrollwheel: false


    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    var marker = new google.maps.Marker({
        position: centerLatLng,
        map: map,
        title: "Симферопольское шоссе 13/1"
    });
}


google.maps.event.addDomListener(window, "load", initMap);

//read more
$(function () {
    $(".read-more-block").shorten({
        moreText: 'показать больше',
        lessText: 'скрыть',
        showChars: 400

    });

});

$(function () {
    $(".read-more-block-servis").shorten({
        moreText: 'показать больше',
        lessText: 'скрыть',
        showChars: 400

    });

});

//
function windowSize() {
    if ($(window).width() <= '991') {
        $('#block1').detach().insertAfter('#block2');
    }
    else {
        $('#block2').detach().insertAfter('#block1');
    }
}
$(window).load(windowSize);
$(window).resize(windowSize);