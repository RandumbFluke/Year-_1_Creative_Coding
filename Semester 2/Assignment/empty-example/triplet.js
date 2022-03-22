//Triplet Note Background
function drawshape_triplet(){
    //Background
    background("#DC143C");
    
    push();
    stroke(0);
    fill(0);
    strokeWeight(15);
    line(125,150,675,150);
    //First line
    line(125,150,125,600);
    ellipse(90,580,80);
    //Middle line
    line(400,150,400,600);
    ellipse(365,580,80);
    //Last line
    line(675,150,675,600);
    ellipse(640,580,80);
    pop();
  }