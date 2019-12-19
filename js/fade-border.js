$(document).ready(function() {
var myElement = $('.border-icon');
var stars = $('.stars');
$(window).on('scroll', function () {
    var st = $(this).scrollTop();
    myElement.css({
        'opacity': 1 - st * .7 / 600
    });

    if ($(this).scrollTop() > 0) {
        stars.fadeOut(1700);
    } else {
        stars.fadeIn(1000);
    }
});
});
    