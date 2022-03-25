const mainSection = document.querySelector(".mainSection");
const offerSection = document.querySelector(".offerSection");

const selectType = document.querySelector(".select__type");
const selectWhere = document.querySelector(".select__where");
const btnGo = document.getElementById("btn-Go");

const cardsOffer = document.querySelectorAll("[offer]");
const cardsOfferDiv = document.querySelector(".offer__searched");

const offerHeadingMain = document.querySelector("[offer-heading-main]");
const offerHeadingSecond = document.querySelector(".offer-heading-Second");

////////////////////////////////////////////////////////////////////////////

// current data

const date = new Date();
const currentDate = date.toISOString().substring(0, 10);
document.getElementById("date-search").value = currentDate;

//tommorow

const days = 1;
const newDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
const tommorow = newDate.toISOString().substring(0, 10);
document.getElementById("date-search-tommorow").value = tommorow;

//min date = today

document.getElementById("date-search").setAttribute("min", currentDate);
document
  .getElementById("date-search-tommorow")
  .setAttribute("min", currentDate);

//layout select options in search bar with select2.js

$(document).ready(function () {
  $(".select__type").select2({
    placeholder: "Adventure with us",
    allowClear: true,
  });
});

$(document).ready(function () {
  $(".select__where").select2({
    placeholder: "Island",
    allowClear: true,
  });
});

// click btn Go in search Bar

btnGo.addEventListener("click", function () {
  offerSection.classList.remove("hidden");
  mainSection.classList.add("hidden");
  cardsOfferDiv.classList.add("hidden");

  window.scrollTo(0, 0);

  for (let i = 0; i < cardsOffer.length; i++) {
    const cardsNew = cardsOffer[i].getAttribute("id");
    const results = [];

    const optionType = function (val, heading, name) {
      if (selectType.value == val) {
        cardsOfferDiv.classList.remove("hidden");
        offerHeadingSecond.classList.remove("hidden");
        offerHeadingMain.innerHTML = heading;

        if (cardsNew.endsWith(name)) results.push(cardsNew);

        for (const el of results)
          document
            .getElementById("offer-search-div")
            .appendChild(document.getElementById(el));
      }
    };

    const optionWhere = function (valW, heading, name) {
      if (selectWhere.value == valW) {
        cardsOfferDiv.classList.remove("hidden");
        offerHeadingSecond.classList.remove("hidden");
        offerHeadingMain.innerHTML = heading;

        if (cardsNew.startsWith(name)) results.push(cardsNew);

        for (const el of results)
          document
            .getElementById("offer-search-div")
            .appendChild(document.getElementById(el));
      }
    };

    optionType("1", "Water Sports around Canaries", "_Sport");
    optionType("2", "Water Sports around Canaries", "_Sport");
    optionType("3", "Water Sports around Canaries", "_Sport");
    optionType("4", "Water Sports around Canaries", "_Sport");
    optionType("5", "Time for Hike", "_Hike");
    optionType("6", "One Day Trips", "_Day");
    optionWhere("1", "TENERIFE", "TEN");
    optionWhere("2", "LANZAROTE", "LAN");
    optionWhere("3", "FUERTEVENTURA", "FUE");
    optionWhere("4", "GRAN CANARIA", "GRA");
    optionWhere("5", "LA PALMA", "LAP");
    optionWhere("6", "LA GOMERA", "LAG");
    optionWhere("7", "EL HIERRO", "ELH");
  }
});

//restart Offer Container

export const CleanCardsOffer = function () {
  for (let i = 0; i < cardsOffer.length; i++) {
    const cardsNew = cardsOffer[i].getAttribute("id");
    const cardsBack = new Array(cardsNew);

    for (const el of cardsBack)
      document
        .getElementById("offer-SeeMore-div")
        .appendChild(document.getElementById(el));
  }
};
