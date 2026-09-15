function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250);
  noStroke();
  rectMode(CENTER);

  let step = 40;

  // Starting and stopping inside the edges prevents clipping.
  for (let y = step; y < height - step; y += step) {
    for (let x = step; x < width - step; x += step) {
      fill(60);
      rect(x, y, step * 0.6, step * 0.6, 6);
    }
  }
}
