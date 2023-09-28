// Get the input element for the date of birth
let userInput = document.getElementById("date");

// Set the maximum date in the input field to today's date
userInput.max = new Date().toISOString().split("T")[0];

// Get the element where the result will be displayed
let result = document.getElementById("result");

// Function to calculate and display the age
function calculateAge() {
    // Get the user's birth date from the input field
    let birthDate = new Date(userInput.value);

    // Extract day, month, and year from the birth date
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // Get the current date
    let today = new Date();

    // Extract day, month, and year from the current date
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // Initialize variables for age calculation
    let d3, m3, y3;

    // Calculate the year difference
    y3 = y2 - y1;

    // Calculate the month difference
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    // Calculate the day difference
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // Adjust the month if it's negative (e.g., current date is earlier in the month than the birth date)
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display the result with appropriate formatting
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

// Function to get the number of days in a specific month of a year
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
