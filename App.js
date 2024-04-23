let saveEl = document.getElementById("save-el");
let incrementCounter = document.getElementById("count");
let resetBtn = document.getElementById("reset-btn");
let count = 0;

//Increment counter
function increment() {
  count += 1;
  incrementCounter.innerText = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
}

function reset() {
  incrementCounter.textContent = 0;
  count=0
}
