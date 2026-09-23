// Interactive Scene
// Hyunjin Wang
// 9/21/2026
// making a scence that you can interact with mouse or keyboard on a website



async function setup() {
  createCanvas(windowWidth, windowHeight);
}
let value = 255; let dir = 0; 


function draw(){
  let color = fill("yellow");
  text('James.W', 1500, 900)
  let a = 500; let b = 750; let c = 1000;
  let d = 600; let e = 700; let f = 800
  background(value);
  fill(color);
  stroke("white");
  circle(200,200,300);
  fill(94, 134, 96);
  rect(0, 600, 999999, 999999);
  
  if(dir === 1){
    value --;
    fill("180, 201, 222");
  
  }
  else if(dir === 2){
    value++;
    if(value > 255) value = 255;
    color = fill("yellow");
  }
  for(let i = 0; i < 11; i++){
    fill(109);
    stroke(255);
    a += 100;
    b += 100;
    c += 100;
    triangle(a, 800, b, 100, c, 800);
  }

  for(let i = 0; i < 11; i++){
    stroke(255);
    fill(153, 144, 121);
    d += 100;
    e += 100;
    f += 100;
    triangle(d, 750, e, 500, f, 750);
  }


 
}

function mousePressed(){
  dir ++; 
  if(dir === 3) dir = 0;

}



