let c1; //Created the variable c1
let c2; //Created the variable c2

function setup() {
  createCanvas(1000,800); //Create a rectangle canvas of 1000px by 800px
  angleMode(DEGREES); //Changes the mode from radian to degrees
  noSmooth();
  c1 = 0;
  c2 = 69;
}

function draw() {
  background("#696969"); //Background colour of DeepGrey

  //Gradient
  const topColor = color(c1);
  const bottomColor = color(c2);

  for(let y = 0; y < innerHeight; y++){
    const lineColor = lerpColor(topColor,bottomColor, y / height);
    stroke(lineColor);
    line(0, y, width, y);
  }

  //Earth
  strokeWeight(2); //Gave the ellipse more of an outline by increasing the stroke weight
  fill("#00BFFF");//Colour is DeekSkyBlue
  ellipse(500,400,400); //Ellipse in the middle of the page

  //Moon
  strokeWeight(2); //Gave the ellipse more of an outline by increasing the stroke weight
  fill(69);//Colour is grey
  ellipse(800,200,150);
  strokeWeight(3); //Increased the stroke weight to add more depth
  fill("#808080"); //Colour is lightGrey
  //Craters
  ellipse(840,210,30); //Small ellipse within the 'main' one
  ellipse(790,180,60); //Small ellipse within the 'main' one
  ellipse(780,240,40); //Small ellipse within the 'main' one

  //Satellite
  push(); //Save
  strokeWeight(1);//
  fill("#DCDCDC");//Colour is Gainsboro
  translate(240,180);
  rotate(130);
  rect(0,0,30,100);
  fill(0);
  strokeWeight(4);
  line(15,-1,15,-11);
  pop(); //Restore

  //Satellite wing Left Side
  push();
  
  strokeWeight(2);
  translate(240,180);
  rotate(130);
  fill(0);
  line(30,20,40,20);
  line(30,80,40,80);
  line(60,20,70,20);
  line(60,80,70,80);
  line(90,20,100,20);
  line(90,80,100,80);

  strokeWeight(1);
  fill("#191970");//Colour is MidnightBlue
  translate(60,95);
  rotate(180);
  rect(0,0,20,90);
  rect(-30,0,20,90);
  rect(-60,0,20,90);

  pop();

  //Satellite wing Right Side
  push();
  
  strokeWeight(2);
  translate(285,125);
  rotate(130);
  fill(0);
  line(30,20,40,20);
  line(30,80,40,80);
  line(60,20,70,20);
  line(60,80,70,80);

  line(0,20,30,20);
  line(0,80,30,80);

  strokeWeight(1);
  fill("#191970");//Colour is MidnightBlue
  translate(60,95);
  rotate(180);
  rect(0,0,20,90);
  rect(30,0,20,90);
  rect(60,0,20,90);

  pop();
}