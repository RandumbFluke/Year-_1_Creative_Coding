//Task 1

//let x = 0;

//function setup() {
  //createCanvas(400,400);
  //noFill();
  //stroke(255);
//}

//function draw() {
  //background(0);
  //ellipse(x,height/2,50);

  //x = x + 1;
  //if (x > width){
    //x=0;
  //}
  //console.log(x);
//}


//Task 2 & 3

let dots = []; // array of Jitter objects
let x;
let y;
let speed;
let diameter;
let words;

function setup() {
  createCanvas(710, 400);
  noStroke();
  //background(0);
  // Create objects
  for (let i = 0; i < 0; i++) {
    dots.push(new Jitter(random(0,width), random(0,height), random(10, 30)));
  }
  //console.log(dots);
  console.log(letterCapitalise("hello world"));
}

function letterCapitalise(str){
  
  str = str.toUpperCase();

  return str;
}



// create new object when mouse is pressed
function mousePressed() {
  let r = random(10, 30);
  let b = new Jitter(mouseX, mouseY, r);
  dots.push(b);
}

function draw() {
  background(0);
  // move and display all the objects
  for (let i = 0; i < dots.length; i++) {
    dots[i].move();
    dots[i].display();
  }
}

//function display(){
  //ellipse(x, y, diameter, diameter);
//}

//function move(){
  //x += random(-speed, speed);
  //y += random(-speed, speed);
//}

// Jitter class
class Jitter {
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
    //noFill();
    //stroke(255);
  }
}

