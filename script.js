const onModalToggle = () => {
  let modal = document.querySelectorAll(".mobile-nav")[0];
  if (modal.style.opacity === "") {
    modal.style.opacity = "1";
    modal.setAttribute("aria-hidden", "true");
    modal.querySelectorAll("a").forEach((link) => {
      link.removeAttribute("tabindex");
    });
    document
      .querySelectorAll(".header__menu")[0]
      .setAttribute("src", "./images/icon-close.svg");
  } else {
    modal.style.opacity = "";
    modal.setAttribute("aria-hidden", "false");
    modal.querySelectorAll("a").forEach((link) => {
      link.setAttribute("tabindex", "-1");
    });
    document
      .querySelectorAll(".header__menu")[0]
      .setAttribute("src", "./images/icon-hamburger.svg");
  }
};

const updateAttributes = () => {
  const screenWidth = window.innerWidth;
  let modal = document.querySelector(".mobile-nav");
  let navButton = document.querySelector(".header__btn")
  if (screenWidth >= 768) {
    modal.setAttribute("aria-hidden", "false");
    modal.querySelectorAll("a").forEach((link) => {
      link.removeAttribute("tabindex");
    });
    navButton.removeAttribute("onclick")
  } else {
    modal.setAttribute("aria-hidden", "true");
    modal.querySelectorAll("a").forEach((link) => {
      link.setAttribute("tabindex", "-1");
    });
    navButton.setAttribute("onclick", "onModalToggle()")
  }
};

updateAttributes();

window.addEventListener("resize", updateAttributes);
