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
var button = document.querySelector("input.chPos");
// Select Square shape from dom
var square = document.querySelector("div#square");
// positions array to loop through
const positions = ["top-left", "top-right", "bottom-right", "bottom-left"];
// Declare index as var so it is accessible from inside event function
var index = 0;
var positionValue = [];
// set square initial position on page from js so that we don't mess values up with css values.
square.style.bottom = "10px";
square.style.left = "10px";
square.style.top = "";
square.style.right = "";

function changePosition() {
  // if index is equal to the last item in positions looped, then reset index
  if (index == undefined || index < 0 || index >= positions.length) {
    index = 0;
  }

  // positions[index] is equal to positions[0 or 1 or 2 or 3] selecting from positions the required case for our situation
  if (positions[index] == "top-left") {
    square.style.bottom = "";
    square.style.left = "10px";
    square.style.top = "10px";
    square.style.right = "";
  } else if (positions[index] == "bottom-left") {
    square.style.bottom = "10px";
    square.style.left = "10px";
    square.style.top = "";
    square.style.right = "";
  } else if (positions[index] == "top-right") {
    square.style.bottom = "";
    square.style.left = "";
    square.style.top = "10px";
    square.style.right = "10px";
  } else if (positions[index] == "bottom-right") {
    square.style.bottom = "10px";
    square.style.left = "";
    square.style.top = "";
    square.style.right = "10px";
  }
  // if no cases match (again almost impossible...) reset the position
  else {
    console.log("Impossible Position of square...");
  }

  console.log(`Itterating ${index} to ${index + 1 > 3 ? 0 : index + 1}`);
  index = index + 1;
}
// Function that has eventlistener
button.addEventListener("click", changePosition);
//Make square move step by step based on arrow events
document.onkeydown = checkKey;

// Getting arrows
var left = document.querySelector('#left');
var right = document.querySelector('#right');
var up = document.querySelector('#up');
var down = document.querySelector('#down');

left.addEventListener('click', () => {
  document.dispatchEvent(new KeyboardEvent('keydown', {
    keyCode: '37'
  }));
})
right.addEventListener('click', () => {
  var event = new KeyboardEvent('keydown', {
    keyCode: '39'
  });
  document.dispatchEvent(event);
})
up.addEventListener('click', () => {
  var event = new KeyboardEvent('keydown', {
    keyCode: '38'
  });
  document.dispatchEvent(event);
})
down.addEventListener('click', () => {
  var event = new KeyboardEvent('keydown', {
    keyCode: '40'
  });
  document.dispatchEvent(event);
})

function checkKey(e) {
  e = e || window.event;

  if (positions[index] == "bottom-left") {
    if (e.keyCode == "38") {
      square.style.bottom =
        (+square.style.bottom.split("px")[0] + 10).toString() + "px";
    } else if (e.keyCode == "40") {
      square.style.bottom =
        (+square.style.bottom.split("px")[0] - 10).toString() + "px";
    } else if (e.keyCode == "37") {
      square.style.right =
        (+square.style.right.split("px")[0] + 10).toString() + "px";
    } else if (e.keyCode == "39") {
      square.style.right =
        (+square.style.right.split("px")[0] - 10).toString() + "px";
    } else {
      console.log("b");
      console.log(e.keyCode);
    }
  } else if (positions[index] == "top-left") {
    if (e.keyCode == "38") {
      square.style.bottom =
        (+square.style.bottom.split("px")[0] + 10).toString() + "px";
    } else if (e.keyCode == "40") {
      square.style.bottom =
        (+square.style.bottom.split("px")[0] - 10).toString() + "px";
    } else if (e.keyCode == "37") {
      square.style.left =
        (+square.style.left.split("px")[0] - 10).toString() + "px";
    } else if (e.keyCode == "39") {
      square.style.left =
        (+square.style.left.split("px")[0] + 10).toString() + "px";
    } else {
      console.log("a");
      console.log(e.keyCode);
    }
  } else if (positions[index] == "top-right") {
    if (e.keyCode == "38") {
      square.style.top =
        (+square.style.top.split("px")[0] - 10).toString() + "px";
    } else if (e.keyCode == "40") {
      square.style.top =
        (+square.style.top.split("px")[0] + 10).toString() + "px";
    } else if (e.keyCode == "37") {
      square.style.left =
        (+square.style.left.split("px")[0] - 10).toString() + "px";
    } else if (e.keyCode == "39") {
      square.style.left =
        (+square.style.left.split("px")[0] + 10).toString() + "px";
    } else {
      console.log("c");
      console.log(e.keyCode);
    }
  } else if (positions[index] == "bottom-right") {
    if (e.keyCode == "38") {
      square.style.top =
        (+square.style.top.split("px")[0] - 10).toString() + "px";
    } else if (e.keyCode == "40") {
      square.style.top =
        (+square.style.top.split("px")[0] + 10).toString() + "px";
    } else if (e.keyCode == "37") {
      square.style.right =
        (+square.style.right.split("px")[0] + 10).toString() + "px";
    } else if (e.keyCode == "39") {
      square.style.right =
        (+square.style.right.split("px")[0] - 10).toString() + "px";
    } else {
      console.log("d");
      console.log(e.keyCode);
    }
  }
}
// left = keycode 37
// right = keycode 39
// up = keycode 38
// down = keycode 40

// Set eventlistener for each of the keys