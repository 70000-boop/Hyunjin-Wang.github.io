// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let blake;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blake = new Walker(width/2, height/2);
}

function draw() {
  blake.move();
  blake.display();
}

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = 4;
    this.radius = 1;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let theChoice = random(100);

    if (theChoice < 25) { //up
      this.y -= this.speed;
    }
    else if (theChoice < 50) { //down
      this.y += this.speed;
    }
    else if (theChoice < 75) { //left
      this.x -= this.speed;
    }
    else { //right
      this.x += this.speed;
    }
  }
}
// async function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(220);
//   push();
//   translate(150,150);
//   radians(45);
//   rotate(45);
//   squares(0,0,60);
//   pop();
//   square(20,20,60);
// }

// function squares(x,y){
//   fill(255);
//   square(x,y,60);
// }