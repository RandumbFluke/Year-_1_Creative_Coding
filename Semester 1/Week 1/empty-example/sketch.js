function setup() {
  createCanvas(1920, 1080, WEBGL);
}

function draw() {
  background(205, 102, 94);
  rotateX(mouseX/360);
  rotateY(mouseY/360);
  sphere(360); 
  fill(7, 67, 14);
    if (mouseIsPressed) {
      scale(1);
    }

}