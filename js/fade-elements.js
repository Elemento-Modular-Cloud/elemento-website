$(window).on("scroll", function(){
  var scrollTop = $(this).scrollTop();
  $('.scrollDiv').each(function(){
    var el = $(this);
    var offsetTop = el.offset().top;
    if(scrollTop < offsetTop * 1.08){    
      el.removeClass("fade-out");
      el.addClass("fade-in");
    } else if(scrollTop < offsetTop * 1.5){
      el.addClass("fade-out");
    } else {
      el.addClass("fade-out");
      el.removeClass("fade-in");
    }
  });
});