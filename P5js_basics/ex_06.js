/*
6) boundary detection & bounce (invert direction)

Detect edges and flip the velocity when you hit them.
*/
let x = 100,
  y = 80;
let vx = 3,
  vy = 2;
const d = 40; // diameter

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(250);

  // update
  x += vx;
  y += vy;

  // bounce horizontally
  if (x < d / 2 || x > width - d / 2) vx *= -1;
  // bounce vertically
  if (y < d / 2 || y > height - d / 2) vy *= -1;

  // draw
  noStroke();
  fill(80, 160, 220);
  ellipse(x, y, d, d);
}
