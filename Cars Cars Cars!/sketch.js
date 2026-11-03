// Traffic Simulation Assignment
// Hyunjin Wang
// 10/20/2026

let eastbound = [];
let westbound = [];
let type;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(255);
  drawRoad();
  for(n of eastbound){

  }
  for(l of westbound){
    
  }
}

function drawRoad() {
  let x = 0;
  fill(0);
  rect(0, height / 2 - 250, width, 500);
  fill(255);
  for (let i = 0; i < width; i += 20) {
    rect(x, height / 2 + 2.5, 20, 5);
    x = x + 40;
  }
}

function mousePressed() {
  if (mousePressed.LEFT) {
    eastbound.push(new (car(width, random(height /2, height +260))));
    westbound.push(new (car(0, random(height /2 - 250, height - 740))));
  }

  if (mousePressed.CENTER) {
    eastbound.pop;
    westbound.pop;
  }
}


class car {

  constructor(x, y) {
    this.x = x; this.y = y;
    // this.cWidth = 20; this.cHeight = 5;
    // this.tWidth = 30; this.tHeight = 20;
    this.c = color(random(255), random(255), random(255));

    this.xTime = 0; this.xSpeed = 0.5;
    this.timeShift = 1; this.maxSpeed = 1;

    this.direction = 0;
    this.type = 0;
  }

  display() {
    type = random(0,1);

    if (type === 0) {
      rect(this.y + 10, this.y - 10, 35, 20);
      rect(this.y + 105, this.y - 10, 35, 20);
      rect(this.y + 10, this.y + 50, 35, 20);
      rect(this.y + 105, this.y + 50, 35, 20);
      rect(this.x, this.y, 150, 60);

    }
    if (type === 1) {
      rect(this.y + 10, this.y - 10, 35, 20);
      rect(this.y + 105, this.y - 10, 35, 20);
      rect(this.y + 10, this.y + 50, 35, 20);
      rect(this.y + 105, this.y + 50, 35, 20);
      rect(this.x, this.y, 150, 60);
    }

  }

  move() {
    if (this.direction === 0) {
      this.x += this.xSpeed;
    }

    if (this.direction === 1) {
      this.x -= this.xSpeed;
    }
  }

  speedUp() {

  }

  speedDown() {

  }

  changeColor() {
    fill(this.c);
  }

  action() {

  }
}