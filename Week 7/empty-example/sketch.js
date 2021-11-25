let x,y,size;
let xSpeed,ySpeed,xDir,yDir;

//Task 1, 2

function setup() {
  createCanvas(1200,800);
  x = width/2; //middle
  y = height/2; //centre
  size = 10;
  xSpeed = random(0.3,5);
  ySpeed = random(0.3,5);
  xDir = 1;
  yDir = 1;
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

  }

  display(){

  }
}