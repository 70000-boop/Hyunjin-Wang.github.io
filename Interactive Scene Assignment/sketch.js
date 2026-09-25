// Interactive Scene
// Hyunjin Wang
// 9/21/2026
// making a scence that you can interact with mouse or keyboard on a website


// These two open and close var is defined by image
let open;
let close;
// the vaule var is to control background lightening
// dir var was initially used for several different statement for different function.
let value = 255; let dir = 0; 

async function setup() {
  // this load two image 
  open = await loadImage('Screenshot 2026-09-24 161807.png');
  close = await loadImage('Screenshot 2026-09-24 161840.png');
  createCanvas(windowWidth, windowHeight);
  
}


function draw(){
  //local var that control the sahpe of the triangle or mountiains. 
  let a = 500; let b = 750; let c = 1000;
  let d = 600; let e = 700; let f = 800
  background(value);
  circle(200,200,300); fill(orla); stroke("white");
  fill(94, 134, 96);
  rect(0, 600, 999999, 999999);
  image(open, mouseX, mouseY, 50,50);

  if(dir === 1){
    value --;
    fill(177, 209, 208); circle(200,200,300); 
    image(close, mouseX, mouseY, 50,50);
  }
  else if(dir === 2){
    value++;
    fill("yellow"); circle(200,200,300); 
    if(value > 255) 
      value = 255;
    image(open, mouseX, mouseY, 50,50);
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
  text('James.W', 1500, 900)
  

 
}

function mousePressed(){
  dir ++; 
  if(dir === 3) dir = 0; 
  circle(200,200,300); fill("yellow");
  image(open, mouseX, mouseY, 50,50);


}



