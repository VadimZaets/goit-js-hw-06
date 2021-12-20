const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrEl = document.querySelector("#ingredients");

const makeIngrofEl = (ingridients) => {
  return ingridients.map((ingridient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingridient;
    liEl.classList = "item";

    return liEl;
  });
};

const elementsOfIngr = makeIngrofEl(ingredients);

ingrEl.append(...elementsOfIngr);
