function setup() {
  createCanvas(1400,600); //created a canvas with 1800px on the x-axis and 600px on the y-axis
  angleMode(DEGREES);
}

//Sun
function drawshape_sun(){ //New function to store all information related to 'sun'
  push(); //Save
  fill("#FF4500"); //fill the colour of the ellipse, colour is OrangeRed
  strokeWeight(1); //Small stroke outline
  stroke(0); //Stroke is black
  ellipse(0,300,400); //ellipse is half on the screen as the middle point is directly on the x axis, it is is also in the middle point of the y-axis with a width of 400px - only 200px is showing
  pop(); //Restore
}

//Mercury
function drawshape_mercury(){ //New function to store all information related to 'mercury'
  push(); //Save
  fill("#D2B48C"); //Colour is Tan
  stroke(0); //Black stroke outline
  strokeWeight(1); //Small stroke outline
  ellipse(250, 300, 50); //250px on the x-axis, 300px on the y-axis, width of 50px 
  stroke(255); //Stroke colour is white
  line(250,260,250,105); //Specified the position of x1 - x2 and y1 - y2
  fill(255); //Colour is White
  strokeWeight(0); //Text has no stroke outline
  textStyle(BOLD); //Changed the text to appear in bold text form
  textSize(15); //Changed the text size to 15px
  text("Mercury", 222, 75,50); //Written text in a specific posiition 
  pop(); //Restore
}

//Venus
function drawshape_venus(){ //New function to store all information related to 'venus'
  push();//Save
  fill("#DAA520"); //Colour is GoldenRod
  strokeWeight(1); //Small stroke outline
  stroke(0); //Stroke is black
  ellipse(330, 300, 70); //330px on the x-axis, 300px on the y-axis, width of 70px 
  fill(255); //Colour is White
  stroke(255); //Stroke is White
  line(330,350,330,475); //Specified the position of x1 - x2 and y1 - y2
  strokeWeight(0); //Text has no stroke outline
  textStyle(BOLD); //Changed the text to appear in bold text form
  textSize(15); //Changed the text size to 15px
  text("Venus", 308, 495, 50); //Written text in a specific posiition 
  pop();//Restore
}

//Earth
function drawshape_earth(){ //New function to store all information related to 'earth'
  push();
  fill("#1E90FF"); //Colour is DodgerBlue
  strokeWeight(1); //Small stroke outline
  stroke(0); //Stroke is black
  ellipse(425, 300, 80); //425px on the x-axis, 300px on the y-axis, width of 80px 
  fill(255); //Colour is White
  stroke(255); //Stroke is White
  line(425,250,425,105); //Specified the position of x1 - x2 and y1 - y2
  strokeWeight(0); //Text has no stroke outline
  textStyle(BOLD); //Changed the text to appear in bold text form
  textSize(15); //Changed the text size to 15px
  text("Earth", 405, 75, 50); //Written text in a specific posiition 
  pop();//Restore
}

//Mars
function drawshape_mars(){ //New function to store all information related to 'mars'
  push();//Save
  fill("#E9967A"); //Colour is DarkSalmon
  strokeWeight(1); //Small stroke outline
  stroke(0); //Stroke is black
  ellipse(520,300,70); //520px on the x-axis, 300px on the y-axis, width of 70px 
  fill(255); //Colour is White
  stroke(255); //Stroke is White
  line(520,350,520,475); //Specified the position of x1 - x2 and y1 - y2
  strokeWeight(0); //Text has no stroke outline
  textStyle(BOLD); //Changed the text to appear in bold text form
  textSize(15); //Changed the text size to 15px
  text("Mars", 502, 495, 50); //Written text in a specific posiition
  pop();//Restore
}

