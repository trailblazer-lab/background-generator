var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var computedStyle = window.getComputedStyle(css);
var background = computedStyle.getPropertyValue('background');
css.textContent = background;

var button = document.querySelector("button");

button.addEventListener("click", function() 
{	var randomNum1 = generateRandomNumber();
    var randomNum2 = generateRandomNumber();

	color1.value = "#" + randomNum1;  
	color2.value = "#" + randomNum2;  
});

function generateRandomNumber() 
{var randomNumber = Math.floor(Math.random() * 
16777215).toString(16); 
return randomNumber.padStart(6, '0');
}


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
console.log(body.style.background); 