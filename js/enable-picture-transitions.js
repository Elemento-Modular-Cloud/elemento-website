$(window).on("scroll", function(){
  var scrollTop = $(this).scrollTop();

  $('.picture img').each(function(){
    var el = $(this);
    var offsetTop = el.offset().top * .5;
    if(scrollTop < offsetTop){    
      el.removeClass("animate");
    } else {
      el.addClass("animate");
    }
  });
});