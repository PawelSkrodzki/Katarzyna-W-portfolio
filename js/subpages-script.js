
$(document).ready(function () {

  

  //ogarnac animacje po animacji loadera

  new Waypoint({
    element: document.getElementById('lines-div'),

    handler: function () {
      thisTargets = this.element.getElementsByClassName('line')
      console.log(thisTargets)
      anime({
        targets: thisTargets,
        width: '100%',
        duration: 2000,
        easing: 'easeInOutQuart',
        delay: anime.stagger(400),
        begin: function(){
          $('.line').css('visibility', 'visible')
        }
      })
      this.destroy();
    },
    offset: '100%'
  })

  //porozdzielac na odzdzielne pliki bo nie dziala jesli nie ma danego waypointa w uzyciu 

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
          translateY: [-50, 0],
          opacity: [0, 1],
          duration: 900,
          delay: anime.stagger(400),
          begin: function(){
            $('.animated-text').css('visibility', 'visible')
          }
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


  $('.opera-image').each(function () {
    const thisTargets = this
    new Waypoint({
      element: this,
      handler: function () {
        anime({
          targets: thisTargets,
          opacity: [0, 1],
          duration: 2000,
          easing: 'easeInOutQuart',
          delay: 500,
          begin: function(){
            $('.opera-image').css('visibility', 'visible')
          }
        })
        this.destroy();
      },
      offset: '100%'
    })
  })


  $('.single-bottom-fadein').each(function () {
    const thisTargets = this
    new Waypoint({
      element: this,
      handler: function () {
        anime({
          targets: thisTargets,
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 900,
          easing: 'easeOutQuad',
          delay: 500,
          begin: function(){
            $('.single-bottom-fadein').css('visibility', 'visible')
          }
        })
        this.destroy();
      },
      offset: '100%'
    })
  })




  // cubic-bezier(.32,0,.18,.99)



})


