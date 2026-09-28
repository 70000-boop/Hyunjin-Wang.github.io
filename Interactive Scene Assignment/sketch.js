// Interactive Scene
// Hyunjin Wang
// 9/21/2026
// making a scence that you can interact with mouse or keyboard on a website


// These two open and close var is defined by image
let open;
let close;
// the vaule var is to control background lightening
// currentBack var was initially used for several different statement for different function.
let value = 255; let currentBack = 0; 

async function setup() {
  // this load two image 
  open = await loadImage('Screenshot 2026-09-24 161807.png');
  close = await loadImage('Screenshot 2026-09-24 161840.png');
  createCanvas(windowWidth, windowHeight);
  
}

// this function is to make code into the canvas aswell the control or interactive
function draw(){
  //local var that control the sahpe of the triangle or mountiains. 
  // in this function it has shape, color, stroke, and reapted loop.
  let a = 500; let b = 750; let c = 1000;
  let d = 600; let e = 700; let f = 800
  background(value);
  fill("yellow");
  circle(200,200,300); stroke("white");
  fill(94, 134, 96);
  rect(0, 600, 999999, 999999);
  // this is to attach an image on mouse pointer so it moves when pointer is moving.
  image(open, mouseX, mouseY, 50,50);

  if(currentBack === 1){
    value --;
    fill(177, 209, 208); circle(200,200,300); 
    image(close, mouseX, mouseY, 50,50);
  }
  else if(currentBack === 2){
    value++;
    fill("yellow"); circle(200,200,300); 
    if(value > 255) 
      value = 255;
    image(open, mouseX, mouseY, 50,50);
  }
  // the two loop will reaptly make 11 mountain across the x axis by 100
  for(let i = 0; i < 11; i++){
    fill(109);
    stroke(255);
    a += 100;
    b += 100;
    c += 100;
    triangle(a, 800, b, 100, c, 800);
  }

  // Small mountain but with same function as the previous
  for(let i = 0; i < 11; i++){
    stroke(255);
    fill(153, 144, 121);
    d += 100;
    e += 100;
    f += 100;
    triangle(d, 750, e, 500, f, 750);
  }
  // cool signiture that will appear near bottom right corner
  text('James.W', 1500, 900)
  

 
}
// this captures mouse is pressing and when clicked it will add dir var by one 
// then will trigger the one of two dir statement and when is = to 3 it will reset it self
// bug solution: putting circle and fill with yellow again so it dosen't appear to be green 
// also to set a blank between the statement. 
// ex. click background white, click again background black eye close, click again back ground white and sun is yellow instead of green eye open.
// 
function mousePressed(){
  currentBack ++; 
  if(currentBack === 3) currentBack = 0; 
  circle(200,200,300); fill("yellow");
  image(open, mouseX, mouseY, 50,50);


}



