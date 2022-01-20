let particles = [];  

function setup() {
  createCanvas(800,600);//Created a rectangle canvas 800px on the x axis and 600px on the y axis
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
}
}

function draw() {
  background( "#112388"); //Colour is blue
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
  }
}

function mousePressed() {
  let r = random(10, 30);
  let b = new Particle(mouseX, mouseY, r);
  particles.push(b);
}

// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(x,y,r){
      this.x = random(0,width);
      this.y = random(0,height);
      this.r = random(1,8);
      this.xSpeed = random(-2,2);
      this.ySpeed = random(-1,1.5);
    }
  
  // creation of a particle.
    createParticle() {
      noStroke();
      fill('rgba(200,169,169,0.5)');
      circle(this.x,this.y,this.r);
    }
  
  // setting the particle in motion.
    moveParticle() {
      if(this.x < 0 || this.x > width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }
  }  
