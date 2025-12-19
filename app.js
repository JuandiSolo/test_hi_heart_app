const button = document.getElementById("actionButton");
const message = document.getElementById("message");

// Check if user already tapped before
if (localStorage.getItem("opened")) {
  message.classList.remove("hidden");
  button.textContent = "Already opened";
  button.disabled = true;
}

button.addEventListener("click", () => {
  message.classList.remove("hidden");
  localStorage.setItem("opened", "true");

  button.textContent = "Done ✨";
  button.disabled = true;
});
