let saveEl=document.getElementById("save-el")
let incrementCounter = document.getElementById("count");
let count = 0;

//Increment counter
function increment () {
  count +=1;
  incrementCounter.innerText = count;
};

function save  () {
  let countStr = " "+count + " - "
  saveEl.innerText += countStr;
  
};

