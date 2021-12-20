const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onchangeInput);

function onchangeInput(event) {
  event.preventDefault();
  if (!event.currentTarget.value) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}
