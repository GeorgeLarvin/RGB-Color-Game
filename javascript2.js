var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var rgbCode = document.getElementById("rgbCode")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();


function init(){
	setUpModeButtons();
	setUpSqaures();
	Reset();	
}

function setUpModeButtons(){
	for(var i=0; i < modeButtons.length; i++ ){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		if(this.textContent === "Easy"){
			numSquares = 3;
		}else {
			numSquares = 6;
		}
		Reset()
	});
	}
}

function setUpSqaures(){
	for(var i = 0; i < squares.length; i++){
	
	//add listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of square	
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = "try again";
		}
	});
			
}
}

function Reset(){
	colors = generateRandonColor(numSquares);
	pickedColor = pickColor();
	rgbCode.textContent = pickColor();
	resetButton.textContent = "New Colors";
	message.textContent = "";
	
	for(var i =0; i < squares.length; i++){
		if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.background = colors[i]
		}else {
				squares[i].style.display = "none";
		}
		;
	}
	h1.style.backgroundColor = "steeleblue";
}

resetButton.addEventListener("click", function(){
		Reset();
});


function changeColors(color){
	//loop through all squares
	for (var i =0; i < squares.length; i++){
		//change color to all the same
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//pick a random number 
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandonColor(num){
	//make array
	var arr = []
	
	//loop num times
	for (var i = 0; i < num; i++){
		//get random color and push to array 
		arr.push(randomColor());
	}
	
	//return array
	return arr;
}


function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}


 