//For Smoothly Handling The Scroll Up and Scroll Down

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

window.addEventListener(
  "scroll",
  function handleScroll() {
    const scrollTopPosition =
      window.scrollY || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop) {
      $(".navbar").addClass("hidden");
    } else if (scrollTopPosition < lastScrollTop) {
      $(".navbar").removeClass("hidden");
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  },
  false
);

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

// Section Flavor

$(document).ready(function () {
  $(".link").click(function (event) {
    event.preventDefault();

    const color = $(this).data("color");
    const text = $(this).data("text");
    $(".image-active").hide().css("opacity", 0);
    $(this).find(".image-active").show().css("opacity", 1);

    $(".heading").text(text).css("color", color);

    // For changing the images in the corresponding slides
    const linkClass = $(this).attr("class");
    let targetClass = "";
    let flavorSubClass = "";

    if (linkClass.includes("orange")) {
      targetClass = ".swipe-wrapper.orange";
      flavorSubClass = ".flavor-sub-wrapper._4";
    } else if (linkClass.includes("green")) {
      targetClass = ".swipe-wrapper._2";
      flavorSubClass = ".flavor-sub-wrapper._2";
    } else if (linkClass.includes("purple")) {
      targetClass = ".swipe-wrapper.prickly";
      flavorSubClass = ".flavor-sub-wrapper._3";
    } else if (linkClass.includes("pink")) {
      targetClass = ".swipe-wrapper.berry";
      flavorSubClass = ".flavor-sub-wrapper._1";
    }

    $(".swipe-wrapper").css("opacity", 0);
    $(targetClass).css("opacity", 1);

    $(".flavor-sub-wrapper").css("display", "none");
    $(flavorSubClass).css("display", "block");
  });
});

//mousemove
$(document).ready(function () {
  const container = $(".two-column-grid");
  const elementTop = container.find(".swipe-text.top");
  const elementBottom = container.find(".swipe-text.bottom");
  const elementBerry = container.find(".image.prickly");
  const elementImage2 = container.find(".image._2");

  container.mousemove(function (event) {
    const mouseY = event.clientY;
    const mouseX = event.clientX;
    const containerCenterY = container.height() / 2;
    const containerCenterX = container.width() / 2;
    const offsetY = mouseY - containerCenterY;
    const offsetX = mouseX - containerCenterX;

    const maxTranslationY = 5; // Adjust as needed
    const maxTranslationX = 5; // Adjust as needed

    const translationValueY = (offsetY / containerCenterY) * maxTranslationY;
    const translationValueX = (offsetX / containerCenterX) * maxTranslationX;

    elementTop.css("transform", `translateX(${translationValueX}px)`);
    elementBottom.css("transform", `translateX(${translationValueX}px)`);
    elementBerry.css("transform", `translateX(${translationValueX}px)`);
    elementImage2.css("transform", `translateY(${translationValueY}px)`);
  });

  container.mouseleave(function () {
    elementTop.css("transform", "translateX(0)");
    elementBottom.css("transform", "translateX(0)");
    elementBerry.css("transform", "translateX(0)");
    elementImage2.css("transform", "translateY(0)");
  });
});

$(document).ready(function () {
  $(".link").hover(
    function (event) {
      event.preventDefault();

      const color = $(this).data("color");
      const text = $(this).data("text");
      $(this).find(".image-hover").show().css("opacity", 1);

      $(".heading").text(text).css("color", color);
    },
    function () {
      $(this).find(".image-hover").hide().css("opacity", 0);
    }
  );
});

//Section FAQs
//For Handling the click on the Faq item
$(document).ready(function () {
  $(".faq-question-bar").click(function () {
    // Toggle the rotation of the plus icon
    $(this).find(".plus-icon").toggleClass("rotate-45");

    // Toggle the height of the dropdown content
    $(this).next(".faq-content").toggleClass("expanded");
    $(this).next(".faq-content").find(".w-video").css("opacity", 1);
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

//Section Find
$(document).ready(function () {
  $("#filterBtn").click(function () {
    // Hide elements
    $(
      "#storerocket-search, .storerocket-panel-options, .storerocket-no-results"
    ).css("display", "none");

    // Show and set display to "grid" for #storerocket-filter
    $("#storerocket-filter").css("display", "flex");
  });
  $("#radiusBtn").click(function () {
    // Hide elements
    $(
      "#storerocket-search, .storerocket-panel-options, .storerocket-no-results"
    ).css("display", "none");

    // Show and set display to "grid" for #storerocket-filter
    $("#storerocket-radius").css("display", "flex");
  });
  $("#filter-close").click(function () {
    $("#storerocket-search, .storerocket-panel-options").css("display", "flex");
    // Show elements
    $(".storerocket-no-results").css("display", "block");

    // Hide #storerocket-filter
    $("#storerocket-filter").css("display", "none");
  });
  $("#filter-apply").click(function () {
    $("#storerocket-search, .storerocket-panel-options").css("display", "flex");
    // Show elements
    $(".storerocket-no-results").css("display", "block");

    // Hide #storerocket-filter
    $("#storerocket-filter").css("display", "none");
  });
  $("#radius-close").click(function () {
    $("#storerocket-search, .storerocket-panel-options").css("display", "flex");
    // Show elements
    $(".storerocket-no-results").css("display", "block");

    // Hide #storerocket-radius

    $("#storerocket-radius").css("display", "none");
  });

  $(".filter-content").click(function () {
    $(".storerocket-overlay-filters-apply-button").css("display", "block");
    $(this).find(".storerocket-icon").toggle();
  });
  $(".radius-content").click(function () {
    $(this).find(".storerocket-icon").toggle();

    $(".radius-content").not(this).find(".storerocket-icon").hide();

    // Show elements
    $("#storerocket-search, .storerocket-panel-options").css("display", "flex");
    $(".storerocket-no-results").css("display", "block");

    // Hide #storerocket-radius
    $("#storerocket-radius").css("display", "none");
  });
});
