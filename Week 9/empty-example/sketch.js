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