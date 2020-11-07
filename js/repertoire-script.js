$(document).ready(function () {

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
                begin: function () {
                    $('.line').css('visibility', 'visible')
                }
            })
            this.destroy();
        },
        offset: '100%'
    })
 

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
                        $('.main-li').css('visibility', 'visible')
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