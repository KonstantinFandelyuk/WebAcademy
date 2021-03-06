// --------------------MODAL BURGER MENU------------------------

// document.addEventListener("click", function(event) {
//   let buttonElement = document.querySelector("[data-id=modal_menu]"),
//     modalElement = document.querySelector(".modal__menu"),
//     animatedModalElement = document.querySelector(".modal__menu-background"),
//     closeModalElement = event.target.closest(".modal__close");
//   if (buttonElement) {
//     modalElement.classList.add("active");
//     animatedModalElement.classList.add("fadeInDown");
//   }
//   if (closeModalElement) {
//     modalElement.classList.remove("active");
//   }
// });

const bodyElement = document.getElementById("body"),
  buttonElement = document.querySelector("[data-id=modal_menu]"),
  modalElement = document.querySelector(".modal__menu"),
  animatedModalElement = document.querySelector(".modal__menu-background"),
  closeModalElement = document.querySelector(".modal__close");

buttonElement.addEventListener("click", function() {
  bodyElement.classList.add("hidden-scroll");
  modalElement.classList.add("active");
  animatedModalElement.classList.add("fadeInDown");
});

closeModalElement.addEventListener("click", function() {
  modalElement.classList.remove("active");
  bodyElement.classList.remove("hidden-scroll");
});

// --------------------MODAL CALLBACK--------------------------

// let modalCallbackElement = document.querySelector(".modal-callback");
// let rew = document.querySelector("[data-id=callback-animated]");

// document.addEventListener("click", function (event) {
//   let btnElementBuy = event.target.closest(".buy, .button");
//   if (btnElementBuy) {
//     modalCallbackElement.classList.add("active");
//     rew.classList.add("zoomIn");
//   }
// });

// document.addEventListener("click", function (event) {
//   let isModalCallbackClose = event.target.closest(".modal-callback__close");
//   let isCalltoactionForm = event.target.closest(".calltoaction__form");
//   let isModalCallback = event.target.closest(".modal-callback");

//   console.log(isCalltoactionForm, isModalCallback)
//   if (isModalCallbackClose || (isModalCallback && !isCalltoactionForm)) {
//     modalCallbackElement.classList.remove("active");
//   }

// });
