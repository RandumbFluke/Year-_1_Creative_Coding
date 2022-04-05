let song;
let angle = 0;
let amp;
let volhistory = [];

function preload(){
  song = loadSound("Cartoon - Why We Lose.mp3");
}

function setup() {
  createCanvas(800,800);
  getAudioContext().suspend();
  song.play();
  song.setVolume(0.3);

  amp = new p5.Amplitude();
}


function draw() {
  //Background
  background("#8A2BE2");

  //Settings
  angleMode(DEGREES);

  push();
  let vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  
  translate(width/2,height/2);

  beginShape();
  for (let i = 0; i < 360; i++){
    let r = map(volhistory[i], 0, 1, 125, 1000);
    let x = r * cos(i);
    let y = r * sin(i)

    //let y = map(volhistory[i], 0, 1, height/2, 0);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360){
    volhistory.splice(0,1);
  }
  pop();

  
  //Vinyl Track
  push();
  //Rotation
  translate(400,400);
  rotate(angle);

  //Main circle
  fill(20);
  strokeWeight(1);
  ellipse(0,0,250);
  //Rings
  strokeWeight(2);
  stroke("#808080");
  ellipse(0,0,225);
  ellipse(0,0,175);
  //Outline around middle
  strokeWeight(0);
  fill(0);
  ellipse(0,0,125);
  //Middle of Vinyl
  fill(255,165,0);
  ellipse(0,0,100);

  //Design on track
  fill(255,255,0);
  ellipse(0,0,60);
  fill(0);
  ellipse(10,-10,10);
  ellipse(-10,-10,10);
  fill(255);
  ellipse(10,-10,7);
  ellipse(-10,-10,7);
  fill(0);
  ellipse(10,-10,3);
  ellipse(-10,-10,3);
  fill(255);
  strokeWeight(2);
  stroke(0);
  ellipse(0,10,15);
  angle = angle - 1;
  pop();
}

function mousePressed() {
  userStartAudio();
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}