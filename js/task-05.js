function duplicateInputName() {
  const inputRef = document.querySelector("#name-input");
  const outputRef = document.querySelector("#name-output");

  inputRef.addEventListener("input", () => {
    !inputRef.value
      ? (outputRef.textContent = "Anonymous")
      : (outputRef.textContent = inputRef.value);
  });
}
duplicateInputName();
