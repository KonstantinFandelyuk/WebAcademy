const bodyElement = document.getElementById("body");
const modalElement = document.getElementById("modal");
const buttonElement = document.querySelector(".burger__menu");
const closeModalElement = document.querySelector(".modal__close");

buttonElement.addEventListener("click", function() {
  bodyElement.classList.add("hidden-scroll");
  modalElement.classList.add("active");
  // animatedModalElement.classList.add("fadeInDown");
});

closeModalElement.addEventListener("click", function() {
  modalElement.classList.remove("active");
  bodyElement.classList.remove("hidden-scroll");
});

$(document).ready(function() {
  $(".feedback-clients").slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });
  $(".faq_item_title_inner").on("click", function() {
    $(this)
      .parents(".faq_item")
      .find(".faq_item_body")
      .slideToggle(300);
    $(this).toggleClass("open");
    if ($(this).hasClass("show_all")) {
      if ($(this).hasClass("open")) {
      }
    }
  });
});
