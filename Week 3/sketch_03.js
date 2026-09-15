function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);
  noStroke();

  // This loop counts backwards.
  for (let x = width; x >= 0; x -= 20) {
    let alphaValue = map(x, 0, width, 50, 255);
    fill(50, 120, 220, alphaValue);
    circle(x, height / 2, 18);
  }
}
