//Task 1

//let myArr= [];
//let xPos = 0;

//function setup() {
  //createCanvas (1024,400);
  //background(255);
  //for (let i = 0; i <= 256; i++){
    //myArr.push([i]);
    //myArr = shuffler(myArr);
    //myArr.sort();
    //myArr = shuffle(myArr);
    //myArr.reverse();
    //console.log(myArr);
  //}
//}


//function draw() {
  //noStroke();
  //for (let i = 0; i < myArr.length; i++){
    //fill(myArr[i]);
    //rect(xPos, 0, width/256, height);
    //xPos = xPos+(width/256);
  //}
  //noLoop();
//}

//function shuffler(array) {
  //for (let i = array.length - 1; i > 0; i--) {
    //let j = Math.floor(Math.random() * (i + 1));
    //let temp = array[i];
    //array[i] = array[j];
    //array[j] = temp;
  //}
  //return array;
//}

//Task 2


//let x = [];

//function setup(){
  //createCanvas(800,600);
  //noStroke();
  //fill(255,200);
  //for(let i = 0; i < 300; i++){
    //x[i] = random(-1000,200);
  //}
//}


//function draw(){
  //background(0);
  //for(let i = 0; i < 720; i++) {
    //x[i] += 0.5;
    //let y = i * 2;
    //arc(x[i],y,12,12,0.52,5.76);
  //}
//}

//Task 3

//let myArr = [];
//let mySentence = "I like/love creating code, so far.";
//let chopper;
//let likeLove;
//let xPos = [];

//function setup(){
  //createCanvas(800,200);
  //frameRate(2);
  //background(255);
  //chopper = mySentence.split("");
  //chopper = chopper.join("");
  //chopper = chopper.reverse();
  //likeLove = chopper[1].split("/");
  //chopper[1] = likeLove[1];
  //console.log(chopper);
//}

//function draw(){
  //text(mySentence,50,100);
  //background(255);
  //for (let i = 0; i < chopper.length; i++){
    //text(chopper[i], xPos, random(10,height));
    //xPos = xPos+(width/100);
    //if (xPos > width) {
      //xPos = 0;
    //}
  //}
//}

//Task 4

let num = 120;

let x = [];
let y = [];

function setup(){
  createCanvas(800,600);
  noStroke();
  fill(255,200);
  for(let i = 0; i < 300; i++){
    x[i] = 0;
    y[i] = 0;
  }
}

function draw() {
  background(0);
  for(let i = num-1; i > 0; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }

  x[0] = mouseX;
  y[0] = mouseY;

  for(let i = 0; i < num; i++){
    fill(i * 0.94);
    ellipse(x[i],y[i],30,30);
  }
}