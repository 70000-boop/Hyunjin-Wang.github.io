
// Mouse, Text, Scope
// Mr. Scott
// Sept 15, 2026

// Global Variables
let x = 100;  let y = 100;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220); 
  textSize(40);    

  //mouse-related system variables (managed by library)
  
  let mouseInfo = mouseIsPressed + " "
                  + mouseButton.left + " "
                  + mouseButton.center + " "
                  + mouseButton.right;
  text(mouseInfo, mouseX, mouseY);
  
  drawSquare();
}

function drawSquare(){
  //draw our character (a square) on screen
  square(x,y,50);
}

function keyPressed(){
  //this function calls automatically
  // - for single press captures
  print(key + " " + keycode);

  // for interest's sake → 
  // [ALT] - 2 to 4 digit number
  // – →←↓↑ unicode
}