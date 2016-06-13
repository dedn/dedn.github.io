$(function() {

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('open');
});
 

});


$(function() {
         $(".main-nav a").click(function() {
         $(".hiden-section").toggleClass("hidden");
         })
    });


$('.visibility-shoos-1').hover(
       function(){ $(".cont-1").addClass('demonstartion-cont-visibility') },
       function(){ $(".cont-1").removeClass('demonstartion-cont-visibility') }
);

$('.visibility-shoos-2').hover(
       function(){ $(".cont-2").addClass('demonstartion-cont-visibility') },
       function(){ $(".cont-2").removeClass('demonstartion-cont-visibility') }
);
$('.visibility-shoos-3').hover(
       function(){ $(".cont-3").addClass('demonstartion-cont-visibility') },
       function(){ $(".cont-3").removeClass('demonstartion-cont-visibility') }
);
$('.visibility-shoos-3').hover(
       function(){ $(".cont-3").addClass('demonstartion-cont-visibility') },
       function(){ $(".cont-3").removeClass('demonstartion-cont-visibility') }
);
$('.visibility-shoos-4').hover(
       function(){ $(".cont-4").addClass('demonstartion-cont-visibility') },
       function(){ $(".cont-4").removeClass('demonstartion-cont-visibility') }
);
$('.visibility-shoos-5').hover(
       function(){ $(".cont-5").addClass('demonstartion-cont-visibility') },
       function(){ $(".cont-5").removeClass('demonstartion-cont-visibility') }
);





$('.look').hover(
       function(){ $(".overlay1").addClass('overlay-visiblity') },
       function(){ $(".overlay1").removeClass('overlay-visiblity') }
);

$('.look').hover(
       function(){ $(".overlay2").addClass('overlay-visiblity') },
       function(){ $(".overlay2").removeClass('overlay-visiblity') }
);

$('.look').hover(
       function(){ $(".overlay3").addClass('overlay-visiblity') },
       function(){ $(".overlay3").removeClass('overlay-visiblity') }
);



$(document).ready(function(){
  $('.bxslider').bxSlider({
        pager : false,
        responsive:true,
        auto:true,
        pause:4000,
       controls:false
      

  });

});

$('.map-btn').click(
       function(){ $(".map-overlay").addClass('hidden') }

      
);


