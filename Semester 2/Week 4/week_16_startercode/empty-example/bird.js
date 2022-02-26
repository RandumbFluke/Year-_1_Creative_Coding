// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

class Bird  {

  constructor() {
    this.y = height/2;
    this.x = 64;

    //Original
    //this.gravity = 0.5;
    //this.lift = -14;
    //this.velocity = 0;

    this.gravity = 0.5; //How long you float in the air
    this.lift = -10; //How high you go on lift
    this.velocity = 0; //How quickly you fall to the ground
  }
  

  show() {
    noStroke();
    //fill("#ff884f");
    fill(255,0,40);
    //Shape of the bird
    //ellipse(this.x, this.y, 32, 32); 
    rect(this.x, this.y, 32, 32);
  }

  up() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}
