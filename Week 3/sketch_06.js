let points = [
  { x: 80, y: 80, r: 18 },
  { x: 200, y: 120, r: 28 },
  { x: 320, y: 70, r: 22 },
  { x: 440, y: 110, r: 30 }
];

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(245);
  noStroke();

  // for...of gives us each object directly.
  fill(80, 160, 220);
  for (let p of points) {
    circle(p.x, p.y, p.r * 2);
  }

  // A classic for-loop gives us an index: 0, 1, 2, 3...
  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    let alphaValue = map(i, 0, points.length - 1, 80, 200);
    fill(255, 120, 80, alphaValue);

    circle(p.x, p.y + 100, p.r * 1.4);
  }
}
