import { CleanCardsOffer } from "./searchbar.js";

const mainSection = document.querySelector(".mainSection");
const offerSection = document.querySelector(".offerSection");
const toursSection = document.querySelector(".toursSection");

const tourContainersAll = document.querySelectorAll(".tourContainer");

const cardsOfferDiv = document.querySelector(".offer__searched");
const offerHeadingMain = document.querySelector("[offer-heading-main]");
const offerHeadingSecond = document.querySelector(".offer-heading-Second");

const navLinkOffer = document.querySelector(".nav__offer");
const btnOurOffer = document.querySelector(".nav__offer");
const btnLogo = document.querySelector(".nav__logo");

//links in cards medium to opinions tour
const linksToOpinions = document.querySelectorAll(".link-to-opinions");
const tourContainerForOpinions = document.querySelectorAll(".tour-opinions");

///////////////////////////////////////////////////////////////////////////

//btn Our offer

btnOurOffer.addEventListener("click", function () {
  navLinkOffer.classList.add("active");
  mainSection.classList.add("hidden");
  toursSection.classList.add("hidden");
  offerSection.classList.remove("hidden");

  offerHeadingMain.innerHTML = "Adventures with us";
  offerHeadingSecond.classList.add("hidden");
  cardsOfferDiv.classList.add("hidden");

  CleanCardsOffer();
  window.scrollTo(0, 0);
});

//btn logo

btnLogo.addEventListener("click", function () {
  navLinkOffer.classList.remove("active");
  mainSection.classList.remove("hidden");
  offerSection.classList.add("hidden");
  toursSection.classList.add("hidden");

  CleanCardsOffer();
  window.scrollTo(0, 0);
});

//btns See more

const clickBtnsToSeeTour = function (btn, container) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      navLinkOffer.classList.remove("active");
      mainSection.classList.add("hidden");
      offerSection.classList.add("hidden");
      toursSection.classList.remove("hidden");
      for (const el of tourContainersAll) el.classList.add("hidden");
      window.scrollTo(0, 0);

      container.classList.remove("hidden");
    });
  }
};

for (let i = 0; i <= 12; i++) {
  clickBtnsToSeeTour(
    document.querySelectorAll(".btn-tour" + i),
    document.querySelector(".tourContainer" + i)
  );
}

//click on opinions on cards Medium

for (let i = 0; i < linksToOpinions.length; i++) {
  linksToOpinions[i].addEventListener("click", function () {
    mainSection.classList.add("hidden");
    toursSection.classList.remove("hidden");
    for (const el of tourContainersAll) el.classList.add("hidden");
    tourContainerForOpinions[i].classList.remove("hidden");
  });
}
