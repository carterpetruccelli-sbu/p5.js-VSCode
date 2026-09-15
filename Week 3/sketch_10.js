function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245);
  noStroke();

  let step = 10;

  // Nested loops visit every position in a grid.
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {

      let n = noise(x * 0.02, y * 0.02);
      let size = map(n, 0, 1, 2, step);

      fill(40, 100 + 120 * n, 220, 220);
      circle(x + step / 2, y + step / 2, size);
    }
  }
}
