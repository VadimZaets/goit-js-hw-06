const refs = {
  inputRef: document.querySelector("#font-size-control"),
  textRef: document.querySelector("#text"),
};

refs.inputRef.addEventListener("input", onHendleChangeSize);

function onHendleChangeSize(event) {
  const inputValue = event.target.value;

  refs.textRef.style.fontSize = `${inputValue}px`;
}
