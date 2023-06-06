// Event Delegation

const counter = document.getElementById("counter");
const buttons = document.querySelector(".buttons");

// Add event listeners
buttons.addEventListener("click", addCounterEvent);

function addCounterEvent(e) {
  if (e.target.classList.contains("add")) {
    counter.innerHTML++;
  }
  if (e.target.classList.contains("sub")) {
    counter.innerHTML--;
  }
  if (e.target.classList.contains("reset")) {
    counter.innerHTML = 0;
  }
}
