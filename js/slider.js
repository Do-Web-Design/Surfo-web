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
    slidesPerView: 1,
    spaceBetween: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: next,
      prevEl: prev,
    },

    breakpoints: {
      390: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

for (let i = 1; i <= 12; i++) {
  sliderTestimonial(
    document.querySelector(".swiper" + i),
    document.querySelector(".swiper-button-next" + i),
    document.querySelector(".swiper-button-prev" + i)
  );
}
