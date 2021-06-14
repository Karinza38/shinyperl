$( document ).ready(function() {
  $('#slideshow').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    focusOnSelect: true,
  });
});
