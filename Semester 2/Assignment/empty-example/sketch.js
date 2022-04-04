let song;


//setup function
function setup() {
  createCanvas(800,800);
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

