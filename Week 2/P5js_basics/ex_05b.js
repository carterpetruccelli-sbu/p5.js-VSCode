/*
5) frame rate & looping movement across screen

frameRate(n) asks p5 to target n FPS.

Move an object and wrap it when it goes past the edge.
*/

// (b) move vertically & wrap

let y = -60;
let v = 2.5;

function setup() {
  createCanvas(300, 400);
}

function draw() {
  background(245);
  ellipse(width / 2, y, 60, 60);

  y += v;
  if (y > height) y = -60; // reappear from top
}
