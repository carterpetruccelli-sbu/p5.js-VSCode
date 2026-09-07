/*
5) frame rate & looping movement across screen

frameRate(n) asks p5 to target n FPS.

Move an object and wrap it when it goes past the edge.
*/

// (a) move horizontally & wrap

let x = -60; // start left of the canvas
let speed = 3;

function setup() {
  createCanvas(600, 200);
  frameRate(60);
}

function draw() {
  background(240);

  // "image" placeholder: a rectangle
  rect(x, height / 2 - 25, 50, 50);

  x += speed;
  if (x > width) x = -60; // wrap to left again

  // display actual measured FPS (approximate)
  noStroke();
  fill(30);
  text('FPS ~ ' + nf(frameRate(), 2, 0), 10, 20);
}
