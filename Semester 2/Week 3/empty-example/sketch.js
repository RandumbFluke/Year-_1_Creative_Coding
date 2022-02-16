let x,y;
let radius = 100;
let r,g,b;
let timer = 10;
let interval = 30;
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
  background(220);

  if(!gameOver) {
    noStroke();
    fill(r, g, b);
    ellipse(x, y, radius*2, radius*2);
    textSize(24);
    textAlign(LEFT, CENTER);
    text("Score: " + score, 10, 30);
    text("Countdown: " + timer, 120, 30);

    if (frameCount % interval == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
      newCircle();
    }
    if (timer === 0) {
      
      gameOver = true;
    }
  } else {
    textSize(100);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width/2, height/2);
    
  }
}

function mousePressed() {
  
  if(!gameOver) {
      let d = dist(mouseX, mouseY, x, y);
       if (d < radius) {
          newCircle();
          score++;
        }
    } else {
      let d = dist(mouseX, mouseY, windowWidth/2,  windowHeight/2);
      if (d < radius*2) {
        gameOver = false;
        timer = 10;
        score = 0;
      }
    }
}


function newCircle(){
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}