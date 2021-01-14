$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots:true,
    arrows:true,
    centerMode:true,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        dots: false,
        centerPadding: false,
      }
    },
    ]
  });
  
  $('.autoplay').on('beforeChange', function(){
    $('.slick-current').removeClass('is--active');
  });
  $('.autoplay').on('afterChange', function(){
    $('.slick-current').addClass('is--active');
  });
  
  