//setup function
function setup() {
  createCanvas(800,800);
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

