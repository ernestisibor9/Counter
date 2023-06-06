const search = document.getElementById("search");
const li = document.querySelectorAll("li");
const countryHard = document.querySelector(".countryHard");

// Add an event listener to the search box
search.addEventListener("keyup", searchBox);

// Create a function called search box
function searchBox(e) {
  e.preventDefault();

  // What the user inputted
  let inputVal = search.value;

  // Iterate the li
  li.forEach((country) => {
    if (country.innerHTML.toLowerCase().includes(inputVal.toLowerCase())) {
      country.style.display = "block";
      countryHard.style.display = "block";
    } else {
      country.style.display = "none";
    }
  });
}
