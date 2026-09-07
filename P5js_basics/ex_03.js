/*
3) positioning & centering

Two common approaches:

Direct coordinates: use width/2, height/2 for the canvas center.

Translate: move the drawing origin, then draw shapes around (0,0).
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245);

  // a) direct coordinates (centered circle)
  fill(80, 120, 200);
  noStroke();
  ellipse(width / 2, height / 2, 120, 120);

  // b) translate to center, then draw relative to (0,0)
  push();
  translate(width / 2, height / 2);
  fill(255, 120, 80, 180);
  rectMode(CENTER);
  rect(0, 0, 200, 40, 8); // centered at translated origin
  pop();

  // c) offset from center (e.g., +50 right, -30 up)
  fill(60);
  ellipse(width / 2 + 50, height / 2 - 30, 20, 20);

  showMouseCoordsLabel();
}
