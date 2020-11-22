/* Project: The goal is when a user enters a color into the input box (yellow, blue, black or green) and then clicks the button, the background color of the ENTIRE page will change to that color. If the user does not enter in one of those colors, make the background color of the page red */
// Step 1: create variables to store elements: DONE
// Step 2: create a function to change the background on button click: DONE
// Step 3: create a function to change the background when ENTER is pressed: DONE
// Step 4: testing: DONE
// Step 5: Project: COMPLETE

// Step 1: create variables to store elements
// let colorInput;

// Step 2: create a function to change the background
function changeBackground(colorInput){
  //let colorInput;
  if (colorInput = document.getElementById("colorInput").value == ""){
    document.body.style.backgroundColor = "red";
  } else {
    colorInput = document.getElementById("colorInput").value;
    // console.log(colorInput);
    document.body.style.backgroundColor = colorInput;
    colorInput = document.getElementById("colorInput").value = "";
  }
}

colorInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    if (colorInput = document.getElementById("colorInput").value == ""){
      document.body.style.backgroundColor = "red";
    } else {
      colorInput = document.getElementById("colorInput").value;
      // console.log(colorInput);
      document.body.style.backgroundColor = colorInput;
      colorInput = document.getElementById("colorInput").value = "";
    }
  } 
})
