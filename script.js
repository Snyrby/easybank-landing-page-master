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

//   if (document.querySelectorAll(".mobile-nav")[0].style.opacity) {
//     console.log("show");

//     document.querySelectorAll(".mobile-nav")[0].classList.toggle("mobile-nav--visible");
//     document
//       .querySelectorAll(".header__menu")[0]
//       .setAttribute("src", "./images/icon-close.svg");
//   } else {
// document.querySelectorAll(".mobile-nav")[0].style.display = "";
// document
//   .querySelectorAll(".header__menu")[0]
//   .setAttribute("src", "./images/icon-hamburger.svg");
//   }
