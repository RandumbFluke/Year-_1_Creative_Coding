int noOfEllipses = 1000;

void setup() {
  size(500, 500);
}


void draw() {
  background(0);
  fill(255);

    for (int i = 0; i < noOfEllipses; i++) {
      ellipse(random(0,width), random(0,height), random(2,5), random(2,5));
    }

  fill(0,0,255);
  textSize(32);
  text(frameRate, 10, 30);
}
