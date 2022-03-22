//Vinyl Background
function drawshape_vinyl(){ 
    //Vinyl Track
    push();
    //Main circle
    fill(20);
    strokeWeight(1);
    ellipse(420,400,250);
    //Rings
    strokeWeight(2);
    stroke("#808080");
    ellipse(420,400,225);
    ellipse(420,400,175);
    //Outline around middle
    strokeWeight(0);
    fill(0);
    ellipse(420,400,125);
    //Middle of Vinyl
    fill(255,165,0);
    ellipse(420,400,100);
    pop();
  
    //Vinyl Cover
    push();
    fill(0);
    //strokeWeight(1);
    //stroke(255);
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