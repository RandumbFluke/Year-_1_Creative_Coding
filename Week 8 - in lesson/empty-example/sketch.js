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

  //Shuttle boosters
  push();
  fill(0);
  strokeWeight(2);

  beginShape();
  curveVertex(360,370);
  curveVertex(355,390);
  curveVertex(385,390);
  curveVertex(380,370);
  endShape(CLOSE);

  beginShape();
  curveVertex(420,370);
  curveVertex(415,390);
  curveVertex(445,390);
  curveVertex(440,370);
  endShape(CLOSE);
  pop();

  //Fire
  push();
  strokeWeight(3);
  fill("#e65c00");
  beginShape();
  curveVertex(355,390);
  curveVertex(358,400);
  curveVertex(361,408);
  curveVertex(356,415);
  curveVertex(370,420);
  curveVertex(388,413);
  curveVertex(383,405);
  curveVertex(385,390);
  endShape(CLOSE);

  translate(60,0);
  beginShape();
  curveVertex(355,390);
  curveVertex(358,400);
  curveVertex(361,408);
  curveVertex(356,415);
  curveVertex(370,420);
  curveVertex(388,413);
  curveVertex(383,405);
  curveVertex(385,390);
  endShape(CLOSE);
  pop();

  //Shuttle Wings
  //Left
  push();
  strokeWeight(3);
  fill("#3399ff")
  beginShape();
  curveVertex(366,265);
  curveVertex(330,300);
  curveVertex(353,310);
  endShape(CLOSE);

  //Right
  beginShape();
  curveVertex(428,265);
  curveVertex(464,300);
  curveVertex(439,310);
  endShape(CLOSE);
  pop();
}
