class Interactive_Object {
  constructor(name, x, y, width, height, radius, color) {
	var s = this;
	s.height = height;
	s.width = width;
	s.radius = radius;
	
	s.name = name;
	s.x = x;
	s.y = y;
	s.color = color;
	
	s.speedx = 4;
	
	s.initx = s.x;
	
	s.hasHeight = false;
	//s.x = initx;

	s.initx = s.x;
	s.inity = s.y;
	
  }

	reset(){

		var s = this;
		s.x = s.initx; 
		s.y = s.inity;

	}

	drawCircle(){
		var s = this;
	
		drawCircle(s.x,s.y, s.radius, s.color);

	}
	
	drawRect(){
		var s= this;
	
		drawRect(s.x,s.y,
		s.width,s.height,
		s.color);
	
	}
	
	move(){
		
		var s = this;
		
		/*
		
		if(s.x >= c.width){

			s.speedx *= -1;

		}
		if(s.x <= 0){

			s.speedx *= -1;
		}
		
		s.x += s.speedx;
		*/
		
	}//move 
	
	
}//end of class

class Obstacle_Object extends Interactive_Object {

	constructor(name, x, y, width, height, radius, color){
		super(name, x, y, width, height, radius, color);
		
		var s = this;
		
		s.x2 = 0;
		s.y2 = 0;
		
		s.y2Offset = 100;
		s.width2 = 0;
		s.height2 = 0;
		s.hasWall = true;
		s.speedx = 6;
		s.initx = s.x;
		
		s.randWallInt = 0;
		
	}


	drawWall(){
		var s= this;
		
		//top pillar
		var cTenth = (c.height) / 10; //divide canvas by 10 
		s.height = cTenth * s.randWallInt;  //currently working on 
		
		drawRect(s.x,0,
		s.width,s.height,
		s.color);
		
		//bottom pillar
		s.x2 = s.x;
		s.y2 = s.height + cTenth ;
		s.width2 = s.width;
		s.height2 = ( c.height - s.y2);
		
		drawRect(s.x2,s.y2 + s.y2Offset, //note the offset
		s.width2,s.height2,
		s.color);
	
		
	}
	
	moveRect(){

		var s = this;
		
		s.x -= s.speedx;
		
		if(s.x < (-s.width)){

			//s.x = s.initx;

		}
		
		if(s.x <= -(s.width) && s.hasWall){

			s.x = s.initx;
			s.hasWall = false;

		}

		s.setRandomHeight();
	}
	
	setRandomHeight(){
		var s = this;
		
		if(!s.hasWall){

			var nuInt = Math.floor(Math.random() * 10);
			//var nuy = (c.height / 10) * nuInt;
			//s.y = nuy;
			s.randWallInt = nuInt;
			

			console.log(`rect1(x:${s.x},y:${s.y},w:${s.width},h:${s.height})`);
			
			s.hasWall = true;
		
		}
		

	}
	
	/*collisionDetect(){
		var rect1 = {};
		var rect2 = {};

		//top detection 
		//Collision 
		rect1.x < rect2.x + rect2.w &&
		rect1.x + rect1.w > rect2.x &&
		rect1.y < rect2.y + rect2.h &&
		rect1.y + rect1.h > rect2.y
		

	}*/// end of collisionDetect 


}//end of class 



class Player_Object extends Interactive_Object {

	constructor(name, x, y, width, height, radius, color){
		super(name, x, y, width, height, radius, color);
		
		var s = this;
		
			s.initx = s.x;
			s.inity = s.y;
			
			s.isUp = false;
			s.speedy = 8;

			s.showCollisionBox = false;
		
		}// end of cinstructor 
		
		reset(){

			var s = this;
			s.x = s.initx;
			s.y = s.inity;


		}


		move(){

				var s = this;
				var nuy = s.y;
				
				
				if(s.isUp){
					
					s.speedy = -8;
				}else if(!s.isUp){
				
					s.speedy = 8;
				}
				
				
				s.y += s.speedy;
				
				
				if(s.y >= c.height){
				
					s.x = s.initx;
					s.y = s.inity;
				
				
				}
				
				//s.y = nuy;

		}// end of moveAbove


		collisionDetect(o){
			var s = this; 	
                	var rect1 = {x: s.x-s.radius, y: s.y-s.radius, w:s.radius*2, h:s.radius*2};
	                var rect2 = {x: o.x, y: o.y, w:o.width, h:o.height};
        	        var rect3 = {x: o.x2, y: o.y2, w:o.width2, h:o.height2};

					

					if(
						s.x  >= rect2.x &&//rect1 right edge is greater than rect2 left
						s.x <= rect2.x + rect2.w &&
						s.y >= rect2.y &&
						s.y <= rect2.y + rect2.h
						
						){
							console.log("Collided!");
							s.reset();
							o.reset();
					}

			//Collision top pillar 
					if(
                                                s.x  >= rect3.x &&//rect1 right edge is greater than >
                                                s.x <= rect3.x + rect3.w &&
                                                s.y >= rect3.y &&
                                                s.y <= rect3.y + rect3.h

                                                ){
                                                        console.log("Collided!");
                                                        s.reset();
                                                        o.reset();
                                        }
					


        	}//end of collisionDetect method 		
		
}//end of class
