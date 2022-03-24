//swiper - large cards - main page

function sliderCardsLarge(swiperContainer, next) {
  let swiper = new Swiper(swiperContainer, {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: next,
    },
  });
}

for (let i = 1; i <= 3; i++) {
  sliderCardsLarge(
    document.querySelector(".swiper__Cards" + i),
    document.querySelector(".swiper-button-next-Cards" + i)
  );
}

//swiper - testimonials - Tours' sections

function sliderTestimonial(swiperContainer, next, prev) {
  let swiper = new Swiper(swiperContainer, {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });

  if (
    window.matchMedia("(min-width : 35.31em)").matches &&
    window.matchMedia("(max-width : 43.75em)").matches
  ) {
    let swiper = new Swiper(swiperContainer, {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  }

  if (window.matchMedia("(max-width : 35.31em)").matches) {
    let swiper = new Swiper(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  }
}

for (let i = 1; i <= 12; i++) {
  sliderTestimonial(
    document.querySelector(".swiper" + i),
    document.querySelector(".swiper-button-next" + i),
    document.querySelector(".swiper-button-prev" + i)
  );
}
