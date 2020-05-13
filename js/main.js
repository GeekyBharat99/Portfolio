/* -------------------------------------------------------------------
 [Table of contents]
 * 01.Preloader
 * 02.Wow Js
 * 03.Navbar
 * 04.Counter Up
 * 05.Owl Carousel
 * 06.ScrollSpy
 * 07.ScrollIt
 * 08.Magnific Popup
 * 09.Isotopğe Gallery
 * 10.Copyright
 * 11.Skills Bar
 * 12.Ripples Effect
 * 13.Glitch Effect
 * 14.Resume Tab Toggle
*/

$(function () {
  "use strict";

  // Call all ready functions
  portical_preloader(),
    portical_wowJs(),
    portical_navbar(),
    portical_counterUp(),
    portical_owlCarousel(),
    portical_navScrollSpy(),
    portical_scrollIt(),
    portical_magnificPopup(),
    portical_isotopeGallery(),
    portical_copyrightDynamicYear(),
    portical_skillsBar(),
    portical_ripplesEffect(),
    portical_glitchEffect(),
    portical_resumeTabToggle(),
    portical_pricingTabToggle(),
    portical_contactForm();
});
/* ------------------------------------------------------------------- */
/* 01.Preloader
/* ------------------------------------------------------------------- */
function portical_preloader() {
  "use-strict";

  // Variables
  var preloaderWrap = $(".preloader-wrap"),
    loaderInner = $(".preloader-wrap .preloader-inner");

  $(window).load("body", function () {
    loaderInner.fadeOut();
    preloaderWrap.delay(350).fadeOut("slow");
  });
}
/* ------------------------------------------------------------------- */
/* 02.Wow Js
/* ------------------------------------------------------------------- */
function portical_wowJs() {
  "use-strict";

  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    scrollContainer: null,
  });
  wow.init();
}
/* ------------------------------------------------------------------- */
/* 03.Navbar
/* ------------------------------------------------------------------- */
function portical_navbar() {
  "use-strict";

  // Variables
  var header = $(".header"),
    navbarLink = $(".navbar-nav>li>a"),
    scrollTopBtn = $(".scroll-top-btn"),
    logoTransparent = $(".logo-transparent"),
    logoNormal = $(".logo-normal");

  // When Window On Scroll
  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > 100) {
      header.addClass("header-shrink");
      scrollTopBtn.addClass("active");
      logoTransparent.hide();
      logoNormal.show();
    } else {
      header.removeClass("header-shrink");
      scrollTopBtn.removeClass("active");
      logoTransparent.show();
      logoNormal.hide();
    }
  });
  navbarLink.on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
}
/* ------------------------------------------------------------------- */
/* 04.Counter Up
/* ------------------------------------------------------------------- */
function portical_counterUp() {
  "use-strict";

  // Variables
  var counterItem = $(".counter");

  counterItem.counterUp({
    delay: 10,
    time: 1000,
  });
}
/* ------------------------------------------------------------------- */
/* 05.Owl Carousel
/* ------------------------------------------------------------------- */
function portical_owlCarousel() {
  "use-strict";

  // Variables
  var testimonialsCarousel = $(".testimonials-carousel"),
    portfolioCarousel = $(".portfolio-carousel");

  // Testimonial Carousel
  testimonialsCarousel.owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    stagePadding: 0,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // Testimonial Carousel
  portfolioCarousel.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    stagePadding: 0,
    smartSpeed: 1000,
    navText: [
      "<span class='fa fa-angle-left'></span>",
      "<span class='fa fa-angle-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
}
/* ------------------------------------------------------------------- */
/* 06.ScrollSpy
/* ------------------------------------------------------------------- */
function portical_navScrollSpy() {
  "use-strict";

  // Scroll Spy
  $("body").scrollspy({
    target: "#fixedNavbar",
    offset: 95,
  });
}
/* ------------------------------------------------------------------- */
/* 07.ScrollIt
/* ------------------------------------------------------------------- */
function portical_scrollIt() {
  "use-strict";

  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "swing",
    scrollTime: 600,
    activeClass: "active",
    onPageChange: null,
    topOffset: -15,
  });
}
/* ------------------------------------------------------------------- */
/* 08.Magnific Popup
/* ------------------------------------------------------------------- */
function portical_magnificPopup() {
  "use-strict";

  // Variables
  var portfolioGrid = $(".portfolio-grid");
  videoPopup = $(".popup-youtube");

  // Magnific Popup Video Iframe
  videoPopup.magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    removalDelay: 300,
  });

  //  Portfolio Gallery Popup */
  portfolioGrid.magnificPopup({
    delegate: ".portfolio-zoom-link",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
}
/* ------------------------------------------------------------------- */
/* 09.Isotopğe Gallery
/* ------------------------------------------------------------------- */
function portical_isotopeGallery() {
  "use-strict";

  // Variables
  var portfolioFilterBtn = $(".portfolio-filter > a"),
    portfolioGalleryWrap = $(".portfolio-gallery");

  // Porfolio Filtering Click Events
  portfolioFilterBtn.on("click", function () {
    portfolioFilterBtn.removeClass("current");
    $(this).addClass("current");
  });

  // Portfolio Masonary Gallery
  portfolioGalleryWrap.imagesLoaded(function () {
    var grid = $(".portfolio-gallery").isotope({
      itemSelector: ".glry-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".glry-item",
      },
    });

    // filter items on button click
    portfolioFilterBtn.on("click", function () {
      var filterValue = $(this).attr("data-gallery-filter");
      grid.isotope({
        filter: filterValue,
      });
    });
  });
}
/* ------------------------------------------------------------------- */
/* 10.Copyright
/* ------------------------------------------------------------------- */
function portical_copyrightDynamicYear() {
  "use-strict";

  // Variables
  var fullYearCopyright = $("#fullYearCopyright"),
    getFullYearDate = new Date().getFullYear();

  fullYearCopyright.text(getFullYearDate);

  $('[data-toggle="tooltip"]').tooltip();
}
/* ------------------------------------------------------------------- */
/* 11.Skills Bar
/* ------------------------------------------------------------------- */

function portical_skillsBar() {
  "use-strict";

  // Variables
  var skillsItem = $(".skills-item");

  skillsItem.each(function () {
    // Variables
    var skillPercent = $(this)
      .find(".skills-progress-value")
      .attr("data-percent");

    $(this)
      .find(".skills-progress-value")
      .css("width", skillPercent + "%");
    $(this)
      .find(".skills-item-text .skill-percent")
      .html(skillPercent + "%");
  });
}
/* ------------------------------------------------------------------- */
/* 12.Ripples Effect
/* ------------------------------------------------------------------- */

function portical_ripplesEffect() {
  "use-strict";

  $(".hero-ripless-banner").ripples({
    resolution: 500,
    dropRadius: 20,
    perturbance: 0.04,
  });
}
/* ------------------------------------------------------------------- */
/* 13.Glitch Effect
/* ------------------------------------------------------------------- */

function portical_glitchEffect() {
  "use-strict";

  $(".glitch-img").mgGlitch();
}
/* ------------------------------------------------------------------- */
/* 14.Resume Tab Toggle
/* ------------------------------------------------------------------- */
function portical_resumeTabToggle() {
  "use-scrict";

  // Variables
  var resumeTabLink = $(".resume-toggle-wrap > a"),
    resumeTabContent = $(".resume-tab-content");

  resumeTabLink.on("click", function () {
    resumeTabLink.removeClass("active");
    $(this).addClass("active");
    resumeTabContent.removeClass("active");
    resumeTabContent.eq($(this).index()).addClass("active animated fadeInUp");
  });
}
