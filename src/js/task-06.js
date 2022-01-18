const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", makeChangeColorInput);

function makeChangeColorInput(event) {
  const inputLength = event.currentTarget.value.length;
  const input = inputRef.classList;
  if (inputRef.dataset.length == inputLength) {
    input.add("valid");
    input.remove("invalid");
  } else {
    input.add("invalid");
    input.remove("valid");
  }
}
