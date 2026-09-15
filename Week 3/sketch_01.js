function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245);

  fill(30);
  noStroke();

  // Start x at 20.
  // Keep looping while x is less than the canvas width.
  // Add 20 to x each time through the loop.
  for (let x = 20; x < width; x += 20) {
    circle(x, height / 2, 10);
  }
}
