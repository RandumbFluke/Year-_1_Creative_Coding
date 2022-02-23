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
    for (let i = pipes.length-1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)){
            console.log("HIT");
        }

        if (pipes[i].offscreen()){
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % pipeInterval === 0){
        pipes.push(new Pipe());
    }
}

function keyPressed(){
    if (keyCode === 32){
        bird.up();
        console.log("SPACE");
    }
}

