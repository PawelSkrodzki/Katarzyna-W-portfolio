$(document).ready(function () {
  // const scroll = new Scrooth({
  //   element: window,
  //   strength: 10,
  //   acceleration: 2,
  //   deceleration: 0.975,
  // });

  const continuousElements = document.getElementsByClassName("animated-text");

  for (var i = 0; i < continuousElements.length; i++) {
    new Waypoint({
      element: continuousElements[i],
      handler: function () {
        target = this.element.getElementsByClassName("top-fadein");
        target2 = this.element.getElementsByClassName("bottom-fadein");

        let tl = anime.timeline({
          easing: "easeOutQuad",
        });

        tl.add(
          {
            targets: target,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 900,
            delay: anime.stagger(400),
            begin: function () {
              $(".animated-text").css("visibility", "visible");
            },
          },
          "+=200"
        ).add(
          {
            targets: target2,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 900,
            delay: anime.stagger(400),
          },
          "-=400"
        );
        this.destroy();
      },
      offset: "100%",
    });
  }

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
});
