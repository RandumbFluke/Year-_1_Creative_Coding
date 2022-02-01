let unit = 25

var stripWidth = 40
var stripColors = ["#e1c943", "#dd4830", "#9e949f", "#080c12"]
var chance = 0.75

function setup(){
  createCanvas(500,500);
  background(0);
  //noLoop();
  //fill(0,0,255); 
}

function draw() {
  background(0);
  for (let x = 25; x < width; x = x + 50){
    for (let y = 25; y < height; y = y + 50){
      fill(random(0,255), random(0,255),random(0,255));

     // ellipse(x,y,50,50);
     // herringBone(x,y,25);
      //newDrawing();

      switch(key){
        case "1": 	
          ellipse(x,y,50,50);
        break;
        case "2": 
          herringBone(x,y,unit);
        break;
        case "3":
          newDrawing();
        break;
          }  
    
      }
    }
  }


  function herringBone(xVal, yVal, unit) {
    stroke(255);
    strokeWeight(1);
  
    line(xVal, yVal, xVal - unit, yVal + unit);
    line(xVal, yVal, xVal + unit, yVal + unit);
    line(xVal, yVal - unit, xVal - unit, yVal);
    line(xVal, yVal - unit, xVal + unit, yVal);
    line(xVal, yVal - unit, xVal, yVal + unit);
    line(xVal + unit, yVal - unit, xVal + unit, yVal + unit);
  }
  
  function newDrawing() {
    background("#f0f2ed")
  
    for (var x = 0; x < width; x += 2 * stripWidth) {
      fill(random(stripColors))
      noStroke()
      rect(x, 0, stripWidth, height)
    }
  
    for (var y = 0; y < height; y += 2 * stripWidth / 3) {
      var h = 2 * stripWidth / 3
  
      fill(random(stripColors))
      noStroke()
      for (x = 0; x < width; x += 2 * stripWidth) {
        if (random() < chance) {
          // Go over
          rect(x, y, 2 * stripWidth, h / 2)
        } else {
          // Go under
          rect(x + stripWidth, y, stripWidth, h / 2)
        }
      }
    }
  }
