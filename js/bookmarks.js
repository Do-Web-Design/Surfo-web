const bookmarkContainer = document.getElementById("popup__bookmarks");
const bookmarksListItem = document.querySelectorAll(".bookmarks__content");
const iconNav = document.querySelector(".icon__save--nav");

///////////////////////////////////////////////////////////////////////////////////////

// click on bookmarks nav and see the list of bookmarks

bookmarkContainer.classList.add("hidden");

iconNav.addEventListener("click", function () {
  bookmarkContainer.classList.remove("hidden");
});

bookmarkContainer.onmouseleave = function () {
  setTimeout(function () {
    bookmarkContainer.classList.add("hidden");
  }, 1000);
};

//all bookmatkList hidden as first

for (let i = 0; i < bookmarksListItem.length; i++) {
  bookmarksListItem[i].classList.add("hidden");
}

// // bookmarks active in all tour's cards

function checkbox(el, icons, list) {
  const iconsAll = Object.values(icons);
  const checkboxes = Object.values(el);

  for (const c of checkboxes) {
    c.onclick = function () {
      if (c.checked) {
        for (const o of checkboxes) o.checked = true;
        for (const i of iconsAll) {
          i.classList.add("colorYellow");
          i.setAttribute("name", "bookmark");
        }
        iconNav.classList.add("colorYellow");
        list.classList.remove("hidden");
      } else {
        for (const l of iconsAll) {
          l.classList.remove("colorYellow");
          l.setAttribute("name", "bookmark-outline");
        }
        for (const f of checkboxes) f.checked = false;
        list.classList.add("hidden");
        iconNav.classList.remove("colorYellow");
      }
    };
  }
}

for (let i = 0; i <= 12; i++) {
  checkbox(
    document.querySelectorAll(".checkboxes" + i),
    document.querySelectorAll(".icons" + i),
    document.getElementById("bk__tour" + i)
  );
}
