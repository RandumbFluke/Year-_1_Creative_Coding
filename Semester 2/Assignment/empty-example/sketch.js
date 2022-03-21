
//setup function
function setup() {
  createCanvas(800,800);
}

//Vinyl Background
function drawshape_vinyl(){ 
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
}

//Draw function
function draw() {
  background(120);
  drawshape_vinyl();
}

