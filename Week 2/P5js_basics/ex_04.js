// 4) manual offsets (x, y) for simple shapes

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(250);
  const cx = width / 2;
  const cy = height / 2;

  // offsets around the center
  const offsets = [
    { dx: -120, dy: 0 },
    { dx: 120, dy: 0 },
    { dx: 0, dy: -90 },
    { dx: 0, dy: 90 },
    { dx: 80, dy: -60 },
  ];

  fill(220, 80, 80);
  ellipse(cx, cy, 40, 40); // center
  fill(80, 140, 220);

  for (let o of offsets) {
    ellipse(cx + o.dx, cy + o.dy, 30, 30);
  }
  showMouseCoordsLabel();
}
