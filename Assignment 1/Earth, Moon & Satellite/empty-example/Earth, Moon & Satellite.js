let c1; //Created the variable c1
let c2; //Created the variable c2
let dots = []; //Array of dots
let x; //Created the variable x
let y; //Created the variable y
let diameter; //Created the variable diameter

function setup() {
  createCanvas(1000,800); //Create a rectangle canvas of 1000px by 800px
  angleMode(DEGREES); //Changes the mode from radian to degrees
  c1 = 0; //Setting values to variable
  c2 = 69; //Setting value to variable

  //Dots
  for (let i = 0; i < 50; i++){
    dots.push(new Stars(random(0,width), random(0,height), random(5,10))); //the class star will now appear in random positions and with a random size betweem 5-10px
  }
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
  push(); //Saves the information in here
  fill("#FFFAFA");//Colour is Snow
  strokeWeight(1); //Changed stroke weight to give the stars an outline
  for (let i = 0; i < dots.length; i++){ //This creates the dots within the length of the canvas
    dots[i].display(); //Display is being called - this creates the ellipse
  }

  //Earth
  strokeWeight(3); //Gave the ellipse more of an outline by increasing the stroke weight
  fill("#00BFFF");//Colour is DeekSkyBlue
  ellipse(500,400,400); //Ellipse in the middle of the page

  //Land
  push();
  strokeWeight(2);
  point(318,480);
  point(303,435);
  point(300,400);
  point(310,340);
  point(360,270);
  point(450,340);
  point(430,440);
  
  fill("#228B22");//Colour is ForestGreen
  beginShape();
  curveVertex(318,480);
  curveVertex(303,435);
  curveVertex(300,400);
  curveVertex(310,340);
  curveVertex(360,270);
  curveVertex(450,340);
  curveVertex(430,440);
  endShape(CLOSE);
  pop();

  push();
  strokeWeight(2);
  point(580,450);
  point(625,475);
  point(640,510);
  point(595,540);
  point(500,560);
  point(450,520);
  point(510,450);

  fill("#228B22");//Colour is ForestGreen
  beginShape();
  curveVertex(580,450);
  curveVertex(625,475);
  curveVertex(640,510);
  curveVertex(595,540);
  curveVertex(500,560);
  curveVertex(450,520);
  curveVertex(510,450);
  endShape(CLOSE);
  pop();

  push();
  strokeWeight(2);
  point(600,380);
  point(550,390);
  point(510,340);
  point(460,280);
  point(490,220);
  point(560,250);
  point(640,280);
  point(670,340);

  fill("#228B22");//Colour is ForestGreen
  beginShape();
  curveVertex(600,380);
  curveVertex(550,390);
  curveVertex(510,340);
  curveVertex(460,280);
  curveVertex(490,220);
  curveVertex(560,250);
  curveVertex(640,280);
  curveVertex(670,340);
  endShape(CLOSE);
  pop();


  //Moon
  strokeWeight(2); //Gave the ellipse more of an outline by increasing the stroke weight
  fill(69);//Colour is DimGrey
  ellipse(800,200,150);//Created an ellipse specifying the position and width
  strokeWeight(1); //Decreased the stroke weight to add more depth
  fill("#808080"); //Colour is Grey
  //Craters
  ellipse(840,210,30); //Small ellipse within the 'main' one, specifying the position and width
  ellipse(790,180,60); //Small ellipse within the 'main' one, specifying the position and width
  ellipse(780,240,40); //Small ellipse within the 'main' one, specifying the position and width

  //Satellite
  push(); //Save
  strokeWeight(1);//
  fill("#DCDCDC");//Colour is Gainsboro
  translate(240,180); // Setting the point for the shapes to be drawn around
  rotate(130); //Rotates the rectangle 130 degrees
  rect(0,0,30,100); //x and y axis was specified in 'translate'
  stroke(255); //Changed the stroke colour to white
  strokeWeight(4); //Increased the stroke weight to increase lines thickness
  line(15,-1,15,-11); //Placement of line from x1 - x2 and y1 - y2
  pop(); //Restore

  //Satellite Wing Left Side
  push(); //Save
  stroke(255); //Changed the stroke colour to white
  strokeWeight(2); //Decreased stroke weight it is now set to a value of 2
  translate(240,180); // Setting the point for the shapes to be drawn around
  rotate(130); //Rotates the shapes 130 degrees
  line(30,20,40,20); //Placement of line from x1 - x2 and y1 - y2
  line(30,80,40,80); //Placement of line from x1 - x2 and y1 - y2
  line(60,20,70,20); //Placement of line from x1 - x2 and y1 - y2
  line(60,80,70,80); //Placement of line from x1 - x2 and y1 - y2
  line(90,20,100,20); //Placement of line from x1 - x2 and y1 - y2
  line(90,80,100,80); //Placement of line from x1 - x2 and y1 - y2

  strokeWeight(1); //Decreased stroke weight it is now set to a value of 1
  fill("#191970");//Colour is MidnightBlue
  translate(60,95); // Setting the point for the shapes to be drawn around
  rotate(180); //Rotates the rectangles 180 degrees
  rect(0,0,20,90); //x and y axis was specified in 'translate', specified width and height
  rect(-30,0,20,90); //Decreased x and y axis to give space in between shapes, specified width and height
  rect(-60,0,20,90); //Decreased x and y axis to give space in between shapes, specified width and height
  pop(); //Restore
  //Keeping the content altogether makes alignment easier for when you rotate them. This means you rotate the whole 'Satellite Wing Left Side' instead of individual bits.

  //Satellite Wing Right Side
  push(); //Save
  stroke(255); //Changed the stroke colour to white
  strokeWeight(2); //Increased stroke weight it is now set to a value of 2
  translate(285,125); // Setting the point for the shapes to be drawn around
  rotate(130); //Rotates the shapes 130 degrees
  line(30,20,40,20); //Placement of line from x1 - x2 and y1 - y2
  line(30,80,40,80); //Placement of line from x1 - x2 and y1 - y2
  line(60,20,70,20); //Placement of line from x1 - x2 and y1 - y2
  line(60,80,70,80); //Placement of line from x1 - x2 and y1 - y2
  line(0,20,30,20); //Placement of line from x1 - x2 and y1 - y2
  line(0,80,30,80); //Placement of line from x1 - x2 and y1 - y2
 
  strokeWeight(1); //Decreased stroke weight it is now set to a value of 1
  fill("#191970"); //Colour is MidnightBlue
  translate(60,95); // Setting the point for the shapes to be drawn around
  rotate(180); //Rotates the shapes 180 degrees
  rect(0,0,20,90); //x and y axis was specified in 'translate', specified width and height
  rect(30,0,20,90); //Increased x and y axis to give space in between shapes, specified width and height
  rect(60,0,20,90); //Increased x and y axis to give space in between shapes, specified width and height
  pop();
}

// Star Class
class Stars{ //Created the class stars
  constructor(x,y,r){ 
    this.x = x; //This makes all x values the same as long as 'this.' is before 
    this.y = y; //This makes all y values the same as long as 'this.' is before 
    this.diameter = r; //This makes .this.diameter equal to r
  }
  
  display(){ //created the function display within the stars class
    ellipse(this.x, this.y, this.diameter, this.diameter); //created an ellipse with x, y, width and height values
  }
}