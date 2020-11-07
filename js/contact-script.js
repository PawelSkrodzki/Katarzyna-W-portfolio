$(document).ready(function () {

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
                    begin: function () {
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

})