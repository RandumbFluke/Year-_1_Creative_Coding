let x,y,size;
let xSpeed,ySpeed,xDir,yDir;
let shapey1;

//Task 1, 2

// || = OR function

function setup() {
  createCanvas(1200,800);
  x = width/2; //middle
  y = height/2; //centre
  size = 10;
  xSpeed = random(0.3,5);
  ySpeed = random(0.3,5);
  xDir = 1;
  yDir = 1;
  shapey1 = newMovingShape();
}

function draw() {
  //vapour trail
  noStroke();
  rectMode(CORNER);
  fill(255,255,255,80);//white 80 on the alpha channel
  rect(0,0,width,height);
  //
  move();
  display();
  //shapey1
  shapey1.move();
  shapey1.display();
}

function move(){
  x = x + (xSpeed*xDir);
  y = y + (ySpeed*yDir);
  if(x > (width-size) || x < size){
    xDir = xDir * -1; //flips between positive and negative 1
  }
  if(y > (height-size) || y < size){
    yDir = yDir * -1; //flips between positive and negative 1
  }
}

function display(){
  stroke(10);
  rectMode(CENTER);
  fill(0);
  rect(x,y,size,size);
}

class MovingShape{
  constructor(){
  this.x = width/2; //middle
  this.y = height/2; //centre
  this.size = 10;
  this.xSpeed = random(0.3,5);
  this.ySpeed = random(0.3,5);
  this.xDir = 1;
  this.yDir = 1;
  }

  move(){
  this.x = this.x + (this.xSpeed*this.xDir);
  this.y = this.y + (this.ySpeed*this.yDir);
  if(this.x > (width-(this.size/2)) || this.x < (this.size/2)){
    this.xDir = this.xDir * -1; 
  }
  
  if(this.y > (height-(this.size/2)) || this.y < (this.size/2)){
    this.yDir = this.yDir * -1; 
  }

}

  display(){
  stroke(10);
  rectMode(CENTER);
  fill(0);
  rect(this.x,this.y,this.size,this.size);
  }
}