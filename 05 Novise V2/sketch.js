//Noise Verison 2.0
//James.Wang
// 10/1/2026

// global variables
let xTime = 0; let xSpeed = 0.005; 
let xStart = xTime;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  xTime = xStart;
  xStart += xSpeed;
  tower();
}


function tower(){
  // create a tower with circles of different
  // Y position. X position will be
  // reandomly selected

  for(let y = 0; y < height; y += 1){
    let x = noise(xTime); //0-1
    x = map(x, 0, 1, 0, width);
    xTime += xSpeed; 
    circle(x,y,20);
  }
}