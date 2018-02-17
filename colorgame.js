var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",  function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
	   	squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generateall new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random colors from array
	pickedColor = pickColor();
	//change the color display
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	this.textContent = "new Game";
	//change colors of squares
	for(var i = 0; i<squares.length; i++) {
		//add initial colors to squares
 		squares[i].style.backgroundColor = colors[i];
	 }
	 h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i<colors.length; i++) {
	//add initial colors to squares
 	squares[i].style.backgroundColor = colors[i];

 	//add click listeners
 	squares[i].addEventListener("click", function() {
 		//grab color of the clicked Square
 		var clickedColor = this.style.backgroundColor;
 		//compairing that color to the picked color
 		if(clickedColor===pickedColor) {
 			messageDisplay.textContent = "Currect!!";
 			changeColor(clickedColor);
 			h1.style.backgroundColor = clickedColor;
 			resetButton.textContent = "Play Again?";
 		} else {
 			this.style.backgroundColor ="#232323";
 			messageDisplay.textContent = "Try Again!";
 		}
 	});
}

function changeColor(color) {
	//loop through all squares
	for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//num random color to array
	//repeat num times
	for(var i =0; i<num; i++) {
		//get random color and push into the array;
		arr.push(randomColor()); 
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 255 + 1);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 255 + 1);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 255 + 1);
	//rgb(r, g, b)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}