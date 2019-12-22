$(window).on("scroll", function(){
  var scrollTop = $(this).scrollTop();

  $('.text').each(function(){
    var el = $(this);
    var offsetTop = el.offset().top;
    if(scrollTop < offsetTop){    
      el.removeClass("animate");
    } else {
      el.addClass("animate");
    }
  });
});