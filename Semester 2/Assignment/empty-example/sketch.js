let song1, song2;
let currentSong;
let hasSongChanged = false;
let lastKey;
let amp;
let amp2;
let fft;
let particles = [];
let volhistory = [];

function preload() {
  song1 = loadSound("../Music/Omen.mp3");
  song2 = loadSound("../Music/Cartoon - On and On.mp3");
}

function setup() {
  createCanvas(800, 800);
  getAudioContext().suspend();
  currentSong = song1;
  song1.setVolume(0.25);
  song2.setVolume(0.25);

  amp = new p5.Amplitude();

  fft = new p5.FFT();
}

//Draw function
function draw() {
  //Text
  push();
  background(0);
  textAlign(CENTER);
  fill(255);
  text('PRESS KEYS - 1 or 2', width / 2, height / 2);
  pop();


  //Switch key
  switch (key) {
    case "1":
      drawshape_speaker();
      break;

    case "2":
      drawshape_vinyl();
      break;
  }


}

function keyPressed() {
  userStartAudio();
  hasSongChanged = true;
  switch (key) {
    case "1":
      currentSong.stop();
      currentSong = song1;
      currentSong.play();

      break;

    case "2":
      currentSong.stop();
      currentSong = song2;
      currentSong.play();

      break;
    default:
      currentSong.stop();
      break;
  }

}

