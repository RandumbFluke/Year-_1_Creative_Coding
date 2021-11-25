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
    yDir = yDir * -1 //flips between positive and negative 1
  }
}

function display(){
  stroke(10);
  rectMode(CENTER);
  fill(0);
  rect(x,y,size,size);
}