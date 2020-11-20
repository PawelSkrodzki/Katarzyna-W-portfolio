var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1,
};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive
  ? {
      passive: false,
    }
  : false;
var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

$(window).on("beforeunload", function () {
  $("body").hide();
  $(window).scrollTop(0);
});

$(document).ready(function () {
  // const scroll = new Scrooth({
  //   element: window,
  //   strength: 10,
  //   acceleration: 1,
  //   deceleration: 0.975,
  // });

  // const actualScreenWidth = window.addEventListener("resize", () => {
  //   window.innerWidth;
  // });

  // if (actualScreenWidth >= 768) {
  //   fullAnimation();
  // }
  // animationWithoutLoader();

  $(".counter, .dot, .main-nav li, main-title span, .title-content").css("transform", "translateY(100%)");
  $(".main-nav li").css("transform", "translateY(-100%)");

  const targetWidth = 768;
  if ($(window).width() > targetWidth) {
    fullAnimation();
  } else {
    animationWithoutLoader();
  }
  // disableScroll()

  fullAnimation();

  function fullAnimation() {
    let tl = anime.timeline({
      easing: "easeInOutCubic",
      duration: 2000,
      delay: 0,
    });

    tl.add({
      targets: ".counter",
      translateY: "0%",
      duration: 1000,
    })

      .add(
        {
          targets: ".dot",
          translateY: "0%",
          duration: 1000,
        },
        "-=800"
      )

      .add({
        targets: ".counter",
        value: [1, 100],
        duration: 4000,
        easing: "easeInOutCubic",
        round: 1,
      })

      .add(
        {
          targets: ".dot",
          translateY: "100%",
          duration: 1000,
        },
        "-=300"
      )

      .add(
        {
          targets: ".counter",
          translateY: "130%",
          duration: 1000,
        },
        "-=700"
      )

      .add({
        targets: ".loader",
        opacity: 0,
        duration: 1200,
        complete: function () {
          $(".loader").css("display", "none");
        },
      })
      .add(
        {
          targets: ".title-content",
          translateY: 0,
          opacity: 1,
          easing: "easeOutCubic",
          delay: anime.stagger(400),
          duration: 1200,
        },
        "-=1000"
      )

      .add(
        {
          targets: ".main-nav li",
          translateY: 0,
          opacity: 1,
          delay: anime.stagger(300, {
            from: "last",
          }),
          duration: 1500,
        },
        "-=2000"
      )

      .add(
        {
          targets: ".main-title",
          translateX: 250,
          fontSize: 24,
          lineHeight: 26,
          left: -240,
          top: 80,
          duration: 2500,
        },
        "-=1000"
      )

      .add(
        {
          targets: ".overlay",
          bottom: "15%",
          easing: "easeOutCubic",
          duration: 1500,
        },
        "-=1500"
      )
      .add(
        {
          targets: ".overlay h2",
          bottom: "-18px",
          easing: "easeOutCubic",
          complete: function () {
            enableScroll();
            fadeInAnimations();
          },
        },
        "-=1300"
      );
  }

  function animationWithoutLoader() {
    $(".loader").hide();
    $(".main-title-js").removeClass("main-title").addClass("main-title-small");
    $(".main-title");

    let tl = anime.timeline({
      easing: "easeInOutCubic",
      duration: 2000,
      delay: 0,
    });
    tl.add(
      {
        targets: ".title-content",
        translateY: 0,
        opacity: 1,
        easing: "easeOutCubic",
        delay: anime.stagger(400),
        duration: 1200,
      },
      "+=500"
    )

      .add(
        {
          targets: ".main-nav li",
          translateY: 0,
          opacity: 1,
          delay: anime.stagger(300, {
            from: "last",
          }),
          duration: 1500,
        },
        "-=2000"
      )

      // .add(
      //   {
      //     targets: ".main-title",
      //     translateX: 250,
      //     fontSize: 27,
      //     lineHeight: 27,
      //     duration: 1500,
      //   },
      //   "-=1000"
      // )

      .add(
        {
          targets: ".overlay",
          bottom: "15%",
          easing: "easeOutCubic",
          duration: 1500,
        },
        "-=1500"
      )
      .add(
        {
          targets: ".overlay h2",
          bottom: "-18px",
          easing: "easeOutCubic",
          complete: function () {
            enableScroll();
            fadeInAnimations();
          },
        },
        "-=1300"
      );
  }

  function fadeInAnimations() {
    document.querySelectorAll(".animated-text").forEach((targetContainer) => {
      target = targetContainer.getElementsByClassName("top-fadein");
      const targetArray = Array.from(target);
      target2 = targetContainer.getElementsByClassName("bottom-fadein");
      const target2Array = Array.from(target2);

      new Waypoint({
        element: targetContainer,
        handler: function () {
          let tl = anime.timeline({
            easing: "easeOutQuad",
          });

          tl.add({
            targets: targetArray,
            translateY: [-100, 0],
            opacity: [0, 1],
            duration: 900,
            delay: anime.stagger(400),
            begin: () => {
              targetArray.forEach((element) => (element.style.visibility = "visible"));
            },
          }).add(
            {
              targets: target2Array,
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 900,
              delay: anime.stagger(400),
              begin: () => {
                target2Array.forEach((element) => (element.style.visibility = "visible"));
              },
            },
            "-=400"
          );
          this.destroy();
        },
        offset: "80%",
      });
    });

    document.querySelectorAll(".motto-fadein").forEach((targetContainer) => {
      const target = targetContainer.getElementsByClassName("motto-single-fadein");
      const targetArray = Array.from(target);
      const target2 = targetContainer.getElementsByClassName("motto-bottom-fadein");
      const target2Array = Array.from(target2);

      new Waypoint({
        element: targetContainer,
        handler: function () {
          let tl = anime.timeline({
            easing: "easeOutQuad",
          });

          tl.add({
            targets: targetArray,
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 900,
            delay: anime.stagger(400),
            begin: () => {
              targetArray.forEach((element) => (element.style.visibility = "visible"));
            },
          }).add(
            {
              targets: target2Array,
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 900,
              delay: anime.stagger(400),
              begin: () => {
                target2Array.forEach((element) => (element.style.visibility = "visible"));
              },
            },
            "-=400"
          );
          this.destroy();
        },
        offset: "80%",
      });
    });

    document.querySelectorAll(".opera-image").forEach(function (photo) {
      const thisTargets = photo;
      new Waypoint({
        element: thisTargets,
        handler: function () {
          anime({
            targets: thisTargets,
            opacity: [0, 1],
            translateY: [100, 0],
            duration: 2500,
            easing: "easeOutQuart",
            begin: function () {
              thisTargets.style.visibility = "visible";
            },
          });
          this.destroy();
        },
        offset: "65%",
      });
    });

    const footerContainer = document.querySelector(".footer");
    footerTargets = footerContainer.getElementsByClassName("bottom-fadein");
    const footerTargetsArray = Array.from(footerTargets);

    new Waypoint({
      element: footerContainer,
      handler: function () {
        anime({
          targets: footerTargetsArray,
          easing: "easeOutQuad",
          translateY: [100, 0],
          opacity: [0, 1],
          duration: 1000,
          delay: anime.stagger(600),
          begin: () => {
            footerTargetsArray.forEach((element) => (element.style.visibility = "visible"));
          },
        });
        this.destroy();
      },
      offset: "85%",
    });
  }
});
