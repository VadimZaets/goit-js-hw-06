const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", changeInputColor);

function changeInputColor(event) {
  const inputLngt = event.currentTarget.value.length;

  if (inputLngt == inputRef.dataset.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
