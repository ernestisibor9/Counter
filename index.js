const counter = document.getElementById("counter");

const myAdd = document.querySelector(".add");
const myReset = document.querySelector(".reset");
const mySub = document.querySelector(".sub");

// Add event listener
myAdd.addEventListener("click", function () {
  counter.innerHTML++;
  setColor();
});

// Add event listener
myReset.addEventListener("click", function () {
  counter.innerHTML = 0;
  setColor();
});

// Add event listener
mySub.addEventListener("click", function () {
  counter.innerHTML--;
  setColor();
});

// Create a function to set the colors for the counter
function setColor() {
  if (counter.innerHTML > 0) {
    counter.style.color = "green";
  } else if (counter.innerHTML < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}
