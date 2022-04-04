let song;

function preload(){
  song = loadSound("Tropic Love.mp3");
}

//setup function
function setup() {
  createCanvas(800,800);
  song.play();
  song.setVolume(1);
}

//Draw function
function draw() {
  //Text
  background("#87CEFA");
  textSize(50);
  text('PRESS KEYS - 1, 2, 3',150,400);

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
  }
}

