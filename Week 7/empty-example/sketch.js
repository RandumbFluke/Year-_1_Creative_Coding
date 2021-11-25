let x,y,size;
let xSpeed,ySpeed,xDir,yDir;
let shapey1;
let shapey2;
let shapeArr = [];
let circ;

//Task 1, 2, 3, 4, 5

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
  //shapey
  //shapey1 = new MovingShape();
 // shapey2 = new MovingShape();
  //circle
  circ = new MovingCircle(random(0,width),random(0,height),random(1,40));

  //array
  for(let i = 0; i < 200; i++){
    shapeArr.push(new MovingShape(random(0,width),random(0,height),random(1,40))); //add a new MovingShape to our array each loop at random pos and with random size
  }
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
  //shapey1.move();
  //shapey1.display();
  //shapey2.move();
  //shapey2.display();
  //circle
  circ.move();
  circ.display();
  //array
  for(let i = 0; i < 200; i++){
    shapeArr[i].move();
    shapeArr[i].display();
  }
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
  constructor(startX,startY,startSize){

    console.log(startSize);
  this.x = startX;
  this.y = startY;
  this.size = startSize;
  //
  this.x = width/2; //middle
  this.y = height/2; //centre
  //this.size = 10;
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

class MovingCircle extends MovingShape{
  constructor(startX,startY,startSize){
    super(startX,startY,startSize);
  }

  move(){
    super.move();
  }

  display(){
    noStroke();
    fill(255,255,0);
    ellipse(this.x,this.y,this.size,this.size);
  }
}