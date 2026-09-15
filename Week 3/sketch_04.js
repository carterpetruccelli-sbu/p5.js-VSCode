function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);
  noStroke();

  let step = 25;

  // Outer loop controls rows (y)
  for (let y = step / 2; y < height; y += step) {

    // Inner loop controls columns (x)
    for (let x = step / 2; x < width; x += step) {
      let redValue = map(x, 0, width, 30, 255);
      let greenValue = map(y, 0, height, 30, 255);

      fill(redValue, greenValue, 160);
      circle(x, y, step * 0.8);
    }
  }
}
