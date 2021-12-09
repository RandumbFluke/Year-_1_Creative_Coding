//Task 1

//let angle = 0;

//function setup() {
  //createCanvas(500,500);
  //angleMode(DEGREES);
//}

//function draw() {
  //background(0);

  //translate(100,100);
  //rotate(angle);
  //fill(255,0,0);
  //rectMode(CENTER);
  //rect(0,0,100,50);
  
  //angle = angle + 1;

  //push();
  //translate(0,0);
  //rotate(angle);
  //fill(0,0,255);
  //rectMode(CENTER);
  //rect(0,0,100,50);
  //angle = angle + 1;
  //pop();
//}

//Task 2
let b1;
let b2;

function setup(){
  createCanvas(500,500);
  b1 = new Bubble(random(50,width-50),random(50,height-50));
  b2 = new Bubble(random(50,width-50),random(50,height-50));
}

function draw(){
  background(0);
  b1.move();
  b2.move();
  b1.display();
  b2.display();
  b1.changeColor();
  b2.changeColor();
}

class Bubble{
  constructor(startX, startY){
    this.x= startX;
    this.y= startY;
    this.r=50;
    this.col = color(0,0,random(125,255));

    this.xSpeed = random(0.3,5);
    this.ySpeed = random(0.3,5);
    this.xDir = 1;
    this.yDir = 1;
  }

  changeColor(){
    this.col = color(0,0, random(125,255));
  }

  move() {
		
		this.x = this.x + (this.xSpeed * this.xDir);
		this.y = this.y + (this.ySpeed * this.yDir);

		if(this.x > (width-(this.r)) || this.x < (this.r)){
			this.xDir = this.xDir * -1;
		}

		if(this.y > (height-(this.r)) || this.y < (this.r)){
			this.yDir = this.yDir * -1;
		}

	}

	display() {
		noStroke();
		fill(this.col);
		ellipse(this.x, this.y,this.r*2,this.r*2);
	}
}