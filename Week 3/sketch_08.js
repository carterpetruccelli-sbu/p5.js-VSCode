let particles = [];

function setup() {
  createCanvas(600, 400);

  // Create many particles with a loop.
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-0.8, 0.8),
      vy: random(-0.8, 0.8),
      size: random(2, 5)
    });
  }
}

function draw() {
  background(20, 24, 28);
  noStroke();
  fill(180, 220, 255);

  // Update and draw every particle.
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];

    p.x += p.vx;
    p.y += p.vy;

    // Wrap around the edges.
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;

    circle(p.x, p.y, p.size);
  }
}
