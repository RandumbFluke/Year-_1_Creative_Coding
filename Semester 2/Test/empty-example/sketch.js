let song;

function preload(){
  song = loadSound("Tropic Love.mp3");
}

function setup() {
  getAudioContext().suspend();
  createCanvas(200,200);
  fill(255);
  textAlign(CENTER);
  text("click to play/pause", width/2, height/2);
  song.play();
  noLoop();
}

function draw() {
  //
}

function mouseClicked(){
  userStartAudio();
  if (song.isPlaying()){
    song.pause();
  } else {
    song.play();
  }
}