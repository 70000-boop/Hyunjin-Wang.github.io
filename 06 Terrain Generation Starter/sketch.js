// Terrain Starter
// Hyunjin Wang
// 10/2/2026

// a list of all the dummy variable 
let rectangle;
let hTime = 0; 
let hSpeed = 0.05;
let hStart = hTime; 
let rectWidth = 20;
let highest = 0; let dedicate = 0;
let h = 0;
let totalHeight = 0;
let sum; let averageH; 

// seting up the window
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

// initialize the width of each rectangle 
// and this function when left key is press the rect width will plus one 
// and when right key is press the rect width will minus one 
// all the draw function will be shown in here too
// for refreshing the function when the width is changed  
function keyPressed() {
  if (key === "ArrowRight") {
    rectWidth++;
    // What happens generateTerrain()
    //
  }
  if (key === "ArrowLeft") {
    rectWidth--;
    if (rectWidth < 1) {
      rectWidth = 1;
    }
  
    // function from draw again
    background(220);
    generateTerrain();
    drawFlag(current, height - highest);
    planning(windowWidth/2, averageH);
  }
}


// this generate reasonable height and slope of terrain while using noise function
// 
function generateTerrain() {
  // to reset the local variable from global variable
  highest = 0;
  sum = 0;
  // a reapeted loop to generate a long slop of terrain
  for (let x = 0; x < width; x += rectWidth) {
    //first, generate a [random] hegiht
    h = noise(hTime);
    h = map(h, 0, 1, 0, height);
    if (h > highest) {
      highest = h;
      dedicate = x;
    }
    
    
    // draw the rectangle
    hTime += hSpeed;
    rectangle = rect(x, height, rectWidth, -h);
    totalHeight = height/h;
    
    sum += h;
  }
  let n = width / rectWidth;
  averageH = sum / n;
}



// draw where flag will be base on what x and y variable
function drawFlag(x, y) {
  rect(x, y - 40, 5, 40);
  triangle(x, y - 40, x, y - 80, x + 40, y - 40);
}


// this is to plan the averaging mark for each frame of the terrain
function planning(x,y){
  fill(255,0,0);
  rect(x,y, 999999,15);

  fill(255);
}

// draw overall main goal of hte structure

function draw() {
  background(220);
  hTime = hStart;
  hStart += hSpeed;
  generateTerrain();
  drawFlag(dedicate, height - highest);
  planning(0, averageH);
  
}
