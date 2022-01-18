let c1; //Created the variable c1
let c2; //Created the variable c2
let dots = []; //Array of dots
let x;
let y;
let diameter;

function setup() {
  createCanvas(1000,800); //Create a rectangle canvas of 1000px by 800px
  angleMode(DEGREES); //Changes the mode from radian to degrees
  noSmooth();
  c1 = 0; //Setting values to variable
  c2 = 69; //Setting value to variable
  let r = random(10,30);

  //Dots
  //push();
  //fill(255);
  for (let i = 0; i < 50; i++){
    dots.push(new Stars(random(0,width), random(0,height), random(5,10)));
  }
  //pop();
}

function draw() {
  //Gradient
  push(); //Saves/Stores the information in here
  const topColor = color(c1); //Const is a container for a value - it will only work within this function, I have declared topColour to be equal to the value of c1
  const bottomColor = color(c2); //Const is a container for a value - it will only work within this function, I have declared bottomColour to be equal to the value of c2

  for(let y = 0; y < innerHeight; y++){ //I have set the value of y to 0, while y is greater than innerHeight the for loop works
    const lineColor = lerpColor(topColor,bottomColor, y / height); //This divides the colours up and distributes it to form the gradient
    stroke(lineColor); //Changed the colour of the stroke
    line(0, y, width, y); //Setting the size of the line
  }
  pop(); //Restores the settings
  //Using push and pop here means the stroke colours on the rest of my objects won't change colour in the rest of the code

  //Stars
  push();
  fill("#FFFAFA");//Colour is Snow
  strokeWeight(1);
  drawingContext.shadowblur = 32;
  drawingContext.shadowColor = color("#FFFAFA")
  for (let i = 0; i < dots.length; i++){
    dots[i].display();
  }

  //Earth
  strokeWeight(2); //Gave the ellipse more of an outline by increasing the stroke weight
  fill("#00BFFF");//Colour is DeekSkyBlue
  ellipse(500,400,400); //Ellipse in the middle of the page

  //Moon
  strokeWeight(2); //Gave the ellipse more of an outline by increasing the stroke weight
  fill(69);//Colour is grey
  ellipse(800,200,150);
  strokeWeight(1); //Increased the stroke weight to add more depth
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
  stroke(255);
  strokeWeight(4);
  line(15,-1,15,-11);
  pop(); //Restore

  //Satellite wing Left Side
  push();
  stroke(255);
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
  stroke(255);
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

// Star Class
class Stars{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.diameter = r;
  }
  
  display(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}