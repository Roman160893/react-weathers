export const slickSliderSettings = {
  className: "center",
  infinite: false,
  centerPadding: "60px",
  slidesToShow: 6,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export const deviceSizes = {
  md: 760,
  xs: 576,
  lg: 960,
};
