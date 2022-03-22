//setup function
function setup() {
  createCanvas(800,800);
}

//Draw function
function draw() {
  background("#DC143C");
  //drawshape_vinyl();
  //drawshape_triplet();
  //drawshape_speaker();
}

//Triplet Note Background
function drawshape_triplet(){
  push();
  stroke(0);
  fill(0);
  strokeWeight(15);
  line(125,150,675,150);
  //First line
  line(125,150,125,600);
  ellipse(90,580,80);
  //Middle line
  line(400,150,400,600);
  ellipse(365,580,80);
  //Last line
  line(675,150,675,600);
  ellipse(640,580,80);
  pop();
}

//Speaker
function drawshape_speaker(){
  push();
  fill(20);
  ellipse(400,400,350);
  stroke(0);
  strokeWeight(1);
  fill(50);
  ellipse(400,400,300);
  fill(70);
  ellipse(400,400,260);
  fill(50);
  ellipse(400,400,100);
  fill(40);
  ellipse(400,400,80);
  fill(40);
  ellipse(400,400,70);
  fill(200);
  ellipse(300,303,12);
  ellipse(500,303,12);
  ellipse(300,498,12);
  ellipse(500,498,12);
  pop();
}

//Vinyl Background
function drawshape_vinyl(){ 
  //Vinyl Track
  push();
  //Main circle
  fill(20);
  strokeWeight(1);
  ellipse(420,400,250);
  //Rings
  strokeWeight(2);
  stroke("#808080");
  ellipse(420,400,225);
  ellipse(420,400,175);
  //Outline around middle
  strokeWeight(0);
  fill(0);
  ellipse(420,400,125);
  //Middle of Vinyl
  fill(255,165,0);
  ellipse(420,400,100);
  pop();

  //Vinyl Cover
  push();
  fill(0);
  //strokeWeight(1);
  //stroke(255);
  rect(150,265,270);
  pop();

  //Vinyl Cover Design
  push();
  fill("#F5FFFA"); //Mintcream
  strokeWeight(0);
  ellipse(290,400,180);
  //Text
  fill(0);
  textSize(32);
  text('CREATIVE',210,400);
  text('CODING',225,430);
  pop();
}