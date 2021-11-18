      //Continious circles - move with mouse
//function setup() {
  //createCanvas(480,480);
  //fill(0,102);
  //noStroke();
//}

//function draw() {
  //ellipse(mouseX,mouseY,9,9);
//}

        //line drawing - scales with motion
//function setup(){
  //createCanvas(480,480);
  //strokeWeight(4);
  //stroke(0,102);
//}

//function draw(){
  //line(mouseX,mouseY,pmouseX,pmouseY);
  //let weight = dist(mouseX,mouseY,pmouseX,pmouseY);
  //strokeWeight(weight);
//}


        //Drawing with easing 
let x = 0;
let y = 0;
let easing = 0.01;



function setup(){
  createCanvas(480,480);
}

function draw(){
  let targetX = mouseX;
  let targetY = mouseY
  x += (targetX - x) * easing;
  y += (targetY - y) * easing;
  ellipse(x, y, 12, 12);
  console.log(targetX + " : " + x);
  console.log(targetY + " : " + y);
}


       //conditionals
//function setup(){
  //createCanvas(480,480);
  //strokeWeight(30);
  //background(204);
//}

//function draw(){
  //stroke(102);
  //line(40,0,70,height);

  //if (mouseIsPressed == true){
    //stroke(0);
    //console.log("Mouse is pressed");
  //}
  //else if (keyIsPressed == true){
    //stroke (172);
    //console.log("Key is pressed");
  //}
  //else{
    //stroke(255);
    //console.log("Neither mouse of keys are pressed");
  //}

  //line(0,70,width,50);
//}


//Final task

//let x;
//let BGcolour = 0;

//function setup(){
  //createCanvas(480,480);
  //x = width/2;
//}

//function draw(){
     //Background change colour on mouse click
  //if (mouseIsPressed){
    //background(23,45,72);
  //}
  //else {
    //background(212,156,17);
  //}
  //background (BGcolour);
  //fill(36,72,201);
  //line(x,0,x,height);


  
  //if (mouseX > x){
    //x = x + 1;
    //console.log("Mouse is right of the line");
  //}
  //else if (mouseX < x){
    //x = x - 1;
    //console.log("Mouse is left of the line");
  //}

  //if (mouseX == x){
    //console.log ("Mouse is on the line");
  //}

//}

//function mouseMoved(){
  //BGcolour = BGcolour + 1;
  //if (BGcolour > 255){
  //BGcolour = mouseX;
//}