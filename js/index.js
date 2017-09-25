 var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
	autoplay: 2000,//可选选项，自动滑动
    loop: true,
//  initialSlide :0,
	keyboardControl : true,
    paginationClickable :true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplayDisableOnInteraction : false,//点击之后继续自动播放
  })        