// --------------------MODAL BURGER MENU------------------------

let buttonElement = document.querySelector("[data-id=modal-button]");
let modalElement = document.querySelector(".modal");
let animateModalElement = document.querySelector(".modal-background");
let closeModalElement = document.querySelector(".modal__close");

buttonElement.addEventListener("click", function() {
  modalElement.classList.add("active");
  animateModalElement.classList.add("slideInRight");
});

closeModalElement.addEventListener("click", function() {
  modalElement.classList.remove("active");
});

// --------------------MODAL CALLBACK--------------------------

let modalCallbackElement = document.querySelector(".modal-callback");
let rew = document.querySelector("[data-id=callback-animated]");

document.addEventListener("click", function(event) {
  let btnElementBuy = event.target.closest(".buy, .button");
  if (btnElementBuy) {
    modalCallbackElement.classList.add("active");
    rew.classList.add("zoomIn");
  }
});

document.addEventListener("click", function(event) {
  let isModalCallbackClose = event.target.closest(".modal-callback__close");
  let isCalltoactionForm = event.target.closest(".calltoaction__form");
  let isModalCallback = event.target.closest(".modal-callback");

  console.log(isCalltoactionForm, isModalCallback);
  if (isModalCallbackClose || (isModalCallback && !isCalltoactionForm)) {
    modalCallbackElement.classList.remove("active");
  }
});

//--------------------SLIDER--------------------------

let sliderServiceList = document.querySelector("#slider-service-list");
let sliderImg = sliderServiceList.querySelectorAll(".slider-img");
let curNum = 0;

sliderServiceList.addEventListener("click", function(event) {
  let btn = event.target.closest("[data-btn]"),
    countSlides = sliderImg.length;

  if (btn) {
    let direction = btn.getAttribute("data-btn");
    sliderImg[curNum].classList.remove("active");
    if (direction == "prev") {
      curNum--;
    } else {
      curNum++;
    }

    //direction == "prev" ? curNum-- : curNum++;

    if (curNum < 0) {
      curNum = countSlides - 1;
    }
    if (curNum > countSlides - 1) {
      curNum = 0;
    }
    sliderImg[curNum].classList.add("active");
    // console.log("add", curNum, direction);
  }
  // sliderImg[curNum].classList.remove("active");
  // curNum++
  // sliderImg[curNum].classList.add("active")
});

// -------------------------------------------------

$(document).ready(function() {
  $(".slider").slick({
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "172px",
    // variableWidth: false,
  });
});