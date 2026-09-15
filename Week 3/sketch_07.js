function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);

  translate(width / 2, height / 2);
  stroke(30);

  let numberOfLines = 60;
  let radius = min(width, height) * 0.4;

  for (let i = 0; i < numberOfLines; i++) {
    let amount = i / numberOfLines;
    let angle = amount * TWO_PI;

    strokeWeight(map(amount, 0, 1, 1, 4));

    let x = radius * cos(angle);
    let y = radius * sin(angle);

    line(0, 0, x, y);
  }
}
