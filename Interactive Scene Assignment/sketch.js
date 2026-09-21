// Interactive Scene
// Hyunjin Wang
// 9/21/2026
// making a scence that you can interact with mouse or keyboard on a website



async function setup() {
  createCanvas(windowWidth, windowHeight);
}
value = 255
function draw(){
  background(value);
  circle(200,200,300);
  fill("grey")
  stroke("white")
}

function mosueClicked(){
  if (value === 255){
    for(i = 255; i > 0; i--){
      value -=1
    }
  }
  else if (value === 0){
    for(i = 0; i < 255; i++){
      value += 1
    }
  }
}


