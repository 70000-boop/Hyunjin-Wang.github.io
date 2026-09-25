// Drawing with Single Loops
// Hyunjin Wang
// 9/25/2026


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function Xworm(y, size){
  for(let x = size/2; x < width; x += size){
    circle(x,y,size);
  }
}
function Yworm(x, size){
  for(let y = size/2; y < height; y += size){
    circle(x,y,size);
    y += 40
  }
}

// function gradientBackground(){
//   // create a gradeint to use as background
//   noStroke();
//   let h = 1; // rectangle height

//   // could use FOR or WHILE loop here...
//   let y = 0;
//   while (y < height){
//     let mappedY = map(y,0,height,0,255);

//     fill(mappedY,mouseX/5,255-mappedY); //fill(n) > greyscale
//     rect(0, y, width, h);
//     y += h;
//     //??
//   } 


//   stroke(0);
// }

function draw() {
  circle(mouseX, mouseY, 30)
  background(220);
  Xworm(0, 30);
  Yworm(0, 30);
  Xworm(windowWidth, 30);
  Yworm(windowHeight, 30);
}
