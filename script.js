// Enable background music
const audio = document.getElementById('bgm');

document.addEventListener('click', () => {
    audio.muted = false;
    audio.volume = 0.6;
    audio.play();
}, { once: true });