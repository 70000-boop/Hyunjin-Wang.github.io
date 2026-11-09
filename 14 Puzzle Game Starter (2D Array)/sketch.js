// 2D Array Puzzle Starter 
// Hyunjin Wang
// Nov 3, 2026

// grid sized 6 x 5
// 0 (black) 255(white) 

let grid = [
  [0, 255, 0, 255, 0, 255],
  [255, 0, 255, 0, 255, 0],
  [255, 255, 255, 255, 255, 255],
  [0, 0, 0, 0, 0, 0],
  [255, 255, 0, 255, 255, 0]
];
let rows = grid.length;
let cols = grid[0].length;
const tileSize = 60;

async function setup() {
  createCanvas(cols * tileSize, rows * tileSize);
}

function draw() {
  background(220);
  renderGrid();
  fill('blue');
  getCurrentX();
  win();
}

function getCurrentX() {
  //determine current col pos of mouse
  let constrainedX = constrain(mouseX, 0, width - 1);
  return int(constrainedX / tileSize);
}

function getCurrentY() {
  // determind current row pos if mouse
  let constrainedY = constrain(mouseY, 0, width - 1);
  return int(constrainedY / tileSize);
}

function getCurrent5X() {
  //determine current col pos of mouse
  let constrained5X = constrain(mouseX, 0, width - 1);
  return int(constrained5X / tileSize);
}

function getCurrent5Y() {
  // determind current row pos if mouse
  let constrained5Y = constrain(mouseY, 0, width - 1);
  return int(constrained5Y / tileSize);
}


function flip(x, y) {
  // flip the tile at position (x,y);
  if (grid[y][x] === 255) {

    grid[y][x] = 0;

  }
  else {

    grid[y][x] = 255;

  }
}

function mousePressed() {
  //if only do a flip if mouse is on the canvas
  if (mouseX < width && mouseY < height) {
    if (keyIsDown(SHIFT)) {
      let x = getCurrentX();
      let y = getCurrentY();

      //ALWAYS
      flip(x, y);

      //IF THEY EXIST:
      //flip the cardinal neighbors  (NSWR)
      if (x - 1 >= 0) flip(x - 1, y); //
      if (x - 1 >= 0) flip(x - 1, y);
    }
    else if (mousePressed) {
      let x = getCurrent5X();
      let y = getCurrent5Y();

      //ALWAYS
      flip(x, y);

      //IF THEY EXIST:
      //flip the cardinal neighbors  (NSWR)
      if (x - 1 >= 0) flip(x - 1, y); //
      if (x - 1 >= 0) flip(x + 1, y);
      if (x - 1 >= 0) flip(x, y - 1);
      if (x - 1 >= 0) flip(x, y + 1);
    }

  }

}

function renderGrid() {
  // interpret the data stored in 2D array
  // and draw a matrix to square reflect
  // it.
  for (let y = 0; y < rows; y++) {//y: 1234
    for (let x = 0; x < cols; x++) {//x: 12345
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x * tileSize, y * tileSize, tileSize);
      // e.g:
      //y   x
      //0   0
      //0   1
      //0   2
      //0   3
      //0   4
      //0   5
      //1   0  11, 12, 13, 14, 15   
    }
  }
}

let hasWon;
function win() {
  if (hasWon) return; // Stop checking once the game is won

  let store = grid[0][0];
  let allMatch = true;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] !== store) { // Fixed grid indexing order to grid[y][x]
        allMatch = false;
      }
    }
  }

  // If every single tile matched 'store', print win message once
  if (allMatch) {
    console.log("you win");
    hasWon = true;
  }
}