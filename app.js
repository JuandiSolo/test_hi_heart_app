const unlockDate = new Date("2025-02-14T00:00:00"); // CHANGE THIS DATE
const now = new Date();

const title = document.getElementById("title");
const content = document.getElementById("content");
const button = document.getElementById("actionButton");

let step = localStorage.getItem("step") || "locked";

function lockedState() {
  title.textContent = "⏳ Locked";
  content.textContent = "Come back when it’s time.";
  button.textContent = "Not yet";
  button.disabled = true;
}

function stepOne() {
  title.textContent = "Hi ❤️";
  content.textContent = "Tap once more.";
  button.textContent = "Tap";
}

function stepTwo() {
  title.textContent = "✨ Surprise";
  content.textContent = "I made this just for you.";
  button.textContent = "Done";
  button.disabled = true;
}

if (now < unlockDate) {
  lockedState();
} else {
  if (step === "locked") {
    localStorage.setItem("step", "one");
    step = "one";
  }

  if (step === "one") stepOne();
  if (step === "two") stepTwo();
}

button.addEventListener("click", () => {
  if (step === "one") {
    localStorage.setItem("step", "two");
    stepTwo();
  }
});
