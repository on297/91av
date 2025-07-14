const video = document.getElementById('video');
const overlay = document.getElementById('overlay');
const continueBtn = document.getElementById('continueBtn');

const videoUrl = "https://on297.github.io/91av/mm66.mp4
";

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(videoUrl);
  hls.attachMedia(video);
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = videoUrl;
}

let shared = false;

video.addEventListener('timeupdate', () => {
  if (!shared && video.currentTime > 10) {
    video.pause();
    overlay.classList.remove('hidden');
  }
});

continueBtn.addEventListener('click', () => {
  shared = true;
  overlay.classList.add('hidden');
  video.play();
});

video.addEventListener('seeking', () => {
  if (!shared && video.currentTime > 10) {
    video.currentTime = 10;
  }
});
