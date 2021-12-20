const refs = {
  form: document.querySelector(".login-form"),
  btn: document.querySelector("button"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены!!!");
  }
  const userEmail = email;
  const userPassword = password;

  const allData = {
    userEmail,
    userPassword,
  };
  console.log(allData);
  refs.form.reset();
}
