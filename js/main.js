$(".slider__items").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: !1,
  dots: !0,
  responsive: [
    { breakpoint: 989, settings: { slidesToShow: 2 } },
    { breakpoint: 605, settings: { slidesToShow: 1 } },
  ],
}),
  $(".burger__menu").on("click", function () {
    $(".menu__list, .burger__menu").toggleClass("menu__list--active"),
      $("body").toggleClass("lock");
  });
