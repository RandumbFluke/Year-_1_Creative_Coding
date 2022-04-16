let angle = 0; //Setting a variable


//Creating a function to store everything in to be called in the sketch.js
function drawshape_vinyl(){ 
  //Background
  background("#8A2BE2"); //Blue Violet background colour
  push(); //Store information
  //Setting the size in px, colour and position of the text
  strokeWeight(0); //No outline around text
  fill(255); //White
  textSize(30);
  textAlign(CENTER); //Text will be written centrally 
  //text("Cartoon - On & On", width/2, 100); //("", x-axis,y-axis)
  pop(); //Restore to 'default' settings

  //Settings
  angleMode(DEGREES); //Changing from radians to degrees

  
  //Vinyl Track
  //Rotation

  translate(width/2,height/2); //Starting position for each object - x and y axis is the middle of the canvas
  rotate(angle); //Shape will rotate around the origin point of the value specified - in this case it is the variable angle

  //Main circle

  //Fill colours in the interior of each ellipse unless stated otherwise with noFill()
  //Fill, when only 0-255, colours black to white
  fill(20);
  //strokeWeight is the thickness of that outline
  strokeWeight(1);
  //The x and y position of every ellipse has been given with the tranlate function
  ellipse(0,0,250);

  //Rings

  strokeWeight(2);
  //stroke is the colour of the outline around each object
  stroke("#808080"); //Grey
  ellipse(0,0,225);
  ellipse(0,0,175);

  //Outline around middle

  strokeWeight(0);
  fill(0);
  ellipse(0,0,125);
  //Middle of Vinyl
  fill(255,165,0);
  ellipse(0,0,100);

  //Design on track

  fill(255,255,0);
  ellipse(0,0,60);
  fill(0);
  //x and y coordinates contain negatives here as the origin point is now the centre of the screen
  ellipse(10,-10,10);
  ellipse(-10,-10,10);
  fill(255);
  ellipse(10,-10,7);
  ellipse(-10,-10,7);
  fill(0);
  ellipse(10,-10,3);
  ellipse(-10,-10,3);
  fill(255);
  strokeWeight(2);
  stroke(0);
  ellipse(0,10,15);
  //Rotates anticlockwise (with a positive number it would be clockwise)
  angle = angle + 1.25; //1.25 is the speed in which it is rotating
}

