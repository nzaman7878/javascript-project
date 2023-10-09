// Get DOM elements
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

// Function to generate QR code
function generateQR() {
  const inputValue = qrText.value.trim(); // Trim whitespace

  if (inputValue.length > 0) {
    // Generate the QR code image
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      inputValue
    )}`;
    imgBox.classList.add("show-img"); // Show the image box
  } else {
    qrText.classList.add("error"); // Add an error class to highlight the input
    setTimeout(() => {
      qrText.classList.remove("error"); // Remove the error class after 1 second
    }, 1000);
  }
}

// Attach the generateQR function to a button click event
document.getElementById("generateButton").addEventListener("click", generateQR);
