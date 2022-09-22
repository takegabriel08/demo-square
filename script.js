let mainName = document.querySelector("h1.mainName");
mainName.textContent = "Jsleveloper";


// Get the input field
var input = document.getElementById("firstInput");
// var input2 = $("#firstInput");
// console.log('JS');
// console.log(input);
// console.log('Jquery');
// console.log(input2);

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    mainName.textContent = input.value;
    input.value = "";
  }
});

// Select button from dom
var button = document.querySelector('input.chPos');
// Select Square shape from dom
var square = document.querySelector('div#square');
// positions array to loop through
const positions = ["top-left", "top-right", "bottom-right", "bottom-left"];
// Declare index as var so it is accessible from inside event function
var index;
// set square initial opsition from js so that we don't mess values up with css values.
square.style.bottom = "10px"
square.style.left = "10px"
square.style.top = ""
square.style.right = ""

// Function that has eventlistener
button.addEventListener('click', (event) => {
  // if index is equal to the last item in positions looped, then reset index
  // if index is undefined set it as 0(almost not needed)
  if (index == positions.length - 1 || index == undefined) {
    index = 0
  } else {
    index = index + 1
  }

 // log index for debugging.. =))
  console.log(index)
// positions[index] is equal to positions[0 or 1 or 2 or 3] selecting from positions the required case for our situation
  if (positions[index] == "top-left") {
    square.style.bottom = ""
    square.style.left = "10px"
    square.style.top = "10px"
    square.style.right = ""
  }
  else if
    (positions[index] == "bottom-left") {
    square.style.bottom = "10px"
    square.style.left = "10px"
    square.style.top = ""
    square.style.right = ""
  }
  else if (positions[index] == "top-right") {
    square.style.bottom = ""
    square.style.left = ""
    square.style.top = "10px"
    square.style.right = "10px"
  }
  else if (positions[index] == "bottom-right") {
    square.style.bottom = "10px"
    square.style.left = ""
    square.style.top = ""
    square.style.right = "10px"
  }
  // if no cases match (again almost impossible...) reset the position
  else {
    square.style.bottom = ""
    square.style.left = "10px"
    square.style.top = "10px"
    square.style.right = ""
  }
});