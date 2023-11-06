var heading;
var executeButton;
var outputParagraph;
var inputElement;

var food = ["Indian", "Chinese", "Italian", "Japanese", "Filipino", 
  "American", "Peruvian", "Colombian", "Mexican", "Jamaican", "Nepali", "French", 
  "NOTHING. STARVE -- jk click the button again", "Lebanese", "Sri Lankan"];

document.addEventListener("DOMContentLoaded", function(){
  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function(){
    generateFood();
  });


  function generateFood(){
    var currentInputText = inputElement.value;
    var randomFoodIndex = Math.floor(Math.random() * food.length);
    
    if (currentInputText.trim() !== "") {
      outputParagraph.innerText = currentInputText + " : Hey there! You should eat " + food[randomFoodIndex];
      restyleOutput();
    }
  }

  function restyleOutput() {
    var randomRed = Math.random() * 255;
    var randomBlue = Math.random() * 255;
    //no green because some colors are too light to read

    var outputColorString = "rgb(" + randomRed + "," + 0 + "," + randomBlue + ")";
    outputParagraph.style.color = outputColorString;

    // change the background color of the entire page (body)
    var background = "rgb(" + randomRed + "," + 0 + "," + randomBlue + ")";
    document.body.style.backgroundColor = background;


    //randomly italicize the font? 50/50
    var italicize = Math.random() < 0.5; 
    if (italicize) {
     outputParagraph.style.fontStyle = "italic";
    } else {
     outputParagraph.style.fontStyle = "normal"; // normal if not italicized
    }


 }
});
