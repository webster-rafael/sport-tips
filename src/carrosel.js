$('.autoplay2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true
        }
      },
    ],
prevArrow: '<button type="button" class="slick-prev focus:outline-none ml-3 text-blue-500"></button>',
  nextArrow: '<button type="button" class="slick-next focus:outline-none mr-3"></button>'
    });
