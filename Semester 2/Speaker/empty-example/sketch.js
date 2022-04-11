let song;
let amp;
let fft;

function preload(){
  song = loadSound("Maniac.mp3");
}

function setup() {
  getAudioContext().suspend();
  song.play();
  song.setVolume(0.25);
  amp = new p5.Amplitude();
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);

  rotateX(180); //Angle of viewing
  rotateY(60);
  noFill();
  stroke(255);

  for (let i = 0; i < 20; i++) { //Size

    //Colours
    let r = map(sin(frameCount / 2), -1, 1, 100, 200);
    let g = map(i, 0, 20, 100, 200);
    let b = map(cos(frameCount), -1, 1, 200, 100);

    stroke(r, g, b);

    //Shape
    beginShape();
    for (let j = 0; j < 365; j += 10) { //Circle
      let rad = i * 8; // Zoom
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * 2 + i * 10) * 58; //How high it goes

      vertex(x, y, z);
    }
    endShape();
  }
}

function mousePressed() {
  userStartAudio();
  if (song.isPlaying()) {
    song.pause();
    //noLoop();
  } else {
    song.play();
    //loop();
  }
}