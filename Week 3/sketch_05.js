function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250);
  stroke(0);

  let step = 15;

  for (let x = 0; x <= width; x += step) {

    // Skip all values below 40.
    if (x < 40) {
      continue;
    }

    line(x, height / 3, x, (2 * height) / 3);

    // Stop the loop once we pass the mouse.
    if (x > mouseX) {
      break;
    }
  }

  noStroke();
  fill(30);
  text("Move the mouse left and right", 10, height - 15);
}
