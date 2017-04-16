!(function(){
  //1.底部栏hover态，显示详细内容
  $('.bot_bar').hover(function(){
      $(this).fadeOut(1000);
      $(this).siblings('.cover').animate({
          top:0
      },1000);
  },function(){
     $(this).fadeIn(1000);
    //     $(this).siblings('.cover').animate({
    //       top:'282px'
    //   },1000);
  });

  $('.cover').hover(function(){
      console.log('cover');
      $(this).css('top','0');
  },function(){
       $(this).animate({
          top:'282px'
      },1000);
  });
})(window);