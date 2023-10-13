// Get references to the progress bar, audio element, and control icon
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// When the audio metadata is loaded (e.g., duration), set the progress bar's max and initial value
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// Function to play or pause the audio
function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    // Pause the audio
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    // Play the audio
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

// Update the progress bar continuously while the audio is playing
if (!song.paused) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

// When the user changes the position of the progress bar, update the audio's current time
progress.onchange = function () {
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-play");
  ctrlIcon.classList.remove("fa-pause");
};
