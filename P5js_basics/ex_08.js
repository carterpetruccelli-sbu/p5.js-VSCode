/*
8) create shapes on clicks at random positions

Use mousePressed() to push new shapes into an array.
*/
let dots = [];

function setup() {
  createCanvas(600, 350);
  noStroke();
}

function draw() {
  background(252);
  for (let d of dots) {
    fill(d.c);
    ellipse(d.x, d.y, d.size, d.size);
  }
}

function mousePressed() {
  const d = {
    x: random(width),
    y: random(height),
    size: random(10, 40),
    c: color(random(255), random(255), random(255), 220),
  };
  dots.push(d);
}
