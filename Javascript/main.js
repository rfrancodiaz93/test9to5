
//GLOBAL VARIABLES
var KEYCODE_C_67 = 67;
var KEYCODE_X_88 = 88;

const c = document.getElementById("canvas");

const ctx = c.getContext("2d");


let whiteBall = new Player_Object("whiteBall", c.width * 0.25, c.height/2, 0, 0, 10, "White");

let redBrick = new Obstacle_Object(
	"redBrick", 
	c.width, 
	0, 
	60, 
	c.height, 
	0, "Red");

// functions 
function clearScreen(){


	drawRect(0,0, c.width,c.height, "Black");

}


function userInterface(){

	var x = c.width * 0.90;
	var y = c.height * 0.10;
	
	//Header
	drawText("ADAMUS ENGINE", 10,22, 10, "White");
	/*var text = "ADAMUS";
	ctx.fillStyle = "white";
	ctx.font = ""+40+"px serif";
  ctx.fillText(text, 10, 50);*/

	drawText("Hello, World!", c.width * 0.10,c.height * 0.90, 10, "White");

}

function gameAssests(){

//drawCircle(100,100, 10, "Orange");
	whiteBall.drawCircle();
	redBrick.drawWall();
}

function allTriggers(){
	
	//redBrick.setRandomHeight();

}

function allCollision(){

	 whiteBall.collisionDetect(redBrick);

}

function moveAll(){

	whiteBall.move();
	redBrick.moveRect();

}

function drawAll(){

	clearScreen();
	gameAssests();
	userInterface();
	
	
/*
drawRect(0,0, 300, 300, "Green");
drawRect(0,0, 100, 100, "Red");

drawCircle(100,100, 50, "Orange");
*/



}



function updateAll(){

	allCollision();
	drawAll();
	moveAll();
	allTriggers();

}//end of updateAll


function update30FPS(){

	
	setInterval(updateAll, 1000/30);

}

// keyboard events 
function keyDown(e){
	
	console.log("keycode: " + e.keyCode);

	if(e.keyCode == 32){
		
		whiteBall.isUp = true;

		
	}


	if(e.keyCode == KEYCODE_C_67){
		
		whiteBall.showCollisionBox = true;

		
	}
	

}


function keyUp(e){

	if(e.keyCode == 32){

		whiteBall.isUp = false;

	}

	if(e.keyCode == KEYCODE_X_88){
		
		whiteBall.showCollisionBox = false;

		
	}

}//


// touch events 
function handleStart(evt){

	evt.preventDefault();
	whiteBall.isUp = true;

}

function handleEnd(evt){

	evt.preventDefault();
	whiteBall.isUp = false;

}

function allEventListeners(){

	  
  	c.addEventListener("touchstart", handleStart);
	c.addEventListener("touchend", handleEnd);
	document.addEventListener("keydown", keyDown);
	document.addEventListener("keyup", keyUp);
	

}


function initAll(){


	// event handler
	allEventListeners();

	// frame update
	update30FPS();


}

window.onload = initAll;




