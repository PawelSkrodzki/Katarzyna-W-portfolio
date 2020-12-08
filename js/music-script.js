const playMusic = (music, songGif1, songPlay1) => {
  const clicks = $(this).data("clicks");
  if (clicks) {
    music.pause();
    music.currentTime = 0;
    let tl = anime.timeline({
      easing: "easeInOutCubic",
      duration: 500,
    });
    tl.add({
      targets: songGif1,
      opacity: [1, 0],
    }).add({
      targets: songPlay1,
      opacity: [0, 1],
    });
  } else {
    music.play();
    let tl = anime.timeline({
      easing: "easeInOutCubic",
      duration: 500,
    });
    tl.add({
      targets: songPlay1,
      opacity: [1, 0],
    }).add({
      targets: songGif1,
      opacity: [0, 1],
    });
  }
  $(this).data("clicks", !clicks);
};

const audio1 = document.querySelector("#songs-demo-1");
const songPlay1 = document.querySelector(".song-play-1");
const songGif1 = document.querySelector(".song-gif-1");

songPlay1.addEventListener("click", () => {
  playMusic(audio1, songGif1, songPlay1);
});

const audio2 = document.querySelector("#songs-demo-2");
const songPlay2 = document.querySelector(".song-play-2");
const songGif2 = document.querySelector(".song-gif-2");

songPlay2.addEventListener("click", () => {
  playMusic(audio2, songGif2, songPlay2);
});

const audio3 = document.querySelector("#songs-demo-3");
const songPlay3 = document.querySelector(".song-play-3");
const songGif3 = document.querySelector(".song-gif-3");

songPlay3.addEventListener("click", () => {
  playMusic(audio3, songGif3, songPlay3);
});

const audio4 = document.querySelector("#songs-demo-4");
const songPlay4 = document.querySelector(".song-play-4");
const songGif4 = document.querySelector(".song-gif-4");

songPlay4.addEventListener("click", () => {
  playMusic(audio4, songGif4, songPlay4);
});

const audio5 = document.querySelector("#songs-demo-5");
const songPlay5 = document.querySelector(".song-play-5");
const songGif5 = document.querySelector(".song-gif-5");

songPlay5.addEventListener("click", () => {
  playMusic(audio5, songGif5, songPlay5);
});

const audio6 = document.querySelector("#songs-demo-6");
const songPlay6 = document.querySelector(".song-play-6");
const songGif6 = document.querySelector(".song-gif-6");

songPlay6.addEventListener("click", () => {
  playMusic(audio6, songGif6, songPlay6);
});
