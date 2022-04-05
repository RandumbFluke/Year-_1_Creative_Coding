let song1, song2, song3;
let currentSong;
let hasSongChanged = false;
let lastKey;

function preload(){
  song1 = loadSound("../Music/Tropic Love.mp3");
  song2 = loadSound("../Music/Cartoon - Why We Lose.mp3");
  song3 = loadSound("../Music/Cartoon - On and On.mp3");
}

function setup() {
  createCanvas(800,800);
  getAudioContext().suspend();
  currentSong = song1;
  //console.log(currentSong, song1);
  currentSong.play();
  currentSong.setVolume(0.25);
  //noLoop();
}

//Draw function
function draw() {
  //Text
  push();
  background(0);
  textAlign(CENTER);
  fill(255);
  text('PRESS KEYS - 1, 2, 3, 4',width/2,height/2);
  pop();


  //Switch key
  switch(key){
    case "1":
      drawshape_speaker();
    break;

    case "2":
      drawshape_vinyl();
    break;

    case "3":
      drawshape_triplet();
    break;

    case "4":
      drawshape_particle_field();
    break;
  }
  
 
}

function keyPressed() {
  userStartAudio();
  hasSongChanged = true;//Switch key
  switch(key){
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

    case "3":
      currentSong.stop();
      currentSong = song3;
      currentSong.play();
    break;

    case "4":
      
    break;
    default:
      currentSong.stop();
      break;
  }

}

