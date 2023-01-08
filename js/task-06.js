let inputFieldRef = document.querySelector("#validation-input");
let attrLength = Number(inputFieldRef.dataset.length);

inputFieldRef.addEventListener("blur", () => {
  getStyle(inputFieldRef.value.length);
});

function getStyle(inputLength) {
  if (inputLength === 0) {
    inputFieldRef.classList.remove("valid");
    inputFieldRef.classList.remove("invalid");
  } else if (attrLength === inputLength) {
    inputFieldRef.classList.add("valid");
    inputFieldRef.classList.remove("invalid");
  } else {
    inputFieldRef.classList.remove("valid");
    inputFieldRef.classList.add("invalid");
  }
}
