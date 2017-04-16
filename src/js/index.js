!(function(){
 //1.slider左侧导航hover事件
 $('.nav_txt li').hover(function(){
   $(this).addClass('cur');
   var index=$(this).index(this);
   console.log(index);
   $('.course_kind').css('display','block');
   $('.course_kind .icon_fu .icon_fuli').css('display','none');
    $('.course_kind .icon_fu .icon_fuli').eq(index).css('display','block');
 },function(){
   $(this).removeClass('cur');
    $('.course_kind').css('display','none');
 });

  $('.course_kind').hover(function(){
      $(this).css('display','block');
  },function(){
       $(this).css('display','none');
  });

  //2.二级菜单的hover
  $('.course_kind .icon_fu .icon_fuli .a_gd').hover(function(){
     $(this).addClass('a_gd_cur');
  },function(){
       $(this).removeClass('a_gd_cur');
  });

  //3.学员故事hover
  $('.stu-item').hover(function(){
      $(this).addClass('stu-item-cur');
  },function(){
      $(this).removeClass('stu-item-cur');
  });

  //4.课程中心展示hover
  $('.course-right-item').hover(function(){
      $(this).addClass('course-right-item-cur');
  },function(){
      $(this).removeClass('course-right-item-cur');
  });
})(window);