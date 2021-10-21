let rectWidth = 500;
let rectHeight = 250;

let ellipseWidth = 250;
let ellipseHeight = 350;

function setup() {
  createCanvas(1920,1080);
  background(255);
  //background colour 0 for black, 255 for white
  noLoop();
}

//function draw() {
  //text("Hello World!", 0, 50);
  //ellipse(50,50,40,40);
  //line(0,50,400,70);
  //triangle(347,54,392,9,392,66);
  //quad(158,55,199,14,392,66,351,107);
  //arc(300,300,50,50,90,270);
  //rect(25,50,rectWidth,rectHeight+14);
  //rect(155,444,rectWidth-72,rectHeight);
  //rect(1000,600,rectWidth,rectHeight*0.5);
  //rect(540,250,rectWidth/2,rectHeight);

//}

//ellipse drawShape
function drawShape1(ellipseWidth,ellipseHeight){
  let xPos = random(0, width);
  let yPos = random(0, height);
  ellipse(xPos,yPos,ellipseWidth,ellipseHeight);
}

//rectangle drawShape
function drawShape(rectangleWidth,rectangleHeight){
  let xPos = random(0, width);
  let yPos = random(0, height);
  rect(xPos,yPos,rectangleWidth,rectangleHeight);

}


//random spawn for shape and random colour
function draw(){
  fill(random(0,255),random(0,255),random(0,255));
  drawShape(rectWidth,rectHeight);
  drawShape1(ellipseWidth,ellipseHeight);

  //weird alien drawing
  rectMode(CENTER);
  rect(100,100,20,100);
  ellipse(100,70,60,60);
  ellipse(81,70,16,16);
  ellipse(119,70,16,16);
  line(90,120,80,105);
  line(110,120,120,105);
  line(90,150,80,160);
  line(110,150,120,160);

}

