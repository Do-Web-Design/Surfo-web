const nav = document.querySelector(".nav");
const navLinksAll = document.querySelectorAll(".nav__link");
const btnSaveNav = document.querySelector(".nav__btn");
const headerAll = document.querySelector(".header__all");
const navBookmarksList = document.querySelector(".bookmarks");
const navHeight = nav.getBoundingClientRect().height;

const navLinksRight = document.querySelectorAll(".nav__right--links");
const btnsCloseLogSign = document.querySelectorAll(".closeLogSign");

//////////////////////////////////////////////////////////////////////////////

const stickyNav = function (entries) {
  const [entry] = entries;
  const links = Object.values(navLinksAll);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");

    btnSaveNav.classList.add("sticky");
    navBookmarksList.classList.add("sticky");

    for (let i = 0; i < links.length; i++) {
      navLinksAll[i].classList.add("sticky");
    }
  } else {
    nav.classList.remove("sticky");

    btnSaveNav.classList.remove("sticky");
    navBookmarksList.classList.remove("sticky");

    for (let i = 0; i < links.length; i++) {
      navLinksAll[i].classList.remove("sticky");
    }
  }
};

const headerAllObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerAllObserver.observe(headerAll);

//active nav links

for (let i = 0; i < navLinksRight.length; i++) {
  navLinksRight[i].addEventListener("click", function () {
    navLinksRight[i].classList.add("active");
  });
}
for (let j = 0; j < btnsCloseLogSign.length; j++) {
  btnsCloseLogSign[j].addEventListener("click", function () {
    navLinksRight[j].classList.remove("active");
  });
}
