function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  background(102);

  //rotate(30);
  //translate(0,-150);

  //Shuttle
  push();
  strokeWeight(3);
  point(400,200);
  point(350,350);
  point(450,350);

  fill("#33bbff");
  beginShape();
  curveVertex(450,350);
  curveVertex(350,350);
  curveVertex(400,200);
  endShape(CLOSE);
  pop();

  //Window
  push();
  strokeWeight(2);
  fill(0);
  ellipse(400,270,40);
  fill(255);
  ellipse(400,270,35);
  strokeWeight(1);
  //Astronaut
  fill("#ffd9b3");
  ellipse(400,270,15);
  fill(0);
  ellipse(398,268,2);
  ellipse(402,268,2);

  //Smile
  fill(255);
  point(396,273);
  point(400,276);
  point(404,273); 

  beginShape();
  curveVertex(396,273);
  curveVertex(400,276)
  curveVertex(404,273);
  endShape(CLOSE);
  pop();

  //Base of shuttle
  push();
  fill("#3399ff")
  strokeWeight(3);
  rect(340,350,120,20,20);
  pop();

  push();


  pop();

}
