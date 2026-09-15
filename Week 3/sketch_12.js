let meteors = [];

function setup() {
  createCanvas(600, 400);
  resetMeteors();
  background(0);
}

function draw() {
  // Transparent black creates trails.
  fill(0, 40);
  noStroke();
  rect(0, 0, width, height);

  for (let i = 0; i < meteors.length; i++) {
    let m = meteors[i];

    m.x += m.vx;
    m.y += m.vy;

    // If the meteor leaves the screen, respawn it.
    if (m.x > width || m.y > height) {
      m.x = random(-50, width * 0.5);
      m.y = random(-50, 0);

      let speed = random(2, 6);
      m.vx = speed * 0.8;
      m.vy = speed * 0.6;
      m.size = random(2, 5);
    }

    fill(220);
    circle(m.x, m.y, m.size);
  }

  fill(255);
  text("Press R to reset", 10, height - 15);
}

function resetMeteors() {
  meteors = [];

  for (let i = 0; i < 80; i++) {
    let speed = random(2, 6);

    meteors.push({
      x: random(-20, width),
      y: random(-20, height),
      vx: speed * 0.8,
      vy: speed * 0.6,
      size: random(2, 5)
    });
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    resetMeteors();
    background(0);
  }
}
