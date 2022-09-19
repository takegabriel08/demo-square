Filet caca = document.querySelector("h1.caca");
caca.textContent = "Vila Lorena";


// Get the input field
var input = document.getElementById("firstInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    caca.textContent = input.value;
    input.value = "";
  }
});
