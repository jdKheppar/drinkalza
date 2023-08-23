//For Smoothly Handling The Scroll Up and Scroll Down

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

window.addEventListener(
  "scroll",
  function handleScroll() {
    const scrollTopPosition =
      window.scrollY || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop) {
      $(".navbar").addClass("hidden");
      //console.log("scrolling down");
    } else if (scrollTopPosition < lastScrollTop) {
      $(".navbar").removeClass("hidden");
      //console.log("scrolling up");
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  },
  false
);

//Hamburger
// let hamburger = document.getElementById("hamburger-link");
// let mobileLinkDiv = document.getElementById("mobile-link-div");
// let xHold = document.getElementById("x-hold");
// hamburger.addEventListener("click", () => {
//   mobileLinkDiv.style.transform = "translateX(0)";
//   $(".hamburger-line").hide();
//   xHold.style.display = "flex";
// });
let hamburger = document.getElementById("hamburger-link");
let mobileLinkDiv = document.getElementById("mobile-link-div");
let xHold = document.getElementById("x-hold");

hamburger.addEventListener("click", () => {
  if ($(".hamburger-line").is(":hidden")) {
    mobileLinkDiv.style.transform = "translateX(100%)";
    $(".hamburger-line").show();
    xHold.style.display = "none";
  } else {
    mobileLinkDiv.style.transform = "translateX(0)";
    $(".hamburger-line").hide();
    xHold.style.display = "flex";
  }
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileLinkDiv.style.transform = "translateX(100%)";

    $(".hamburger-line").css("display", "block");
  });
});
xHold.addEventListener("click", function () {
  console.log("xhold clicked");

  mobileLinkDiv.style.transform = "translateX(100%)";
  $(".hamburger-line").css("display", "block");
});

// Section Favor
// $(".padding-image").click(function () {
//   $(".image-active").hide().css("opacity", 0);
//   $(this).find(".image-active").show().css("opacity", 1);
// });

$(".link").click(function () {
  const color = $(this).data("color");
  const text = $(this).data("text");

  $(".image-active").hide().css("opacity", 0);
  $(this).find(".image-active").show().css("opacity", 1);

  $(".heading").text(text).css("color", color);
});

// const faqQuestionBars = document.querySelectorAll(".faq-question-bar");

// faqQuestionBars.forEach((faqQuestionBar) => {
//   faqQuestionBar.addEventListener("click", () => {
//     const plusIcon = faqQuestionBar.querySelector(".plus-icon");
//     const dropdownList = faqQuestionBar.nextElementSibling;

//     // Toggle the rotation of the plus icon
//     plusIcon.style.transform =
//       plusIcon.style.transform === "rotate(90deg)"
//         ? "rotate(0deg)"
//         : "rotate(90deg)";

//     // Toggle the height of the dropdown list
//     dropdownList.style.height =
//       dropdownList.style.height === "0px" ? "auto" : "0px";
//   });
// });

$(document).ready(function () {
  $(".faq-question-bar").click(function () {
    // Toggle the rotation of the plus icon
    $(this).find(".plus-icon").toggleClass("rotate-45");

    // Toggle the height of the dropdown content
    $(this).next(".faq-content").toggleClass("expanded");
  });
});

if (window.innerWidth < 992) {
  $(document).ready(function () {
    $section8Carousel = $(".w-layout-grid").slick({
      speed: 9000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      arrows: false,
    });
  });
}
