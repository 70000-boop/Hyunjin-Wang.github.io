// Mouse, Text, Scope
// Hyunjin Wang
// 9/15/2026

// Global Variables
let x = 100;  let y = 100;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(40);
  
  // mouse-related system variables (managed )
  let mouseinfo = mouseIsPressed + ""
  + mouseButton.left + ""
  + mouseButton.center + ""
  + mouseButton.right;
  text(mouseinfo, mouseX, mouseY);
  // text("HI", mouseX, mouseY);
}

function drawSquare (){
  //draw our character (a square) on screen
  square(x,y,50);
  

}

function keyPressed(){
  //this function calls automatically
  print(key + "" + keyCode); 
  
  // for iterest's sake 
  // [ALT] - 2 to 4 digit number
  // e.g. 
}