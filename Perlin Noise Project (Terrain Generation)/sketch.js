// Perlin Noise Project (Terrain Generation)
// Hyunjin Wang
// 10/1/2026

let Height = 0; let Width = 0;
let ySpeed = 0; let yTime = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  generateTerrain();
}

function generateTerrain() {
  for (let x = 0; x < width; x += 10) {
    let y = noise(Height);
    y = map(x, 0, height, 0, width);
    rect(x, y, 10, y);
  }


}

function keyPressed() {

}
