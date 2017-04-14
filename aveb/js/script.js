$(document).ready(function(){

    var windowHeight = $(window).height(),
        regEmail = /[a-z0-9._%+-]+@[a-z0-9.-]{2,}\.[a-z]{2,3}$/,
        regName = /([0-9_%+?.,!@#$%^&*();|/\\<>"'])/,
        $email = $('.js-email-input'),
        $name = $('.js-name-input');


    $('.js-main-screen').css('height', windowHeight);

    function scrollTo(triggerName, anchorName){
        triggerName.on('click', function(){
            $('html,body').stop().animate({scrollTop: (anchorName).offset().top}, 'slow');
        });
    }

    scrollTo($('.js-trigger-arrow'), $('.js-how-to-start-anchor'));

    //$('.js-form-ask-info').on('submit', function(e){
    //    e.preventDefault();
    //
    //    var emailValue = $email.val(),
    //        nameValue = $name.val();
    //
    //
    //    function validTo() {
    //
    //        if (emailValue && !regEmail.test(emailValue) || !emailValue) {
    //            $email.addClass('error');
    //        } else {
    //            $email.removeClass('error');
    //        }
    //
    //        if (nameValue && regName.test(nameValue) || !nameValue) {
    //            $name.addClass('error');
    //        } else {
    //            $name.removeClass('error');
    //        }
    //    }
    //
    //    validTo();
    //
    //    if ($email.hasClass('js-field-error')) {
    //        e.preventDefault();
    //    } else {
    //        e.preventDefault();
    //        var formMethod = $(this).attr('method'),
    //            formAction = $(this).attr('action'),
    //            formData = $(this).serialize();
    //        $.ajax({
    //            type: formMethod,
    //            url: formAction,
    //            data: formData,
    //            success: function () {
    //                $popupOverlay.fadeOut(300);
    //            }
    //        });
    //        $('.js-popup-btn').attr('type','button').addClass('btn-no-active');
    //    }
    //});

     $('.flip-container').on('click', function(){

         if($(this).hasClass('hover')){
             $(this).removeClass('hover')
         } else {
             $('.flip-container').removeClass('hover');
             $(this).addClass('hover');
         }
     });

    if(isMobile.any) {
        $('.js-phone-number').each(function() {
            $(this).replaceWith(
                $('<a href="tel:' + this.innerHTML + '">' + this.innerHTML + '</a>')
            );
        });
    } else {
        function visibility() {
            var windowTop = $(window).scrollTop(),
                windowHeight = $(window).height(),
                startVisibility = windowTop + windowHeight;

            $('.js-to-animate').each(function() {

                var blockPosition = $(this).offset().top;

                if (startVisibility >= blockPosition) {
                    $(this).addClass('is-animation');
                    $('.js-to-left').addClass('to-left');
                    $('.js-to-right').addClass('to-right');
                    $('.js-to-bottom').addClass('is-animation');
                }
            });
        }

        window.setTimeout(function(){
            $(window).scroll(function() {
                visibility();
            });
        }, 1000);

        visibility();
    }

    $('.js-btn-contact-us').on('click', function(){
        $('.js-popup-contact-us').fadeIn(300);
        $('.js-popup-wrapper').fadeIn(300);
    });

    $('.js-popup-close, .js-popup-wrapper').on('click', function(){
        $('.js-popup').fadeOut(300);
        $('.js-popup-wrapper').fadeOut(300);
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $('.js-popup').fadeOut(300);
            $('.js-popup-wrapper').fadeOut(300);
        }
    });
});