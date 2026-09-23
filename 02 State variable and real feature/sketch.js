// State Variable / Real Time 
// Hyunjin Wang
// 9/23/2026


// Global Variables
let objectType = 0;
// 0 - Circle
// 1 - triangle
// 2 - Starburst

let startTime = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // repeats at target of 60fps
  background(220);
  drawShape(); 
  let elapsed = millis()-startTime;
  if(elapsed > 10){ //2000ms === 2 seconds
    startTime = millis(); //reset timer 
  }
  // delay automatically added here
  // if needed.
}

function keyPressed(){
  // special 'event' function. Gets
  // called whenever we press a button
  // on the keyboard.
  updateState();
}

function updateState(){
  objectType++;
  // add logic to keep variable in
  // range of (0-2)
  if(objectType > 2){
    objectType = 0
  }
  
}

function drawShape() {
  // inspect state variable (objectType)
  // and draw one of three possible
  // shapes on the Canvas.
  //[ALT][SHIFT][F] - auto format
  let x = width / 2; let y = height / 2;
  switch (objectType) {
    case 0:
      circle(x, y, 150);
      break;
    case 1:
      triangle(x-80, y+50, x+80,y+50, x,y-50);
      break;
    case 2:
      // loop var ; condition ; update
      for(let i = 0; i < 30 ; i++){
        let x2 = random(x-80, x+80);
        let y2 = random(y-80, y+80);
        line(x,y,x2,y2); 
      }
  }

}

