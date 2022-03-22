let angle = 0;

function setup(){
    createCanvas(800,800);
    angleMode(DEGREES);
}

//Vinyl Background
function drawshape_vinyl(){ 
    //Background
    background("#8A2BE2");

    //Vinyl Track
    push();
    //Rotation
    translate(420,400);
    rotate(angle);

    //Main circle
    fill(20);
    strokeWeight(1);
    ellipse(0,0,250);
    //Rings
    strokeWeight(2);
    stroke("#808080");
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
    
    angle = angle + 1;
    pop();
  
    //Vinyl Cover
    push();
    fill(0);
    rect(150,265,270);
    pop();
  
    //Vinyl Cover Design
    push();
    fill("#F5FFFA"); //Mintcream
    strokeWeight(0);
    ellipse(290,400,180);
    //Text
    fill(0);
    textSize(32);
    text('CREATIVE',210,400);
    text('CODING',225,430);
    pop();
  }