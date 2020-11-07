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
      duration: 1300,
      easing: 'easeOutCubic',
      delay: anime.stagger(200)
    }, '-=2000')

})