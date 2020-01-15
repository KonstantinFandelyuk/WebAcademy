// --------------------MODAL BURGER MENU------------------------

let buttonElement = document.querySelector("[data-id=modal-button]");
let modalElement = document.querySelector(".modal");
let animateModalElement = document.querySelector(".modal-background");
let closeModalElement = document.querySelector(".modal__close");

buttonElement.addEventListener("click", function () {
  modalElement.classList.add("active");
  animateModalElement.classList.add("slideInRight");
});

closeModalElement.addEventListener("click", function () {
  modalElement.classList.remove("active");
});

// --------------------MODAL CALLBACK--------------------------

let modalCallbackElement = document.querySelector(".modal-callback");
let rew = document.querySelector("[data-id=callback-animated]");


document.addEventListener("click", function (event) {
  let btnElementBuy = event.target.closest(".buy, .button");
  if (btnElementBuy) {
    modalCallbackElement.classList.add("active");
    rew.classList.add("zoomIn");
  }
});

document.addEventListener("click", function (event) {
  let isModalCallbackClose = event.target.closest(".modal-callback__close");
  let isCalltoactionForm = event.target.closest(".calltoaction__form");
  let isModalCallback = event.target.closest(".modal-callback");

  console.log(isCalltoactionForm, isModalCallback)
  if (isModalCallbackClose || (isModalCallback && !isCalltoactionForm)) {
    modalCallbackElement.classList.remove("active");
  }

});