let star = []; 
let x;
let y;
let diameter;

function setup() {
  createCanvas(800, 600);
  noStroke()
  for (let i = 0; i < 0; i++) {
    star.push(new Stars(random(0,width), random(0,height), random(10, 30)));
  }
}

// create new object when mouse is pressed
function mousePressed() {
  let r = random(10, 30);
  let b = new Stars(mouseX, mouseY, r);
  star.push(b);
}

function draw() {
  background(0);
  // move and display all the objects
  for (let i = 0; i < star.length; i++) {
    star[i].move();
    star[i].display();
  }
}

// Jitter class
class Stars {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.diameter = r;
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  move() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }


  display() {
    fill(random(0,255));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

