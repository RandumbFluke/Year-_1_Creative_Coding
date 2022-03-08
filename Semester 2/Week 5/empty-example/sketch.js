let p1;

function setup() {
  createCanvas(500,500);
  p1 = new Particle(random(50,width-50), random(50,height-50));
}

function draw() {
  background(0);

  p1.update();
  p1.display();
  p1.checkEdges();
}

class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.r = 10;

    this.xVel = random(0.5,2.5);
    this.yVel = random(0.5,2,5);
  }

  update() {
    this.x = this.x + this.xVel;
    this.y = this.y + this.yVel;
  }

  display() {
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  checkEdges() {
    if (this.x > (width-this.r)) {
      this.xVel *=-1;
      this.x = width-this.r;
    } else if (this.x < (0+this.r)) {
      this.xVel *= -1;
      this.x = 0+this.r;
    }

    if (this.y > (height-this.r)) {
      this.yVel *= -1;
      this.y = height-this.r;
    } else if (this.y < (0+this.r)) {
      this.yVel *= -1;
      this.y = 0+this.r;
    }
  }
}
