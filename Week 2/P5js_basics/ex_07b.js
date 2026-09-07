/*
7) color basics + randomized colors

For shapes, use fill(r,g,b, [a]) and stroke(...).

For bitmaps, use tint(r,g,b, [a]).
*/

// (b) tint a loaded image (optional)
let img;
let tr = 255,
  tg = 255,
  tb = 255,
  ta = 255;

function preload() {
  img = loadImage('https://picsum.photos/200'); // sample image
}

function setup() {
  createCanvas(500, 300);
  imageMode(CENTER);
}

function draw() {
  background(245);
  tint(tr, tg, tb, ta); // apply color tint to the image
  image(img, width / 2, height / 2, 200, 200);
}

function mousePressed() {
  tr = random(255);
  tg = random(255);
  tb = random(255);
  ta = random(100, 255);
}
