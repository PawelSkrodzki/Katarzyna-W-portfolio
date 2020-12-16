$(document).ready(function () {
  $(".responsive-menu li").css("transform", "translateY(100%)");

  $(".hamburger").on("click", function () {
    const tl = anime.timeline({
      easing: "easeOutCubic",
    });

    $(".bar1").toggleClass("bar1-opened");
    $(".bar2").toggleClass("bar2-opened");
    $("body").toggleClass("hide-scrollbar");

    if ($(".bar1").hasClass("bar1-opened")) {
      tl.add({
        targets: ".responsive-menu",
        width: "100%",
        duration: 300,
        easing: "linear",
      }).add({
        targets: ".responsive-menu li",
        translateY: 0,
        opacity: 1,
        delay: anime.stagger(200),
        duration: 1500,
      });
    } else {
      anime({
        targets: ".responsive-menu",
        width: "0%",
        duration: 300,
        easing: "linear",
        complete: () => {
          const navElements = Array.from(document.querySelectorAll(".responsive-menu li"));
          navElements.forEach((el) => {
            el.style.transform = "translateY(100%)";
            el.style.opacity = 0;
          });
        },
      });
    }
  });
});
