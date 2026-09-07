/*
7) color basics + randomized colors

For shapes, use fill(r,g,b, [a]) and stroke(...).

For bitmaps, use tint(r,g,b, [a]).
*/

// (a) random shape color on click
let r = 200,
  g = 80,
  b = 100;

function setup() {
  createCanvas(500, 300);
  noStroke();
}

function draw() {
  background(240);
  fill(r, g, b);
  ellipse(width / 2, height / 2, 120, 120);
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}
