$(document).ready(function() {
var myElement = $('.border-icon');
$(window).on('scroll', function () {
    var st = $(this).scrollTop()*.7;
    myElement.css({
        'opacity': 1 - st / 600
    });
});
});
    