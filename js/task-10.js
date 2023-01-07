function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputFieldRef = document.querySelector("input");
const createElementBtn = document.querySelector("[data-create]");
const destroyElementBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createElementBtn.addEventListener("click", onCreateElementClick);
destroyElementBtn.addEventListener("click", onDestroyElementClick);

function onCreateElementClick() {
  const boxesCollection = [];
  const difference = 10;
  let numberOfElements = getBoxesCollectionLength();
  for (let i = 0; i < numberOfElements; i += 1) {
    boxesCollection.push(createBox(30 + i * difference));
  }
  boxesRef.append(...boxesCollection);
}

function createBox(sideSize) {
  const element = document.createElement("div");
  element.style.width = `${sideSize}px`;
  element.style.height = `${sideSize}px`;
  element.style.backgroundColor = getRandomHexColor();
  return element;
}

function onDestroyElementClick() {
  boxesRef.innerHTML = "";
}

function getBoxesCollectionLength() {
  return Number(inputFieldRef.value);
}
