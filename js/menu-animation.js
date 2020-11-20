$(document).ready(function () {
  $(".responsive-menu li").css("transform", "translateY(100%)");

  var animation = anime({
    targets: ".responsive-menu li",
    easing: "easeOutCubic",
    translateY: 0,
    opacity: 1,
    delay: anime.stagger(200),
    duration: 2000,
  });

  $(".hamburger").on("click", function () {
    $(".bar1").toggleClass("bar1-opened");
    $(".bar2").toggleClass("bar2-opened");
    $(".responsive-menu").toggleClass("responsive-menu-open");
    $("body").toggleClass("hide-scrollbar");

    if ($(".bar1").hasClass("bar1-opened")) {
      setTimeout(function () {
        animation;
      }, 500);
    } else {
      setTimeout(function () {
        animation.restart();
      }, 500);
    }
  });
});
