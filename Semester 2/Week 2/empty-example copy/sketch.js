//Task 3


let myCapture; // camera
let myVida;    // VIDA

function setup() {
  createCanvas(320, 240);
  myCapture = createCapture(VIDEO);
  myCapture.size(320, 240);
  myCapture.hide();
    
  myVida = new Vida(this); // create the vida object
  myVida.progressiveBackgroundFlag = true; // Turn on the progressive background mode.
  
  // The value of the feedback for the procedure that calculates the background
  // image in progressive mode. The value should be in the range from 0.0 to 1.0
  // (float). Typical values of this variable are in the range between ~0.9 and
  // ~0.98.
  myVida.imageFilterFeedback = 0.92;
    
  // The value of the threshold for the procedure that calculates the threshold
  // image. The value should be in the range from 0.0 to 1.0 (float).
  myVida.imageFilterThreshold = 0.15;

  frameRate(30); // set framerate
}

function draw() {
  background(120);
  myVida.update(myCapture);
  image(myVida.thresholdImage, 0, 0);

  // count the number of pixels that change on each frame
  let whiteCount = 0;
  for (let i = 0; i < myVida.thresholdImage.pixels.length; i++){
    if(myVida.thresholdImage.pixels[i] == 255){
      whiteCount = whiteCount+1;
    }
  }
    
  // console.log(whiteCount);
  let mappedMovement = map(whiteCount, 768, 1400, 0, width);
  // console.log(mappedMovement);
  ellipse(mappedMovement, height/2, 10);

}