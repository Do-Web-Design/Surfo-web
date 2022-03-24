const postBtn = document.querySelectorAll(".comments__post");

const inputName = document.querySelectorAll(".user__text--name");
const inputComment = document.querySelectorAll(".user__text--comment");

/////////////////////////////////////////////////////////////////////////

//add comment -> new div as comment with like/comment icons

for (const el of postBtn) {
  el.addEventListener("click", function () {
    const inputNameValue = document.querySelectorAll(".comments__input--name");

    const allInputsNameValue = [];

    for (const n of inputNameValue) {
      const e = n.value;
      if (e !== "") allInputsNameValue.push(e);
    }

    const inputCommentValue = document.querySelectorAll(
      ".comments__input--comment"
    );

    const allInputsCommentValue = [];
    for (const n of inputCommentValue) {
      const e = n.value;
      if (e !== "") allInputsCommentValue.push(e);
    }

    const allContainers = document.querySelectorAll(".comments__container");
    for (const all of allContainers) {
      //
      const userNew = document.createElement("div");
      userNew.classList.add("user");

      const userImg = document.createElement("div");
      userImg.classList.add("user__img");

      const userBox = document.createElement("div");
      userBox.classList.add("user__box");

      userNew.appendChild(userImg);
      userNew.appendChild(userBox);

      const userName = document.createElement("div");
      userName.classList.add(
        "user__text",
        "user__text--name",
        "text__description",
        "text__description--dark"
      );

      const name = document.createTextNode(allInputsNameValue);
      userName.appendChild(name);

      const userComment = document.createElement("div");
      userComment.classList.add(
        "user__text",
        "user__text--comment",
        "text__description",
        "text__description--dark"
      );

      const comment = document.createTextNode(allInputsCommentValue);
      userComment.appendChild(comment);

      const userIcons = document.createElement("div");
      userIcons.classList.add("user__icons");

      //like

      const linkLike = document.createElement("div");
      linkLike.classList.add("text__small");
      const linkLikeText = document.createTextNode("Like");
      linkLike.appendChild(linkLikeText);

      const iconHeart = document.createElement("div");
      iconHeart.classList.add("newUserIcon");

      userIcons.appendChild(linkLike);
      userIcons.appendChild(iconHeart);

      function clickIcon(i) {
        $(i).on("click", function () {
          var clicks = $(this).data("clicks");
          if (clicks) {
            iconHeart.classList.add("newUserIconActive");
            linkLike.classList.add("activeLinkText");
          } else {
            iconHeart.classList.remove("newUserIconActive");
            linkLike.classList.remove("activeLinkText");
          }
          $(this).data("clicks", !clicks);
        });
      }

      clickIcon(iconHeart);
      clickIcon(linkLike);

      //comment

      const linkComment = document.createElement("p");
      linkComment.classList.add("text__small");
      const linkCommentText = document.createTextNode("Add comment");
      linkComment.appendChild(linkCommentText);

      const iconComment = document.createElement("div");
      iconComment.classList.add("newUserComment");

      function clickComment(i) {
        $(i).on("click", function () {
          var clicks = $(this).data("clicks");
          if (clicks) {
            iconComment.classList.add("newUserCommentActive");
            linkComment.classList.add("activeLinkText");
            window.scrollTo(0, 2800);
          } else {
            iconComment.classList.remove("newUserCommentActive");
            linkComment.classList.remove("activeLinkText");
          }
          $(this).data("clicks", !clicks);
        });
      }

      clickComment(iconComment);
      clickComment(linkComment);

      userIcons.appendChild(linkComment);
      userIcons.appendChild(iconComment);

      userBox.appendChild(userName);
      userBox.appendChild(userComment);
      userBox.appendChild(userIcons);

      for (const n of inputNameValue) {
        const e = n.value;
        if (e !== "") all.prepend(userNew);
      }
    }

    const allForms = document.querySelectorAll(".comments__form");
    for (const z of allForms) z.reset();
  });
}

// likes and comments icons

function addLike(el) {
  const icon = document.getElementById(el.id.replace("ch", "l"));
  if (el.checked) {
    icon.classList.add("activeLinkText");
  } else {
    icon.classList.remove("activeLinkText");
  }
}

function addComment(el) {
  const icon = document.getElementById(el.id.replace("chc", "lc"));
  if (el.checked) {
    icon.classList.add("activeLinkText");
    window.scrollTo(0, 2800);
  } else {
    icon.classList.remove("activeLinkText");
  }
}
