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
            runGame(0.7);
        break;

        case 3:
            runGame(0.5);
        break;
    }
}

function runGame(intervalScale){
    testLevel()

    for (let i = pipes.length-1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)){
            console.log("HIT");
            health -= 0.1;
        }

        if (pipes[i].offscreen()){
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % (pipeInterval*intervalScale) == 0){
        pipes.push(new Pipe());
    }

    if (frameCount % timerInterval == 0){
        timer++;
        console.log(timer);
    }

    textSize(30);
        fill("0f82af");
        textAlign(LEFT,CENTER);
        text("Health: " + nf(health, 1, 2), 10, 30);
        text("Level: " + level, 200, 30);
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

function testLevel(){
    if(health <= 0){
        level = -1;
    } else{
        if (timer <=20){
            level = 1;
        }else if (timer > 20 && timer <= 40){
            level = 2;
        }else if (timer > 40){
            level = 3;
        }
    }
}
