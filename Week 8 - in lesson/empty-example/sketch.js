function setup(){
  createCanvas(1000,800);
  angleMode(DEGREES);
}

function draw(){
  background(50);
    //Satellite
    push(); //Save
    strokeWeight(1);//Setting the thickness of the stroke
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
    pop();//Restore
}