
// Video Play/Pause
var video = document.getElementById("myVideo");


var btn = document.getElementById("myBtn");


function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// ScrollReveal
window.sr = ScrollReveal();

sr.reveal('.headline', { delay: 1000 });
sr.reveal('.punchline', { delay: 2000 });
