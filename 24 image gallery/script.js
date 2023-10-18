let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector("#backBtn"); // Use the ID selector
let nextBtn = document.querySelector("#nextBtn"); // Use the ID selector

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900; // Subtract 900 to move backward
});