// Interactive Scene
// Hyunjin Wang
// 9/21/2026
// making a scence that you can interact with mouse or keyboard on a website



async function setup() {
  createCanvas(windowWidth, windowHeight);
}
let value = 255; let dir = 0;  


function draw(){

  let a = 500; let b = 750; let c = 1000;
  background(value);
  fill("yellow");
  stroke("white");
  circle(200,200,300);
  fill(94, 134, 96);
  rect(0, 600, 999999, 999999);
  fill(109);
  noStroke();
  triangle(a, 800, b, 100, c, 800);

  if(dir === 1){
    value --;
  text('James.W', 1500, 900)
  }
  else if(dir === 2){
    value++;
    if(value > 255) value = 255;
  }
  for(let i = 0; i < 10; i++){
    a += 50;
    b += 50;
    c += 50;
    triangle(a, 800, b, 100, c, 800);
  
  }

 
}

function mousePressed(){
  dir ++; 
  if(dir === 3) dir = 0;
}



