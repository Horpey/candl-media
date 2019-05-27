new WOW().init();


$(".a1").mouseenter(function () {
    $(".a1").addClass("active");
    $(".a2").removeClass("active");
    $(".a3").removeClass("active");


});

$(".a2").mouseenter(function () {
    $(".a1").removeClass("active");
    $(".a2").addClass("active");
    $(".a3").removeClass("active");


});

$(".a3").mouseenter(function () {
    $(".a1").removeClass("active");
    $(".a2").removeClass("active");
    $(".a3").addClass("active");


});

jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww < 768) {
            $('#test1').addClass('order-12');
            $('#test2').addClass('order-12');

        }
        else {
            $('#test1').removeClass('order-12');
            $('#test2').removeClass('order-12');

        }
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});