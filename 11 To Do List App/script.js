// Get references to the input box and the list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task to the list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item (li) and set its content to the input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Append the new list item to the list container
        listContainer.appendChild(li);

        // Create a span element (for deletion) and append it to the list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // Clear the input box
    inputBox.value = "";

    // Save the updated task list to local storage
    saveData();
}

// Event listener for list container (to toggle task completion and delete tasks)
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class for the clicked list item
        e.target.classList.toggle("checked");

        // Save the updated task list to local storage
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the parent list item (task) when the span (delete button) is clicked
        e.target.parentElement.remove();

        // Save the updated task list to local storage
        saveData();
    }
}, false);

// Function to save the task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load and display tasks when the page is loaded
showTask();
