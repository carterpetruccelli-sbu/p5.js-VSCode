function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250);
  stroke(0);

  // Minor ticks every 10 pixels
  for (let x = 0; x <= width; x += 10) {
    strokeWeight(1);
    line(x, height / 2 - 10, x, height / 2 + 10);
  }

  // Major ticks every 50 pixels
  for (let x = 0; x <= width; x += 50) {
    strokeWeight(3);
    line(x, height / 2 - 30, x, height / 2 + 30);
  }
}
