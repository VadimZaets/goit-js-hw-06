const itemEl = document.querySelectorAll(".item");
console.log(itemEl);

const itemLngt = itemEl.length;
console.log(`Number of categories: ${itemLngt}`);

itemEl.forEach((element) => {
  const title = element.querySelector("h2");
  const liEl = element.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${liEl.length}`);
});
