// let counterValue = 0;
// const resultRef = document.querySelector("#value");
// const incrementButtonRef = document.querySelector(
//   "[data-action = 'increment']"
// );
// const decrementButtonRef = document.querySelector(
//   "[data-action = 'decrement']"
// );

// incrementButtonRef.addEventListener("click", () => {
//   counterValue += 1;
//   resultRef.textContent = counterValue;
// });
// decrementButtonRef.addEventListener("click", () => {
//   counterValue -= 1;
//   resultRef.textContent = counterValue;
// });

const incrementDecrement = {
  counterValue: 0,
  increment(resultRef) {
    const incrementButtonRef = document.querySelector(
      "[data-action = 'increment']"
    );
    incrementButtonRef.addEventListener("click", () => {
      this.counterValue += 1;
      resultRef.textContent = this.counterValue;
    });
  },
  decrement(resultRef) {
    const incrementButtonRef = document.querySelector(
      "[data-action = 'decrement']"
    );
    incrementButtonRef.addEventListener("click", () => {
      this.counterValue -= 1;
      resultRef.textContent = this.counterValue;
    });
  },
  showResult() {
    const resultRef = document.querySelector("#value");
    this.increment(resultRef);
    this.decrement(resultRef);
  },
};
incrementDecrement.showResult();
