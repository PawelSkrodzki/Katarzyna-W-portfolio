
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

  let tl = anime.timeline({
    easing: 'easeInOutCubic',
    duration: 2000,
    delay: 0
  })

    // tl.add({
    //   targets: '.counter',
    //   translateY: '0%',
    //   duration: 1000,
    // })

    // .add({
    //   targets: '.dot',
    //   translateY: '0%',
    //   duration: 1000,
    // }, '-=800')

    //   .add({
    //     targets: '.counter',
    //     value: [1, 100],
    //     duration: 4000,
    //     easing: 'easeInOutCubic',
    //     round: 1
    //   })

    //   .add({
    //     targets: '.dot',
    //     translateY: '100%',
    //     duration: 1000
    //   }, '-=300')

    //   .add({
    //     targets: '.counter',
    //     translateY: '130%',
    //     duration: 1000,
    //   }, '-=700')

    //   .add({
    //     targets: '.loader',
    //     opacity: 0,
    //     duration: 2000,
    //     complete: function(){
    //       $('.loader').css('display', 'none')
    //     }
    //   })

    .add({
      targets: '.title-content',
      translateY: 0,
      opacity: 1,
      delay: anime.stagger(500),
      duration: 1500
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
      top: 47
    })

    .add({
      targets: '.overlay',
      bottom: '15%',
    }, '-=2000')
    .add({
      targets: '.overlay h2',
      bottom: '-20px',
      complete: function () {
        // enableScroll()
      }
    }, '-=1500')



  const animatedTags = document.querySelectorAll('.motto-text span, .next-chapter, .next-chapter-title');
  animatedTags.forEach(tag =>{
    tag.style.opacity = 0;
    tag.style.transform = "translateY(100px)"
});

  const fadeIn = function(){

  let delay = 0.15;

    animatedTags.forEach(tag => {
      const tagTop = tag.getBoundingClientRect().top;
      const tagBottom =tag.getBoundingClientRect().bottom;
      
      if(tagTop < window.innerHeight && tagBottom > 0){
          tag.style.animation = `fadein  0.5s ${delay}s both`;
          tag.style.transition = "1s";
          tag.style.transform = "translateY(0)";
          delay = delay + 0.25;
      }
  });
  };


    window.addEventListener('scroll', function () {
      fadeIn();
    });

    fadeIn();

  })
