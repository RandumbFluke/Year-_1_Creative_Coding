function setup() {
  createCanvas(1400,600); //created a canvas with 1800px on the x-axis and 600px on the y-axis
  angleMode(DEGREES);
}

//Sun
function drawshape_sun(){ //New function to store all the relevant information for the sun in
  fill("#FF4500"); //fill the colour of the ellipse, colour is OrangeRed
  ellipse(0,300,400); //ellipse is half on the screen as the middle point is directly on the x axis, it is is also in the middle point of the y-axis with a width of 400px - only 200px is showing
}

//Mercury
function drawshape_mercury(){
  fill("#D2B48C"); //Colour is Tan
  ellipse(250, 300, 50); //250px on the x-axis, 300px on the y-axis, width of 50px - smallest planet
  fill(255);
  line(250,260,250,105);
  textStyle(BOLD);
  textSize(15);
  text("Mercury", 222, 75, 50);
}

//Venus
function drawshape_venus(){
  fill("#DAA520"); //Colour is GoldenRod
  ellipse(330, 300, 70);
  fill(255);
  line(330,350,330,475);
  textStyle(BOLD);
  textSize(15);
  text("Venus", 308, 495, 50);
}

//Earth
function drawshape_earth(){
  fill("#1E90FF"); //Colour is DodgerBlue
  ellipse(425, 300, 80);
  fill(255);
  line(425,250,425,105);
  textStyle(BOLD);
  textSize(15);
  text("Earth", 405, 75, 50);
}

//Mars
function drawshape_mars(){
  fill("#E9967A"); //Colour is DarkSalmon
  ellipse(520,300,70);
  fill(255);
  line(520,350,520,475);
  textStyle(BOLD);
  textSize(15);
  text("Mars", 502, 495, 50);
}

//Jupiter
function drawshape_jupiter(){
  fill("#FF7F50"); //Colour is Coral
  ellipse(700,300,250);
  //Red spot on Jupiter
  //fill("#A52A2A"); //Colour is Brown
  //ellipse(750,340,50);
  fill(255);
  line(700,165,700,105);
  textStyle(BOLD);
  textSize(15);
  text("Jupiter", 675, 75, 50);
}

//Saturn
function drawshape_saturn(){
  fill("#DEB887"); //Colour is BurlyWood
  ellipse(950,300,200);
  //Ring
  //fill("FFEBCD"); //Colour is BlanchedAlmond
  fill(255);
  line(950,415,950,475);
  textStyle(BOLD);
  textSize(15);
  text("Saturn", 925, 495, 50);
}

//Uranus
function drawshape_uranus(){
  fill("#7FFFd4"); //Colour is Aquamarine
  ellipse(1125,300,100);
  //Ring
  //fill("FFEBCD"); //Colour is BlanchedAlmond
  //arc(1075,1175,120,120)
  fill(255);
  line(1125,240,1125,105);
  textStyle(BOLD);
  textSize(15);
  text("Uranus", 1100, 75, 50);
}

//Neptune
function drawshape_neptune(){
  fill("#0000FF"); //Colour is Blue
  ellipse(1250,300,100);
  fill(255);
  line(1250,365,1250,475);
  textStyle(BOLD);
  textSize(15);
  text("Neptune", 1220, 495, 50);
}

function draw() {
  background("#191970"); //added the background colour midnightblue
  drawshape_sun();
  drawshape_mercury();
  drawshape_venus();
  drawshape_earth();
  drawshape_mars();
  drawshape_jupiter();
  drawshape_saturn();
  drawshape_uranus();
  drawshape_neptune();
}