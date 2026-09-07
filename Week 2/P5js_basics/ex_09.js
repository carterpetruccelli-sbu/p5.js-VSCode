/*
9) animate those shapes (positions + simple wrapping)

Add velocity to each dot, update per frame, and wrap.
*/

let movers = [];

function setup() {
  createCanvas(600, 350);
  noStroke();
}

function draw() {
  background(248);

  for (let m of movers) {
    // update
    m.x += m.vx;
    m.y += m.vy;

    // wrap around edges
    if (m.x < -m.size) m.x = width + m.size;
    if (m.x > width + m.size) m.x = -m.size;
    if (m.y < -m.size) m.y = height + m.size;
    if (m.y > height + m.size) m.y = -m.size;

    // draw
    fill(m.c);
    ellipse(m.x, m.y, m.size, m.size);
  }
}

function mousePressed() {
  movers.push({
    x: mouseX,
    y: mouseY,
    vx: random(-2, 2),
    vy: random(-2, 2),
    size: random(10, 40),
    c: color(random(255), random(255), random(255), 220),
  });
}
