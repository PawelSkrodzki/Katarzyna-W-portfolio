
$(document).ready(function () {

  $('.name, .main-nav li').css({ 'transform': 'translateY(-50%)', 'opacity': '0' });
  $('.main-title-static, .title-content').css('transform', 'translateY(100%)');

  let tl = anime.timeline({
    easing: 'easeInOutCubic',
    duration: 2000,
    delay: 0
  })

  tl.add({
    targets: '.name',
    translateY: 0,
    opacity: 1,
    duration: 1500,
  })
    .add({
      targets: '.main-nav li',
      translateY: 0,
      opacity: 1,
      delay: anime.stagger(200, { from: 'last' }),
      duration: 1500
    }, '-=1200')
    .add({
      targets: '.main-title-static, .title-content',
      translateY: 0,
      duration: 1500,
      delay: anime.stagger(200),
      complete: function () {
        fadeIn();
      }
    }, '-=2400')




  const animatedTags = document.querySelectorAll('.line');

  var fadeIn = function () {

    let delay = 0.15;

    animatedTags.forEach((tag) => {
      var tagTop = tag.getBoundingClientRect().top;

      if (tagTop < window.innerHeight) {
        tag.style.animation = `fullLine  1s ${delay}s both`;
        delay = delay + 0.10;
        tag.style.width = '100%';
      }
    });
  };

  window.addEventListener('scroll', function () {
    fadeIn();
  }, false)



})


