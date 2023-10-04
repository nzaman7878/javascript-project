// Select the notes container and create button
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to display notes from local storage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// Function to update notes in local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for the create button
createBtn.addEventListener("click", () => {
    // Create a new editable paragraph and delete button
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    
    // Set class and attributes for the new elements
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    
    // Append the new elements to the notes container
    notesContainer.appendChild(inputBox).appendChild(img);

    // Add the current date and time to the note
    const dateTime = new Date();
    const formattedDateTime = dateTime.toLocaleString();
    inputBox.innerHTML = formattedDateTime + "<br>"; // Add line break after the date/time

    // Add a line break to separate the date/time from the task description
    const lineBreak = document.createElement("br");
    inputBox.appendChild(lineBreak);

    // Place the cursor in the input box
    inputBox.focus();

    // Update the storage with the new note
    updateStorage();
});

// Event listener for the notes container (for deleting notes and updating storage)
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        // Delete the note and update storage when the delete button is clicked
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        // Listen for keyup events on editable paragraphs and update storage
        const notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                
            };
        });
    }
});

// Event listener for handling Enter key to insert line breaks
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
