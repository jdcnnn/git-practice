const message = document.getElementById("message");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
    message.textContent = "You just changed the project!";
});