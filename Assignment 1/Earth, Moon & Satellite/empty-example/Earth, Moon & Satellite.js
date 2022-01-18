function setup() {
  createCanvas(1000,800); //Create a rectangle canvas of 1000px by 800px
  angleMode(DEGREES);
}

function draw() {
  background("#696969"); //Background colour of DeepGrey

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
  strokeWeight(1);
  fill("#DCDCDC");//Colour is Gainsboro
  translate(240,180);
  rotate(130);
  rect(0,0,30,100);

  //Satellite wing
  strokeWeight(2);
  fill(0);
  line(30,20,40,20);
  line(30,80,40,80);
  line(0,20,-10,20);
  line(0,80,-10,80);

  strokeWeight(1);
  fill("#191970");//Colour is MidnightBlue
  translate(60,95);
  rotate(180);
  rect(0,0,20,90);

}