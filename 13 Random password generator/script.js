// Get a reference to the HTML element with the id "password"
const passwordBox = document.getElementById("password");

// Define the desired length of the password
const length = 12;

// Define character sets for different types of characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "01234567890";
const symbol = "~!@#$%^&*()_-=+{}[]\|;':,./<>?";

// Combine all character sets into one string
const allChars = upperCase + lowerCase + number + symbol;

// Function to create a random password
function createPassword() {
    let password = "";

    // Add one character from each character set to the password
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Keep adding random characters from all character sets
    // until the password reaches the desired length
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Set the generated password as the value of the HTML input element
    passwordBox.value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
    // Select the text in the password input field
    passwordBox.select();
    // Copy the selected text to the clipboard
    document.execCommand("copy");
}

