let song;
let amp;

function preload(){
  song = loadSound("Tropic Love.mp3");
}

function setup() {
  createCanvas(800,800);
  getAudioContext().suspend();
  song.play();
  song.setVolume(0.25);
  amp = new p5.Amplitude();
  noLoop();
}


function draw() {
  background("#FF69B4");
  fill(255);
  textSize(20);
  text("click to play/pause", 312, 100);
  textSize(30);
  text("Tropic Love", 315, 50);  

  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.25, 100, 200);
  let diam2 = map(vol, 0, 0.25, 80, 180);
  let diam3 = map(vol, 0, 0.25, 70, 150);


  //Speaker
  push();
  //Outside
  fill(20);
  ellipse(400,400,350);
  stroke(0);
  strokeWeight(1);
  //Inner ring
  fill(50);
  ellipse(400,400,300);
  //Screws
  fill(200);
  ellipse(300,303,12);
  ellipse(500,303,12);
  ellipse(300,498,12);
  ellipse(500,498,12);
  pop();
  

  push();
  fill(70);
  ellipse(400,400,260);
  fill(50);
  ellipse(400,400,diam, diam);
  fill(40);
  ellipse(400,400,diam2, diam2);
  fill(80);
  ellipse(400,400,diam3, diam3);
  pop();
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