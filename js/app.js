$(window).on('load', function() {
    $('.select-selected').css("visibility", "hidden");
    $('.logo').fadeOut(0)
    $('.welcome').fadeOut(0).fadeIn(2000, function() {
        $('.logo').fadeIn(1000);
    });
    $(".preloader").delay(3500).slideUp(750, function() {
        $('body').removeClass('loading');
        $('.preloader').fadeOut(500);
        $('.select-selected').css("visibility", "visible");
    });
});