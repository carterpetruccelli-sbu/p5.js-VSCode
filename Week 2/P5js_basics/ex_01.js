/*
1) the empty sketch: setup() and draw()

setup() runs once at the start (good for createCanvas, loading assets, initializing variables).
draw() runs ~60 times per second by default—it’s your animation loop.
*/

function setup() {
  createCanvas(600, 400); // runs once
  // put one-time setup here
}

function draw() {
  background(240); // runs every frame
  // put animation / drawing here

  showMouseCoordsLabel();
}
