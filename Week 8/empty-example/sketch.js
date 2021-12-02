let x = 0;

function setup() {
  createCanvas(400,400);
  noFill()
  stroke(255);
}

function draw() {
  background(0);
  ellipse(x,height/2,50);

  x = x + 1;
  if (x > width){
    x=0;
  }
  console.log(x);
  }

  