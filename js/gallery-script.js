$(document).ready(function () {
  // const scroll = new Scrooth({
  //   element: window,
  //   strength: 10,
  //   acceleration: 2,
  //   deceleration: 0.975,
  // });

  document.querySelectorAll(".opera-image").forEach(function (photo) {
    const thisTarget = photo;
    new Waypoint({
      element: thisTarget,
      handler: function () {
        anime({
          targets: thisTarget,
          opacity: [0, 1],
          translateY: [100, 0],
          duration: 1500,
          easing: "easeInOutQuart",
          begin: function () {
            thisTarget.style.visibility = "visible";
          },
          complete: function () {
            const photoDescription = thisTarget.nextElementSibling;

            new Waypoint({
              element: thisTarget,
              handler: function () {
                anime(
                  {
                    targets: photoDescription,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: "easeOutQuad",
                    begin: function () {
                      photoDescription.style.visibility = "visible";
                    },
                  },
                  "-=400"
                );
                this.destroy();
              },
              offset: "100%",
            });
          },
        });
        this.destroy();
      },
      offset: "80%",
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
});
