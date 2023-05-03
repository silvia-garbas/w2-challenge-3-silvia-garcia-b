const counter = (value) => {
  const incrementButton = document.querySelector(".increment-button");
  incrementButton.addEventListener("click", () => {
    let result = Number(value.textContent) + 1;
    if (result > 20) {
      return;
    }
    value.textContent = result;
  });
  const decrementButton = document.querySelector(".decrement-button");
  decrementButton.addEventListener("click", () => {
    let result = Number(value.textContent) - 1;
    if (result < 0) {
      result = 0;
    }
    value.textContent = result;
  });
  const restartButton = document.querySelector(".restart-button");
  restartButton.addEventListener("click", () => {
    let result = 0;
    value.textContent = result;
  });
};
const playCounter = () => {
  let value = document.querySelector(".counter-number");
  counter(value);
};

playCounter();
