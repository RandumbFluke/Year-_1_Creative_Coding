let song;
let fft;
let particles = [];

function preload(){
  song = loadSound("Tropic Love.mp3");
}

function setup() {
  getAudioContext().suspend();
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
  fill(255);
  textAlign(CENTER);
  text("click to play/pause", width/2, height/2);
  song.play();
  song.setVolume(0.25);
  noLoop();

  fft = new p5.FFT();
}

function draw() {
  noFill();
  stroke(255);

  translate(width/2, height/2);
  let wave = fft.waveform();

  for (let t = -1; t <= 1; t+=2){
    beginShape();
    for(let i = 0; i <= 100; i += 0.5){
      let index = floor(map(i, 0, 100, 0, wave.length -1));
  
      let r = map(wave[index], -1, 1, 150, 350);
  
      let x = r * sin(i) * t;
      let y = r * cos(i);
      vertex(x,y);
    }
    endShape();
  }


  let p = new Particle();
  particles.push(p);

  for (let i = 0; i < particles.length; i--) {
    if (!particles[i].edges()) {
      particles[i].update();
      particles[i].show();
    } else{
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  userStartAudio();
  if (song.isPlaying()) {
    song.pause();
    noLoop();
  } else {
    song.play();
    loop();
  }
}

class Particle{
  constructor(){
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0,0);
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001));

    this.w = random(3, 5);

    this.color = [random(200,255),random(200,255),random(200,255)];
  }

  update(){
    this.vel.add(this.acc);
    this.vel.add(this.vel);
  }

  edges(){
    if (this.pos.x < -width / 2 || this.pos.x > width / 2 || this.pos.y < -height / 2 || this.pos.y > height / 2){
      return true;
    } else{
      return false;
    }
  }

  show(){
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4)
  }
}