$(document).ready(function () {
  // const scroll = new Scrooth({
  //   element: window,
  //   strength: 10,
  //   acceleration: 2,
  //   deceleration: 0.975,
  // });

  new Waypoint({
    element: document.getElementById("lines-div"),

    handler: function () {
      const targetContainer = document.getElementById("lines-div");
      target = targetContainer.getElementsByClassName("line");
      targetArrat = Array.from(target);

      anime({
        targets: targetArrat,
        width: "100%",
        duration: 2000,
        easing: "easeInOutQuart",
        delay: anime.stagger(400),
        begin: function () {
          $(".line").css("visibility", "visible");
        },
      });
      this.destroy();
    },
    offset: "85%",
  });

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
          duration: 1500,
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
      offset: "90%",
    });
  });

  document.querySelectorAll(".single-top-fadein").forEach((target) => {
    new Waypoint({
      element: target,
      handler: function () {
        anime({
          easing: "easeOutQuad",
          targets: target,
          translateY: [-100, 0],
          opacity: [0, 1],
          duration: 1200,
          begin: () => {
            target.style.visibility = "visible";
          },
        });
        this.destroy();
      },
      offset: "90%",
    });
  });

  document.querySelectorAll(".opera-image").forEach(function (photo) {
    const thisTarget = photo;
    new Waypoint({
      element: thisTarget,
      handler: function () {
        anime({
          targets: thisTarget,
          opacity: [0, 1],
          translateY: [100, 0],
          duration: 2000,
          easing: "easeInOutQuart",
          begin: function () {
            thisTarget.style.visibility = "visible";
          },
          complete: function () {
            const photoDescription = thisTarget.nextElementSibling;

            new Waypoint({
              element: photoDescription,
              handler: function () {
                anime({
                  targets: photoDescription,
                  translateY: [50, 0],
                  opacity: [0, 1],
                  duration: 900,
                  easing: "easeOutQuad",
                  begin: function () {
                    photoDescription.style.visibility = "visible";
                  },
                });
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

  document.querySelectorAll(".single-bottom-fadein").forEach((singleTarget) => {
    const thisTargets = singleTarget;

    new Waypoint({
      element: thisTargets,
      handler: function () {
        console.log(singleTarget);
        anime({
          targets: thisTargets,
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 900,
          easing: "easeOutQuad",
          begin: function () {
            thisTargets.style.visibility = "visible";
          },
        });
        this.destroy();
      },
      offset: "100%",
    });
  });

  const footerContainer = document.querySelector(".footer");
  footerTargets = footerContainer.getElementsByClassName("bottom-fadein");
  const footerTargetsArray = Array.from(footerTargets);
  console.log(footerTargetsArray);

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
