const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const ValueRef = document.querySelector("#value");

btnDecrementRef.addEventListener("click", onDecrementBtnClick);
btnIncrementRef.addEventListener("click", onIncrementBtnClick);

let counterValue = (ValueRef.textContent = 0);

function onDecrementBtnClick(event) {
  event.preventDefault();
  ValueRef.textContent = counterValue -= 1;
}

function onIncrementBtnClick(event) {
  event.preventDefault();
  ValueRef.textContent = counterValue += 1;
}
