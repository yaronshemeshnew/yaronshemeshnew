var colors = [
generateRandomColors(6);
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector ("#reser");
var modeButtons= document.querySelectorAll (".mode");

for (var i=0;i<modeButtons.length;i++)
    {
       modeButtons[i].addEventListener(click",function()"){
        
        modeButtons[0].classlist.remove("selected");
        modeButtons[1].classlist.remove("selected");
        
        this.classList.add ("selected");
        
             
             this.textContent==="Easy"? numSquares= 3: numSquares =6;
                   
            reset();
             
            });
           
        //figure out how many squares to show
        // pick new colors
        // picak a new pickedColor
        //update page to reflect changes
            
        });
        
    }


function reset(){
    
    colors=generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor=pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors"
    
    manageDisplay.textContent="";
    //change colors of squares
    
    for (var i=0;i<squares.length;i++){
        if (colors[i]){
            squares[i].style.display="block";
            squares[i].style.background=colors[i];   
        }else {
            squares[i].style.display="none";
        }
    }
    
    h1.style.background="steelblue";
    
}

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors (num){
    //make an array
    var arr=[]
    //repeat num times
    for (var i=0;i<num;i++){
          //get random color and push into arr
    arr.push (randomColor());
        
       
    }
    
    //return that array
    return arr;
}

    

function randomColor() {
    
    //pick a red from 0-255
    
    var r= Math.floor(Math.random() * 256)
    
    //pick a green from 0-255
    
    var g= Math.floor(Math.random() * 256)
    
    
    //pick a blue from 0-255
    var b= Math.floor(Math.random() * 256)
    
    return "rgb (" + r + ", " + g + ", " + b+ "")";
    
}
