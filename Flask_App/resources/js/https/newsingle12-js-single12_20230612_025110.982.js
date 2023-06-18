$(document).ready(function () {
  let headerTop = $("header").offset().top;
  function Lightbox() {
    var $gallery = new SimpleLightbox(".lightbox", {});
  }
  Lightbox();
  $(window).scroll(function () {
    var scroll_top = $("html").scrollTop();
    if (scroll_top > 80) {
      $("body").addClass("sticky");
      $(".header").addClass("scroolling");
    } else {
      $("body").removeClass("sticky");
      $(".header").removeClass("scroolling");
    }
  });

  $(".nav-1").click(function (e) {
    e.preventDefault();
    $(".nav-1").removeClass("nav__active");
    $(this).addClass("nav__active");
  });
  $(".js--mobile-nav__trigger").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("js--mobile-menu-active");
  });
  $(".has-menu .title").click(function (e) {
    e.preventDefault();
    $(".has-menu").toggleClass("jsmobile-active");
  });
  $(".modal_video").click(function (e) {
    e.preventDefault();
    $(".modal-video").fadeToggle("slow");
    $("body").toggleClass("active");
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".modal-video").fadeToggle("slow");
    $("body").toggleClass("active");
  });
  $(".video-btn").click(function (e) {
    e.preventDefault();
    $(".videoHero").toggleClass("isActive");
    $(".videoHero::before").removeClass("isActive");
  });
  $(".videoHero .close").click(function (e) {
    e.preventDefault();
    $(".videoHero").removeClass("isActive");
  });
  $("a.contact").click(function (e) {
    e.preventDefault();
    let href = $(this).attr("href");
    let section = $(href);
    let positisonSection = section.offset().top;
    let heightHeader = $("header").height();
    window.scrollTo({
      top: positisonSection - heightHeader,
      behavior: "smooth",
    });
  });
  $(".backtotop").click(function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  $("  header .main__header .nav__primary li a").each(function () {
    var a = $(this),
      link = a.prop("href"),
      currentLink = window.location.href;

    if (currentLink.slice(-1) == "/") {
      currentLink = currentLink.substring(0, currentLink.length - 1);
    }
    if (link.slice(-1) == "/") {
      link = link.substring(0, link.length - 1);
    }
    if (link == currentLink) {
      $(this).closest("li").addClass("selectedItem");
    }
  });
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(".slider-wrap").slick({
  slidesToShow: 1,
  slidesToScroll: 1,

  infinite: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
});
$(".show-appointment-time").on("change", function () {
  var val = $(this).val();
  if (val == 2) {
    $(".show-appointment-time-ct").toggle("show");
  } else {
    $(".show-appointment-time-ct").toggle("hide");
  }
});
