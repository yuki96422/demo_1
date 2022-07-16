$(".menu").click(function (){
 $(this).toggleClass('active');
 $("#nav").toggleClass('active');
 $(".mask").toggleClass('active');
});

$('.slider').slick({
  arrows:false,
  slidesToShow: 3,
	slidesToScroll: 1,
  centerMode: true,
  centerPadding: "5%",
  responsive:[
    {
      breakpoint: 900,
      settings:{
        centerPadding: "50px",
        slidesToShow:1
      }
    }
  ]
});

$(window).scroll(function(){
  const windowHeight = $(window).height();
  const scroll = $(window).scrollTop();
  console.log(windowHeight);
  console.log(scroll);

  $('.grid li').each(function(){
    const targetPosition = $(this).offset().top;
    console.log(targetPosition);
    if(scroll > targetPosition - windowHeight + 100){
      $(this).addClass('fade-in')
    }
  });
});