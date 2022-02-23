let bird;
let pipes = []
let pipeInterval = 120;
let timer = 0;
let timerInterval = 60;
let level = 0;
let health = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bird = new Bird();
    pipes.push(new Pipe());
    noStroke();
}

function draw() {
    background(220);
    runGame(1);
}

function runGame(intervalScale){
    bird.update();
    bird.show();
}

function keyPressed(){
    if (keyCode === 32){
        bird.up();
        console.log("SPACE");
    }
}

