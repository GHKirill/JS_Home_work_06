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
  const ingredientsArray = array.map((item) => {
    let liRef = document.createElement("li");
    liRef.textContent = item;
    liRef.classList.add(".item");
    return liRef;
  });
  ingredientsRef.append(...ingredientsArray);
}

addHtmlList(ingredients);
