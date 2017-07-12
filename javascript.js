var numSquares = 6;
var colors = generateRandonColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbCode = document.getElementById("rgbCode")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");


rgbCode.textContent = pickedColor;

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 6;
	colors = generateRandonColor(numSquares);
	pickedColor = pickColor();
	rgbCode.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i]
			squares[i].style.display = "block";	
	}
});

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = generateRandonColor(numSquares);
	pickedColor = pickColor();
	rgbCode.textContent = pickedColor;
	
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i]
		} else {
			squares[i].style.display = "none";
		}
	}
});

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandonColor(numSquares);
	//pick a new random color from array 
	pickedColor = pickColor();
	//change color display to match picked color
	rgbCode.textContent = pickedColor;
	//change the colors on the square	
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i]
	}
	h1.style.backgroundColor = "steelblue";
	message.textContent = " ";
	resetButton.textContent = "new Colors";
});

for(var i = 0; i < squares.length; i++){
	
	//add inital squares
	squares[i].style.backgroundColor = colors[i];
	
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


 