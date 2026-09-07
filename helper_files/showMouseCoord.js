function showMouseCoordsLabel() {
  push();
  const label = `(${int(mouseX)}, ${int(mouseY)})`;
  textSize(12);
  const pad = 4,
    h = 16,
    w = textWidth(label) + pad * 2;

  // place near cursor
  let x = mouseX + 12;
  let y = mouseY - 12;

  // keep on-screen
  if (x + w > width) x = mouseX - w - 12;
  if (y - h < 0) y = mouseY + h + 12;

  noStroke();
  fill(255, 220);
  rect(x, y - h + 4, w, h, 4);
  fill(0);
  textAlign(LEFT, BOTTOM);
  text(label, x + pad, y);
  pop();
}
