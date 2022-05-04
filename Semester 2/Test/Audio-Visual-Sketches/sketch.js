//Variables
let song;
let amp;
let button;

let history = [];

function toggleSong(){
  if (song.isPlaying()){
    song.pause();
   } else{
    song.play();
    }
  }



function preload() {
  song = loadSound("../Music/Omen.mp3");
}


function setup() {
  createCanvas(800, 800); 

  song.setVolume(0.25);
  
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}


function draw() {
  background(0);
  let vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  beginShape();
  for (let i = 0; i < volhistory.length; i++){
    let y = map(volhistory[i], 0, 1, height, 0);
    vertext(i,y);
  }
  endShape();

  if (volhistory.length > width) {
    volhistory.splice(0,1);
  }
}