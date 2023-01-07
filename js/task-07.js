let mover = document.querySelector("#font-size-control");
let textForChange = document.querySelector("#text");

mover.addEventListener(
  "input",
  () => (textForChange.style.fontSize = `${mover.value}px`)
);
