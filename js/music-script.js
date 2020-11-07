
const audio1 = $("#songs-demo-1")[0];

$('.song-play-1').click(function () {
  const clicks = $(this).data('clicks');
  if (clicks) {
    audio1.pause();
    audio1.currentTime = 0;
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-gif-1',
      opacity: [1, 0]

    })
      .add({
        targets: '.song-play-1',
        opacity: [0, 1]
      })
  } else {
    audio1.play()
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-play-1',
      opacity: [1, 0]
    })
      .add({
        targets: '.song-gif-1',
        opacity: [0, 1]
      })
  }
  $(this).data("clicks", !clicks);
});

const audio2 = $("#songs-demo-2")[0];

$('.song-play-2').click(function () {
  const clicks = $(this).data('clicks');
  if (clicks) {
    audio2.pause();
    audio2.currentTime = 0;
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-gif-2',
      opacity: [1, 0]

    })
      .add({
        targets: '.song-play-2',
        opacity: [0, 1]
      })
  } else {
    audio2.play()
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-play-2',
      opacity: [1, 0],
    })
      .add({
        targets: '.song-gif-2',
        opacity: [0, 1]
      })
  }
  $(this).data("clicks", !clicks);
});

const audio3 = $("#songs-demo-3")[0];

$('.song-play-3').click(function () {
  const clicks = $(this).data('clicks');
  if (clicks) {
    audio3.pause();
    audio3.currentTime = 0;
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-gif-3',
      opacity: [1, 0]

    })
      .add({
        targets: '.song-play-3',
        opacity: [0, 1]
      })
  } else {
    audio3.play()
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-play-3',
      opacity: [1, 0]
    })
      .add({
        targets: '.song-gif-3',
        opacity: [0, 1]
      })
  }
  $(this).data("clicks", !clicks);
});

const audio4 = $("#songs-demo-4")[0];

$('.song-play-4').click(function () {
  const clicks = $(this).data('clicks');
  if (clicks) {
    audio4.pause();
    audio4.currentTime = 0;
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-gif-4',
      opacity: [1, 0]

    })
      .add({
        targets: '.song-play-4',
        opacity: [0, 1]
      })
  } else {
    audio4.play()
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-play-4',
      opacity: [1, 0]
    })
      .add({
        targets: '.song-gif-4',
        opacity: [0, 1]
      })
  }
  $(this).data("clicks", !clicks);
});

const audio5 = $("#songs-demo-5")[0];

$('.song-play-5').click(function () {
  const clicks = $(this).data('clicks');
  if (clicks) {
    audio5.pause();
    audio5.currentTime = 0;
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-gif-5',
      opacity: [1, 0]

    })
      .add({
        targets: '.song-play-5',
        opacity: [0, 1]
      })
  } else {
    audio5.play()
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-play-5',
      opacity: [1, 0]
    })
      .add({
        targets: '.song-gif-5',
        opacity: [0, 1]
      })
  }
  $(this).data("clicks", !clicks);
});

const audio6 = $("#songs-demo-6")[0];

$('.song-play-6').click(function () {
  const clicks = $(this).data('clicks');
  if (clicks) {
    audio6.pause();
    audio6.currentTime = 0;
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-gif-6',
      opacity: [1, 0]

    })
      .add({
        targets: '.song-play-6',
        opacity: [0, 1]
      })
  } else {
    audio6.play()
    let tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 500
    })
    tl.add({
      targets: '.song-play-6',
      opacity: [1, 0]
    })
      .add({
        targets: '.song-gif-6',
        opacity: [0, 1]
      })
  }
  $(this).data("clicks", !clicks);
});
