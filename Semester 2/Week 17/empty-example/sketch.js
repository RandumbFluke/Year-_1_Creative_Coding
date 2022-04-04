let song;
let osc;
let playing = false;

function preload(){
  song = loadSound("Tropic Love.mp3");
}

function setup() {
  getAudioContext().suspend();
  createCanvas(200,200);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(440);
  osc.start();
  background(0);
  fill(255);
  textAlign(CENTER);
  text("click to play/pause", width/2, height/2);
  song.loop();
  //noLoop();
}

function mousePressed() {
  userStartAudio();
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) { //check if we're in the canvas
    if (!playing) {
      osc.amp(0.5, 0.5);
      playing = true;
    } else {
      osc.amp(0, 0.5);
      playing = false;
    }
  }
}

function draw() {
  // put drawing code here
}