//Jupiter
function drawshape_jupiter(){ //New function to store all information related to 'jupiter'
  push();//Save
  fill("#FF7F50"); //Colour is Coral
  strokeWeight(1); //Small stroke outline
  stroke(0); //Stroke is black
  ellipse(700,300,250); //700px on the x-axis, 300px on the y-axis, width of 250px 
  //Red spot on Jupiter
  //fill("#A52A2A"); //Colour is Brown
  //ellipse(750,340,50);
  fill(255); //Colour is White
  stroke(255); //Stroke is White 
  line(700,165,700,105); //Specified the position of x1 - x2 and y1 - y2
  strokeWeight(0); //Text has no stroke outline
  textStyle(BOLD); //Changed the text to appear in bold text form
  textSize(15); //Changed the text size to 15px
  text("Jupiter", 675, 75, 50); //Written text in a specific posiition
  pop();//Restore
}

//Saturn
function drawshape_saturn(){ //New function to store all information related to 'saturn'
  push();//Save
  fill("#DEB887"); //Colour is BurlyWood
  strokeWeight(1); //Small stroke outline
  stroke(0); //Stroke is black
  ellipse(950,300,200); //950px on the x-axis, 300px on the y-axis, width of 200px 
  //Ring
  //fill("FFEBCD"); //Colour is BlanchedAlmond
  fill(255); //Colour is White
  stroke(255); //Stroke is White 
  line(950,415,950,475); //Specified the position of x1 - x2 and y1 - y2
  strokeWeight(0); //Text has no stroke outline
  textStyle(BOLD); //Changed the text to appear in bold text form
  textSize(15); //Changed the text size to 15px
  text("Saturn", 925, 495, 50); //Written text in a specific posiition
  pop();//Restore
}

//Uranus
function drawshape_uranus(){ //New function to store all information related to 'uranus'
  push();//Save
  fill("#7FFFd4"); //Colour is Aquamarine
  strokeWeight(1); //Small stroke outline
  stroke(0); //Stroke is black
  ellipse(1125,300,100); //1125px on the x-axis, 300px on the y-axis, width of 100px 
  //Ring
  //fill("FFEBCD"); //Colour is BlanchedAlmond
  //arc(1075,1175,120,120)
  fill(255); //Colour is White
  stroke(255); //Stroke is White 
  line(1125,240,1125,105); //Specified the position of x1 - x2 and y1 - y2
  strokeWeight(0); //No stroke outline
  textStyle(BOLD); //Changed the text to appear in bold text form
  textSize(15); //Changed the text size to 15px
  text("Uranus", 1100, 75, 50); //Written text in a specific posiition
  pop();//Restore
}

//Neptune
function drawshape_neptune(){ //New function to store all information related to 'neptune'
  push();//Save
  fill("#0000FF"); //Colour is Blue
  strokeWeight(1); //Small stroke outline
  stroke(0); //Stroke is black
  ellipse(1250,300,100); //1250px on the x-axis, 300px on the y-axis, width of 100px 
  fill(255); //Colour is White
  stroke(255); //Stroke is White 
  line(1250,365,1250,475); //Specified the position of x1 - x2 and y1 - y2
  strokeWeight(0); //No stroke outline
  textStyle(BOLD); //Changed the text to appear in bold text form
  textSize(15); //Changed the text size to 15px
  text("Neptune", 1220, 495, 50); //Written text in a specific posiition
  pop();//Restore
}


function draw() {
  background("#191970"); //added the background colour midnightblue
  drawshape_sun(); //Calling the function within 'draw' so it can be created on the screen
  drawshape_mercury(); //Calling the function within 'draw' so it can be created on the screen
  drawshape_venus(); //Calling the function within 'draw' so it can be created on the screen
  drawshape_earth(); //Calling the function within 'draw' so it can be created on the screen
  drawshape_mars(); //Calling the function within 'draw' so it can be created on the screen
  drawshape_jupiter(); //Calling the function within 'draw' so it can be created on the screen
  drawshape_saturn(); //Calling the function within 'draw' so it can be created on the screen
  drawshape_uranus(); //Calling the function within 'draw' so it can be created on the screen
  drawshape_neptune(); //Calling the function within 'draw' so it can be created on the screen
} 
