let fft;
let mic;
let myCapture; // camera
let myVida;    // VIDA

 function setup(){
  let cnv = createCanvas(1000, 1000);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();

  //Task 3
  myVida = new Vida(this); // create the vida object
  myVida.progressiveBackgroundFlag = true;
  myVida.imageFilterFeedback = 0.92;
  myVida.imageFilterThreshold = 0.15;
  frameRate(30); // set framerate

  //Task 2
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw(){
  background(0,150);
  fill(255);
  noStroke();
  text('tap to start', width/2, 20);

  myVida.update(myCapture);
  image(myVida.thresholdImage, 0, 0);
  let whiteCount = 0;
  let mappedMovement = map(whiteCount, 768, 1400, 0, width);

  //micLevel = mic.getLevel();
  //let y = height - micLevel * height;
  //ellipse(width/2, y, 10, 10);

  //let micLevel = mic.getLevel();
  //let mappedMicLevel = map(micLevel, 0, 0.1, 0, 200);

  let spectrum = fft.analyze();
  let treble = fft.getEnergy("treble");
  let mid = fft.getEnergy("mid");
  let bass = fft.getEnergy("bass");
  let mappedTreble = map(treble, 0,50,0,200);
  let mappedMid = map(mid, 0,255,-100,100);
  let mappedBass = map (bass, 0,255,-200,0);

  let scaleTreble = map(treble,0,50,0.8,1.2);
  let scaleMid = map(mid,0,255,-0.9,0.9);
  let scaleBass = map(bass, 0, 255, -1,1);

  translate(width/2, height/2);

  let noOfPoints = 12;

  for (let i = 0; i < noOfPoints; i++) {
    rotate(TWO_PI / noOfPoints);

    //strokeWeight(4);
    //stroke(255);
    //point(mappedMicLevel, height/4);

    push();
      strokeWeight(6);
      stroke(255-treble,0,0);
      scale(scaleTreble);
      rotate(-frameCount * scaleTreble/100);
      point(mappedTreble, height/4);
    pop();

    push();
      strokeWeight(4);
      stroke(0,0,255-mid);
      scale(scaleMid);
      rotate(frameCount * scaleMid/100);
      point(mappedMid, height/4);
      strokeWeight(2);
      line(mappedMovement, height/4, mappedMovement, height);
    pop();

    push();
      strokeWeight(6);
      stroke(255-bass);
      scale(scaleBass);
      rotate(-frameCount * scaleBass/100);
      point(mappedBass, height/4);
    pop();
  }
}