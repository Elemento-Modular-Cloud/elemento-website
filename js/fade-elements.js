var lastScrollTop = 0;
$(window).on("scroll", function(){
  var scrollTop = $(this).scrollTop();
  $('.scrollDiv').each(function(){
    var el = $(this);
    var offsetTop = el.offset().top * 1.08;
    if(scrollTop < offsetTop){    
      el.removeClass("fade-out");
    }else{
      el.addClass("fade-out");
    }

    var offsetTop2 = el.offset().top * 1.5;
    if(scrollTop < offsetTop2){  
      el.addClass("fade-in");
    }else{
      el.removeClass("fade-in");
    }
  });
});