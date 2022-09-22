let mainName = document.querySelector("h1.mainName");
mainName.textContent = "Jsleveloper";


// Get the input field
var input = document.getElementById("firstInput");
var input2 = $("#firstInput");
console.log(input);
console.log(input2);

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    mainName.textContent = input.value;
    input.value = "";
  }
});
