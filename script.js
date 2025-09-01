const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🎵";
    isPlaying = false;
  } else {
    music.play();
    musicBtn.textContent = "⏸️";
    isPlaying = true;
  }
}
