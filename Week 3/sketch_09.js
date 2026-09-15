function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  translate(width / 2, height / 2);

  noFill();
  stroke(40, 120, 220);
  strokeWeight(2);

  beginShape();

  // Here the loop variable represents an angle.
  for (let angle = 0; angle < 16 * TWO_PI; angle += 0.05) {
    let radius = 2.2 * angle;

    let x = radius * cos(angle);
    let y = radius * sin(angle);

    vertex(x, y);
  }

  endShape();
}
