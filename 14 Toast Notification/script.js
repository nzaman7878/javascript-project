// Get the toastBox container element by its ID
let toastBox = document.getElementById('toastBox');

// Define different toast messages with icons
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

// Function to display a toast message
function showToast(msg) {
    // Create a new div element for the toast
    let toast = document.createElement('div');
    
    // Add the 'toast' class to the created element
    toast.classList.add('toast');
    
    // Set the inner HTML of the toast to the provided message
    toast.innerHTML = msg;
    
    // Append the toast to the toastBox container
    toastBox.appendChild(toast);

    // Check if the message includes 'error' and add 'error' class
    if (msg.includes('error')) {
        toast.classList.add('error');
    }

    // Check if the message includes 'Invalid' and add 'invalid' class
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    // Set a timeout to remove the toast after 6 seconds (6000 milliseconds)
    setTimeout(() => {
        toast.remove();
    }, 6000);
}

// Example usage:
// showToast(successMsg); // Display a success toast
// showToast(errorMsg);   // Display an error toast
// showToast(invalidMsg); // Display an invalid toast
