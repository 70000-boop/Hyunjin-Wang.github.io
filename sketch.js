// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

var NUM_CIRCLES = 15;

// This graphics program draws a worm centered vertically
// and spanning across the whole canvas.
function start() {
    var y = getHeight() / 2;
    
    // Calculate radius and spacing dynamically based on NUM_CIRCLES
    var radius = getWidth() / (NUM_CIRCLES * 2);
    
    for (let i = 0; i < NUM_CIRCLES; i++) {
        var circle = new Circle(radius);
        
        // Spread the circles evenly across the width of the canvas
        var x = i * (getWidth() / NUM_CIRCLES) + radius;
        
        circle.setPosition(x, y);
        add(circle);
    }
}