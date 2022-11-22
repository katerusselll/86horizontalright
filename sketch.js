let mic;

let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 34;
  let EllipseY = height / 23;
  let EllipseSize = vol;

  //vertical
  drawEllipse(EllipseX * 23, EllipseY * 15, EllipseSize);
  drawEllipse(EllipseX * 26, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 28, EllipseY * 17, EllipseSize);
  drawEllipse(EllipseX * 29, EllipseY * 21, EllipseSize);
  drawEllipse(EllipseX * 30, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 32, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 33, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 33, EllipseY * 17, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 4, vol * 50);
    console.log(vol);
    //look up lerp for smoothness
  }

  function drawOtherEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 10, vol * 10);
    console.log(vol);
  }
  //Horizontal
  drawHorizontalEllipse(EllipseX * 23, EllipseY * 15, EllipseSize);
  drawHorizontalEllipse(EllipseX * 26, EllipseY * 6, EllipseSize);
  drawHorizontalEllipse(EllipseX * 28, EllipseY * 17, EllipseSize);
  drawHorizontalEllipse(EllipseX * 29, EllipseY * 21, EllipseSize);
  drawHorizontalEllipse(EllipseX * 30, EllipseY * 3, EllipseSize);
  drawHorizontalEllipse(EllipseX * 32, EllipseY * 10, EllipseSize);
  drawHorizontalEllipse(EllipseX * 33, EllipseY * 5, EllipseSize);
  drawHorizontalEllipse(EllipseX * 33, EllipseY * 17, EllipseSize);

  function drawHorizontalEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 50, vol * 4);
    console.log(vol);
    //look up lerp for smoothness
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  started = true;
  userStartAudio();
}
