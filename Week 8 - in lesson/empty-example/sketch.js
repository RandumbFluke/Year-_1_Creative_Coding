let x = 100;

function setup(){
  createCanvas(500,500);
  background(0);
  noStroke();
}

function draw(){
  fill(255);
  ellipse(x, height/2, 100, 100);
}