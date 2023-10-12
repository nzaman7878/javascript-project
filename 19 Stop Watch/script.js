// Initialize variables for seconds, minutes, and hours
let [seconds, minutes, hours] = [0, 0, 0];

// Get the display element where the time will be shown
let displayTime = document.getElementById("displayTime");

// Initialize the timer variable
let timer = null;

// Function to update the stopwatch time
function stopwatch() {
  // Increment seconds
  seconds++;

  // Check if seconds have reached 60, reset and increment minutes
  if (seconds === 60) {
    seconds = 0;
    minutes++;

    // Check if minutes have reached 60, reset and increment hours
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  // Format the time components with leading zeros if needed
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  // Update the display with the formatted time
  displayTime.innerHTML = h + " : " + m + " : " + s;
}

// Function to start the stopwatch
function watchStart() {
  // Clear the timer if it's already running
  if (timer !== null) {
    clearInterval(timer);
  }

  // Start the timer with a 1-second interval
  timer = setInterval(stopwatch, 1000);
}

// Function to stop the stopwatch
function watchStop() {
  clearInterval(timer);
}

// Function to reset the stopwatch
function watchReset() {
  // Clear the timer and reset time variables
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];

  // Update the display to show "00:00:00"
  displayTime.innerHTML = "00 : 00 : 00";
}
