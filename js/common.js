$(document).ready(function(){//start

  //모바일 gnb open
  $(".btn-ham").click(function(){
    $(".mgnb-wrap").fadeIn();
  });

  //모바일 gnb close
  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").fadeOut();
  });

  //모바일 gnb depth2
  $(".depth2").hide();
   $(".mgnb > li").click(function(){
     $(".depth2").stop().slideUp();
     $(this).children(".depth2").stop().slideDown();
    });
    

  //1920px gnb

  /*
  $(".gnb").mouseover(function() {
    $('.sub-menu').stop().slideDown(800);
});

$(".gnb").mouseleave(function() {
    $('.sub-menu').stop().slideUp(800);
});
*/



//전시 영역
var swiper = new Swiper(".number", {
  spaceBetween: 0,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".img-txt", {
  spaceBetween: 20,
  thumbs: {
    swiper: swiper,
  },
});

//swiper.controller.control = swiper2;
//swiper2.controller.control = swiper;






//아트 영역
var swiper3 = new Swiper(".art", {
  spaceBetween: 0,
  slidesPerView: 2,
  breakpoints: {
    768 : {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    autoplay: {
      delay: 300,
      disableOnInteraction: true
    },
  }
});



  AOS.init();





     
  
});//end