// Get the popup element by its ID
let popup = document.getElementById("popup");

// Function to open the popup
function openPopup() {
  // Add the "open-popup" class to show the popup
  popup.classList.add("open-popup");
}

// Function to close the popup
function closePopup() {
  // Remove the "open-popup" class to hide the popup
  popup.classList.remove("open-popup");
}
