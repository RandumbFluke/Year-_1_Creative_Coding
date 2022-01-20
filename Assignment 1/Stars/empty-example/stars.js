let star = []; //Created an array called stars
let x; //Created the variable x
let y; //Created the variable y
let diameter; //Created the variable diameter

function setup() { 
  createCanvas(800, 600); //Canvas size of 800px on the x axis and 600px on the y axis
  noStroke() //No outline to any objects
  for (let i = 0; i < 0; i++) { //When  i = 0 spawn in no objects
    star.push(new Stars(random(0,width), random(0,height), random(10, 30))); //Random width, height and size for each object
  }
}

// Creating a new object when the mouse is pressed
function mousePressed() { //created a new function
  let r = random(10, 30); //random size
  let b = new Stars(mouseX, mouseY, r); //New object will spawn where clicked with a random size between 10 and 30px
  star.push(b); //save 
}

function draw() {
  background(25); //background is dark grey
  // move and display all the objects
  for (let i = 0; i < star.length; i++) {
    star[i].move(); //calling on the move function within the 'Stars' class
    star[i].display(); //calling on the display function within the 'Stars' class
  }
}

// Stars class
class Stars { //Created the class Stars
  constructor(x, y, r) { //Created a new object
    this.x = x; //This.x now has the same value as x
    this.y = y; //This.y now has the same value as y
    this.diameter = r; //This.diameter now has the same value as r
    this.xSpeed = random(-2,2); //This.xSpeed now has a random movement speed between -2px or 2px on the x axis
    this.ySpeed = random(-1,1.5); //This.ySpeed now has a random movement speed between -1px or 1.5px on the y axis
  }

  move() { //function move
    if(this.x < 0 || this.x > width) //If this.x is less than 0 or greater than width its movement changes - causing it to bounce around the screen
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height) //If this.y is less than 0 or greater than height its movement changes - causing it to bounce around the screen
      this.ySpeed*=-1;
    this.x+=this.xSpeed; //Causes the ellipse to bounce around the screen as it the values state where the object is
    this.y+=this.ySpeed; //Causes the ellipse to bounce around the screen as it the values state where the object is
  }


  display() {
    fill(random(0,255)); //the objects continuously flicker as they randomly change colour between black and white causing it to have a grey flicker effect
    ellipse(this.x, this.y, this.diameter, this.diameter); //Setting the width, height and diameter of the ellipse
  }
}

