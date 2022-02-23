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
    switch(level){
        case -1:
            textSize(120);
            fill(255,0,0);
            textAlign(CENTER,CENTER);
            text("GAME OVER! \n Press Enter to Start", width/2, height/2);
        break;

        case 0:
            textSize(100);
            fill("#0f82af");
            textAlign(CENTER,CENTER);
            text("Press Enter to Start", width/2, height/2);
        break

        case 1:
            runGame(1);
        break;

        case 2:
            runGame(1);
        break;

        case 3:
            runGame(1);
        break;
    }
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
    if (keyCode === ENTER){
        level = 1;
        health = 10;
        pipes = [];
        timer = 0;
        console.log("START");
    }

    if (keyCode === 32){
        bird.up();
        console.log("SPACE");
    }
}

