// Mouse, Text, Scope
// Hyunjin Wang
// 9/15/2026

// Global Variables
let x = 100;  let y = 100;
let c = "green";
async function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(220);
  mouseReport();
  drawSquare();
  
  // mouse-related system variables (managed )
  // text("HI", mouseX, mouseY);
}


function mouseReport(){
  let mouseinfo = mouseIsPressed + ""
                   + mouseButton.left + ""
                   + mouseButton.center + ""
                   + mouseButton.right;
  text(mouseinfo, mouseX, mouseY);
  
}
function updateSquare (){
  //movement code here
  //THIS IS THE LAST KEY PRESSED.
  if(keyCode===40 && keyIsPressed){
    y+=2;
  }
  // use keyIsDown() to handle multiple keypresses
  if(KeyIsDown(LEFT_ARROW)){
    x -= 5;
  }
  if(KeyIsDown(RIGHT_ARROW)){
    x += 5;
  }
  if(keyIsDown(UP_ARROW)){
    y -= 5;
  }



  //draw our character (a square) on screen
  Fil(c);
  square(x,y,50);
  

}

function keyPressed(){
  //this function calls automatically
  // - for single press captures
  print(key + "" + keyCode); 
  
  if(key ==="a"){
    c = "red"
  }
  else if(keyCode===32){ //space
    c = "yellow";
  }
  else if(keyCode===40){ //down
    y +=10;
  }
  // for interest's sake 
  // [ALT] - 2 to 4 digit number
  // e.g. 
}