function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let changeColorBtn = document.querySelector(".change-color");
let colorInfoRef = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick() {
  let currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorInfoRef.textContent = currentColor;
}
