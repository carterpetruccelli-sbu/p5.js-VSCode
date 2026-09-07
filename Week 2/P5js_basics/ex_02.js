/*
2) drawing shapes: ellipse, rect, square, line, triangle

fill() sets interior color; stroke() sets outline color; noStroke() removes it.
*/

function setup() {
  createCanvas(600, 400);
  noLoop(); // just draw once for this demo
}

function mouseMoved() {
  // fire one frame per mouse move
  redraw();
}

function touchMoved() {
  // support touch, too
  redraw();
}

function draw() {
  background(240);

  // ellipse(x, y, width, height)
  fill(200, 80, 80);
  ellipse(100, 100, 80, 80);

  // rect(x, y, w, h)
  fill(80, 160, 220);
  rect(200, 60, 120, 80, 10);

  // square(x, y, size)
  fill(120, 200, 120);
  square(360, 60, 80);

  // line(x1, y1, x2, y2)
  stroke(30);
  strokeWeight(3);
  line(60, 200, 540, 200);

  // triangle(x1, y1, x2, y2, x3, y3)
  noStroke();
  fill(250, 200, 50);
  triangle(100, 260, 130, 340, 60, 340);

  // circle(x, y, diameter)
  circle(240, 300, 80);

  // Draw quadrilateral
  // x1, y1, x2, y2, x3, y3, x4, y4
  quad(320, 340, 420, 260, 520, 260, 420, 340);

  showMouseCoordsLabel();
}
