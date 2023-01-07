const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function addHtmlList(array) {
  const ingredientsRef = document.querySelector("#ingredients");
  array.map((item) => {
    let liRef = document.createElement("li");
    liRef.textContent = item;
    liRef.classList.add(".item");
    ingredientsRef.append(liRef);
  });
}

addHtmlList(ingredients);
