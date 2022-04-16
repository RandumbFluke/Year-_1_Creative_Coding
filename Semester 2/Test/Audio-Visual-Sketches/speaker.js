//Speaker

//Creating a function to store everything in to be called in the sketch.js
function drawshape_speaker(){
  background("#FF69B4"); //Hot Pink

  //Setting the size in px, colour and position of the text
  push(); //Store information
  fill(255); //White
  textSize(30);
  textAlign(CENTER); //Text will be written centrally 
  //text("Cartoon x Time To Talk - Omen (Ft. Asena)", width/2, 100); //("", x-axis,y-axis)
  pop(); //Restore to 'default' settings

  //Vol, diam, diam2 & diam3 are variables
 


  //Speaker (Outside) - layering circles on one another to create a speaker. Changing the fill and stroke to make each layer stand out
  //Fill colours in the interior of each ellipse unless stated otherwise with noFill()
  //Fill, when only 0-255, colours black to white
  fill(20); 
  //Ellipse creates a circle with the first number being the position on the x coordinate, the second being the y coordinate and the third number being the width
  ellipse(400, 400, 350); 
  //Stroke is the colour of the outline around each object and strokeWeight is the thickness of that outline
  stroke(0);
  strokeWeight(1); //Outline will be a thickness of 1px
  //Inner ring
  fill(50);
  ellipse(400, 400, 300);
  //Screws
  fill(200);
  ellipse(300, 303, 12);
  ellipse(500, 303, 12);
  ellipse(300, 498, 12);
  ellipse(500, 498, 12); 

  //Inside 
  fill(70);
  ellipse(400, 400, 260);
  fill(50);
  ellipse(400, 400, 200); //This uses the sizes given in diam so the corresponding size right now is 100px - 200px
  fill(40);
  ellipse(400, 400, 180); //This uses the sizes given in diam2 so the corresponding size right now is 80px - 180px
  fill(80);
  ellipse(400, 400, 150); //This uses the sizes given in diam3 so the corresponding size right now is 70px - 150px


}