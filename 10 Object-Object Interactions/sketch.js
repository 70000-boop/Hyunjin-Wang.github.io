// Object Object Interaction
// Hyunjin Wang
// OCt 16, 2026


//Global
let nodes = []; 
let reach = 150;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(0);
  // if no deletion, loop by item
  for(let n of nodes){
    n.move(); 
    n.connect(nodes);
    n.display();
  }
}
function mousePressed(){
  if(mouseButton.left){
    nodes.push(new csNode(mouseX, mouseY));
  }
  else if(mouseButton.center){
    for(let i = 0; i< 5; i++){
      nodes.push(new csNode(mouseX,mouseY));
    }
  }
}

class csNode{
  //1. Constructor
  constructor(x,y){
    //properties related to pos/display
    this.x = x; this.y = y; this.size = 5;
    this.c = color(random(255),random(255),random(255));

    //propeties related to movement (perlin noise)
    this.xTime = random(100);  this.yTime = random(100);
    this.timeShift = 0.0001;  this.maxSpeed = 1; 
  }


  //2. Class Methods
  display(){
    //redner object visually on the screen
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move(){
    //user perlin noise for x,y movement
    let xSpeed = noise(this.xTime); //0-1
    xSpeed = map(xSpeed,0,1,-this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x > width)this.x=0
    else if (this.x < 0) this.x = width;

    

    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed,0,1,-this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift; 
    
    this.y += ySpeed;
    if(this.y > width)this.y = 0
    else if (this.y < 0) this.y = width;
  }

  connect(nodeArray){
    //check if the current csNode is close to any
    //other csNode. if so, join with a line.
    stroke(this.c);
    for(let n of nodeArray){
      //this.x, this.y, n.x n.y
      if(n !== this){//don't compare to yourself...
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach){
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }

}

