/*
10) summary challenge (+ solution)

Challenge:
Make a sketch where clicking the canvas spawns colorful circles at random sizes and velocities.
They:

change to a new random color every time they bounce off a wall,

wrap vertically but bounce horizontally,

and you can press r to reset.
*/

let circles = [];

function setup() {
  createCanvas(700, 400);
  noStroke();
}

function draw() {
  background(240);

  for (let i of circles) {
    // update position
    i.x += i.vx;
    i.y += i.vy;

    // horizontal bounce -> invert vx and recolor
    if (i.x < i.size / 2 || i.x > width - i.size / 2) {
      i.vx *= -1;
      i.c = color(random(255), random(255), random(255), 220);
    }

    // vertical wrap
    if (i.y < -i.size) i.y = height + i.size;
    if (i.y > height + i.size) i.y = -i.size;

    // draw
    fill(i.c);
    ellipse(i.x, i.y, i.size, i.size);
  }

  // UI hint
  fill(30);
  text('Click to add circles · Press r to reset', 10, 20);
  text(`Total number of circles: ${circles.length}`, 10, 40);
}

function mousePressed() {
  circles.push({
    x: mouseX,
    y: mouseY,
    vx: random(-3, 3) || 1, // avoid 0
    vy: random(-2, 2),
    size: random(12, 40),
    c: color(random(255), random(255), random(255), 220),
  });
}

function keyPressed() {
  if (key === 'r' || key === 'R') circles = [];
}
