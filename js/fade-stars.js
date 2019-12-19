$(document).ready(function() {
    var stars = $('.stars');
    $(window).on('scroll', function () {    
        if ($(this).scrollTop() > 0) {
            stars.fadeOut(3000);
        } else {
            stars.fadeIn(2000);
        }
    });
});