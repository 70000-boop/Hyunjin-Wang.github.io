// Terrain Starter
// Hyunjin Wang
// 10/2/2026


let rectangle;
let hTime = 0; let hSpeed = 0.05;
let hStart = hTime; let rectWidth = 20;
let highest = 0; let dedicate = 0;
let h = 0;
let totalHeight = 0;
let sum; let averageH; 

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop(); //TEMPORARY
  // keep until planning feature
  // noLoop cases loop() to only
  // run one time
}

function keyPressed() {
  if (key === "ArrowRight") {
    rectWidth++;
    // What happens generateTerrain()
    //
    background(220);
    generateTerrain();
    drawFlag(current, height - highest);
  }
  if (key === "ArrowLeft") {
    rectWidth--;
    if (rectWidth < 1) {
      rectWidth = 1;
    }
    // What happens generateTerrain()
    //
    background(220);
    generateTerrain();
    drawFlag(current, height - highest);
    planning(windowWidth/2, averageH);
  }
}



function generateTerrain() {
  // using many skinny
  // rectangles, generate
  // random terrain
  highest = 0;
  sum = 0;
  for (let x = 0; x < width; x += rectWidth) {
    //first, generate a [random] hegiht
    h = noise(hTime);
    // BUT, change This to use noise()....
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




function drawFlag(x, y) {
  rect(x, y - 40, 5, 40);
  triangle(x, y - 40, x, y - 80, x + 40, y - 40);
}

function planning(x,y){
  fill(255,0,0);
  rect(x,y, 999999,15);

  fill(255);
}

function draw() {
  background(220);
  hTime = hStart;
  hStart += hSpeed;
  generateTerrain();
  drawFlag(dedicate, height - highest);
  planning(0, averageH);
  
}
