let x,y;
let radius = 100;
let r,g,b;
let timer = 10;
let interval = 60;
let score = 0;
let gameOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0);
  noStroke();
  fill(r,g,b);
  ellipse(x, y, radius*2, radius*2);
    if (frameCount % interval == 0 && timer > 0){
      timer --;
      newCircle();
    }
  textSize(24);
  textAlign(LEFT, CENTER);
  text("Score: " + score, 10,30);
  text("Countdown: " + timer, 120,30);
}

function mousePressed(){
  let d = dist(mouseX, mouseY, x, y);
    if(d < radius){
      newCircle();
      score++;
      console.log("Score!");
    }
}

function newCircle(){
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}