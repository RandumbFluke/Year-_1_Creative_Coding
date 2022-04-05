//Speaker
function drawshape_speaker(){
  background("#FF69B4");

  push();
  fill(255);
  textSize(30);
  text("Cartoon x Time To Talk - Omen (Ft. Asena)", 120, 100);
  pop();

  push();
  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.25, 100, 200);
  let diam2 = map(vol, 0, 0.25, 80, 180);
  let diam3 = map(vol, 0, 0.25, 70, 150);


  //Speaker
  //Outside
  fill(20);
  ellipse(400, 400, 350);
  stroke(0);
  strokeWeight(1);
  //Inner ring
  fill(50);
  ellipse(400, 400, 300);
  //Screws
  fill(200);
  ellipse(300, 303, 12);
  ellipse(500, 303, 12);
  ellipse(300, 498, 12);
  ellipse(500, 498, 12);
  pop();


  push();
  fill(70);
  ellipse(400, 400, 260);
  fill(50);
  ellipse(400, 400, diam, diam);
  fill(40);
  ellipse(400, 400, diam2, diam2);
  fill(80);
  ellipse(400, 400, diam3, diam3);
  pop();


  push();
  noFill();
  stroke(255);
  translate(width / 2, height / 2);

  fft.analyze();
  amp2 = fft.getEnergy(20, 200);

  let wave = fft.waveform();

  let p = new Particle();
  particles.push(p);

  for (let i = particles.length - 1; i >= 0; i--) {
    if (!particles[i].edges()) {
      particles[i].update(amp2 > 150);
      particles[i].show();
    } else {
      particles.splice(i, 1);
    }

  }

  pop();
  }

  class Particle {
    constructor(){
      this.pos = p5.Vector.random2D().mult(180);
      this.vel = createVector(0,0);
      this.acc = this.pos.copy().mult(random(0.0001, 0.00001));
  
      this.w = random(3, 5);
    }
    update(cond){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      if (cond){
        this.pos.add(this.vel);
        this.pos.add(this.vel);
        this.pos.add(this.vel);
      }
    } 
  
    edges(){
      if (this.pos.x < -width /2 || this.pos.x > width / 2 || this.pos.y < -height / 2 || this.pos.y > height / 2){
        return true;
      } else {
        return false;
      }
    }
    
    show(){
      noStroke();
      fill(255);
      ellipse(this.pos.x, this.pos.y, this.w);
    }
  }

  
