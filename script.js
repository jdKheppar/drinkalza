//For Smoothly Handling The Scroll Up and Scroll Down

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

window.addEventListener(
  "scroll",
  function handleScroll() {
    const scrollTopPosition =
      window.scrollY || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop) {
      $(".navbar").addClass("hidden");
      console.log("scrolling down");
    } else if (scrollTopPosition < lastScrollTop) {
      $(".navbar").removeClass("hidden");
      console.log("scrolling up");
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  },
  false
);

/*let prevScrollPos = window.scrollY;
let isAtTop = prevScrollPos === 0;

$(document).ready(function () {
  prevScrollPos = window.scrollY; // Initialize prevScrollPos

  $(window).on("scroll", function () {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
      // Reset the flag when the user scrolls back to the top
      isAtTop = true;
    } else if (isAtTop || currentScrollPos > 0) {
      // Handle initial scroll from the top
      isAtTop = false;
      $(".navbar").addClass("hidden");
    }

    if (prevScrollPos > currentScrollPos) {
      // User is scrolling up, show navbar
      $(".navbar").removeClass("hidden");
    } else {
      // User is scrolling down, hide navbar
      $(".navbar").addClass("hidden");
    }

    prevScrollPos = currentScrollPos;
  });
});*/

//Hamburger
let hamburger = document.getElementById("hamburger-link");
let mobileLinkDiv = document.getElementById("mobile-link-div");
hamburger.addEventListener("click", () => {
  mobileLinkDiv.style.display = "flex";
  hamburger.style.display = "none";
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
