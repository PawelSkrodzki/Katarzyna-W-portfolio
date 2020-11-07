
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

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
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



$(document).ready(function () {



  $('.counter, .dot, .main-nav li, main-title span, .title-content').css('transform', 'translateY(100%)');
  $('.main-nav li').css('transform', 'translateY(-100%)');

  // disableScroll()

  // function fullAnimation() {
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 2000,
      delay: 0
    })

    tl.add({
      targets: '.counter',
      translateY: '0%',
      duration: 1000,
    })

      .add({
        targets: '.dot',
        translateY: '0%',
        duration: 1000,
      }, '-=800')

      .add({
        targets: '.counter',
        value: [1, 100],
        duration: 4000,
        easing: 'easeInOutCubic',
        round: 1
      })

      .add({
        targets: '.dot',
        translateY: '100%',
        duration: 1000
      }, '-=300')

      .add({
        targets: '.counter',
        translateY: '130%',
        duration: 1000,
      }, '-=700')

      .add({
        targets: '.loader',
        opacity: 0,
        duration: 1200,
        complete: function () {
          $('.loader').css('display', 'none')
        }
      })
      .add({
        targets: '.title-content',
        translateY: 0,
        opacity: 1,
        easing: 'easeOutCubic',
        delay: anime.stagger(400),
        duration: 1200
      }, '-=1000')

      .add({
        targets: '.main-nav li',
        translateY: 0,
        opacity: 1,
        delay: anime.stagger(300, { from: 'last' }),
        duration: 1500
      }, '-=2000')


      .add({
        targets: '.main-title',
        translateX: 250,
        fontSize: 27,
        lineHeight: 27,
        left: -240,
        top: 47,
        duration: 2500
      }, '-=1000')

      .add({
        targets: '.overlay',
        bottom: '15%',
        easing: 'easeOutCubic',
        duration: 1500
      }, '-=1500')
      .add({
        targets: '.overlay h2',
        bottom: '-18px',
        easing: 'easeOutCubic',
        complete: function () {
          enableScroll()
          fadeInAnimations()
        }
      }, '-=1300')
  // };



  function animationWithoutLoader() {
    $(".loader").hide();

    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 2000,
      delay: 0
    })
    tl.add({
      targets: '.title-content',
      translateY: 0,
      opacity: 1,
      easing: 'easeOutCubic',
      delay: anime.stagger(400),
      duration: 1200
    }, '+=500')

      .add({
        targets: '.main-nav li',
        translateY: 0,
        opacity: 1,
        delay: anime.stagger(300, { from: 'last' }),
        duration: 1500
      }, '-=2000')


      .add({
        targets: '.main-title',
        translateX: 250,
        fontSize: 27,
        lineHeight: 27,
        left: -240,
        top: 47,
        duration: 2500
      }, '-=1000')

      .add({
        targets: '.overlay',
        bottom: '15%',
        easing: 'easeOutCubic',
        duration: 1500
      }, '-=1500')
      .add({
        targets: '.overlay h2',
        bottom: '-18px',
        easing: 'easeOutCubic',
        complete: function () {
          
        }
      }, '-=1300')
  }




function fadeInAnimations(){

  const continuousElements = document.getElementsByClassName('animated-text')

  for (var i = 0; i < continuousElements.length; i++) {
    new Waypoint({
      element: continuousElements[i],
      handler: function () {

        target = this.element.getElementsByClassName('top-fadein')
        target2 = this.element.getElementsByClassName('bottom-fadein')

        let tl = anime.timeline({
          easing: 'easeOutQuad',
        })

        tl.add({
          targets: target,
          translateY: [-100, 0],
          opacity: [0, 1],
          duration: 900,
          delay: anime.stagger(400)
        }, '+=200')

          .add({
            targets: target2,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 900,
            delay: anime.stagger(400)
          }, '-=400')
        this.destroy();
      },
      offset: '100%'
    })
  }


   const continuousElements2 = document.getElementsByClassName('motto-fadein')

  for (var i = 0; i < continuousElements2.length; i++) {
    new Waypoint({
      element: continuousElements2[i],
      handler: function () {

        target = this.element.getElementsByClassName('motto-single-fadein')
        target2 = this.element.getElementsByClassName('bottom-fadein')

        let tl = anime.timeline({
          easing: 'easeOutQuad',
        })

        tl.add({
          targets: target,
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 900,
          delay: anime.stagger(400)
        })

          .add({
            targets: target2,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 900,
            delay: anime.stagger(400)
          }, '-=400')
        this.destroy();
      },
      offset: '100%'
    })
  }

  const imageAnimation = new Waypoint({
    element: document.getElementById('opera-image'),
    handler: function() {
      anime({
        targets: '#opera-image',
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeInOutQuart',
        delay: 500
      })
      this.destroy();
    },
    offset: '100%'
  })
}

  
})
