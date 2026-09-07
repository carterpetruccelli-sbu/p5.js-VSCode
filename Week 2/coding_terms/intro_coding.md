# JavaScript Basics — One‑Pager (p5‑friendly)

## Variables

**What:** Named containers for data.
**Use:** `let` (reassign), `const` (no reassignment), avoid legacy `var`.

```js
let x = 10; // can change later
const name = 'Ada'; // must not be reassigned
```

## Types

**Primitives:** `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
**Structural:** `object` (arrays, functions, dates…)

```js
typeof 42; // "number"
Array.isArray([]); // true
```

## Expressions & Operators

Arithmetic `+ - * / % **`, comparisons `=== !== < > <= >=`, logical `&& || !`.
Prefer `===`/`!==` for strict equality.

```js
const canDrink = age >= 21 && hasID;
```

## Truthy / Falsy

**Falsy:** `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else is truthy.

```js
if (input) {
  /* only runs if not empty */
}
```

## Conditionals

Choose a path.

```js
if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else grade = 'C';

const color = isOn ? 'green' : 'red'; // ternary
```

## Loops

Repeat actions.

```js
for (let i = 0; i < 10; i++) {
  /* ... */
}
for (const v of [2, 4, 6]) {
  /* values */
}
while (count > 0) {
  count--;
}

// Higher‑order helpers on arrays
[1, 2, 3].forEach(v => log(v));
const doubled = [1, 2, 3].map(v => v * 2);
```

## Functions

Reusable blocks of code.

```js
function area(w, h) {
  return w * h;
} // declaration
const perim = (w, h) => 2 * (w + h); // arrow
```

## Scope & Closures

`let`/`const` are block‑scoped. Closures remember outer vars.

```js
function makeCounter() {
  let n = 0;
  return () => ++n;
}
const next = makeCounter();
next(); // 1
```

## Arrays & Objects

```js
const pts = [
  { x: 10, y: 20 },
  { x: 30, y: 40 },
];
pts.push({ x: 50, y: 60 });
const user = { name: 'Ada', role: 'admin' };
user.role = 'editor';
```

## Debugging

```js
let x = 42;
console.log('x =', x);

try {
  risky(); // ReferenceError: risky is not defined
} catch (e) {
  console.error('[Caught]', e.name); // "ReferenceError"
  console.error('message:', e.message); // "risky is not defined"
  console.error('stack:\n' + e.stack); // where it happened
} finally {
  console.log('finally: cleanup/logging runs either way');
}
```

## p5.js tie‑ins (tiny patterns)

```js
// state variable updates per frame
let x = 0;
function draw() {
  background(240);
  circle(x, height / 2, 24);
  x += 2;
}

// wrap around
if (x > width) x = 0;

// grid with a loop
for (let i = 0; i < width; i += 20) line(i, 0, i, height);
```

---

# p5.js Sketch — Runnable Mini‑Examples (Dropdown)

Paste the code below into **editor.p5js.org** (single file). Use the dropdown to switch demos. Press **H** to toggle HUD.

```js
/*
  JS Basics — Mini‑Examples with p5.js (dropdown + HUD)
  Demos: Variables, Types, Conditionals, Loops, Functions, Arrays/Objects, Closures, Switch/Ternary
*/
let demoSelect,
  hudOn = true;
let demos = [];
let currentDemo = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  demos = [
    // 1) Variables — x position updated each frame
    {
      name: '1) Variables (state & update)',
      loop: true,
      setup(d) {
        d.x = 0;
      },
      draw(d) {
        background(245);
        fill(40, 120, 220);
        noStroke();
        circle(d.x, height / 2, 40);
        d.x += 3;
        if (d.x > width + 20) d.x = -20;
        hint('A variable (x) stores state and updates each frame.');
      },
    },

    // 2) Types — show typeof outputs
    {
      name: '2) Types (typeof quickview)',
      loop: false,
      setup(d) {
        d.samples = [
          42,
          3.14,
          'hi',
          true,
          null,
          undefined,
          [1, 2],
          { a: 1 },
          () => {},
          Symbol('s'),
        ];
      },
      draw(d) {
        background(250);
        fill(30);
        textSize(16);
        text('value                typeof', 40, 80);
        text('--------------------------------', 40, 100);
        textSize(14);
        let y = 130;
        d.samples.forEach(v => {
          let val = typeof v === 'function' ? '() => {}' : JSON.stringify(v);
          if (val === undefined) val = 'undefined';
          if (val === '{}') val = '{a:1}'; // nicer sample
          if (Array.isArray(v)) val = '[1,2]';
          text(`${nf(y - 120, 2)}  ${val.padEnd(20, ' ')}  ${typeof v}`, 40, y);
          y += 22;
        });
        hint('Primitive vs object types. typeof shows the runtime type.');
      },
    },

    // 3) Conditionals — change color/label based on mouseX
    {
      name: '3) Conditionals (if / else / ? : )',
      loop: true,
      setup(d) {},
      draw(d) {
        const left = mouseX < width / 2;
        background(left ? color(235, 255, 235) : color(255, 235, 235));
        noStroke();
        fill(left ? 'green' : 'red');
        const msg = left ? 'LEFT HALF' : 'RIGHT HALF';
        textSize(32);
        textAlign(CENTER, CENTER);
        text(msg, width / 2, height / 2);
        hint('Ternary picks color & text based on a condition. Move mouse.');
      },
    },

    // 4) Loops — vertical line grid
    {
      name: '4) Loops (classic for)',
      loop: false,
      setup(d) {},
      draw(d) {
        background(248);
        stroke(60, 80);
        strokeWeight(2);
        for (let x = 0; x < width; x += 20) line(x, 0, x, height);
        for (let y = 0; y < height; y += 20) line(0, y, width, y);
        hint('Two classic for-loops create a grid.');
      },
    },

    // 5) Functions — reusable drawStar() used in a loop
    {
      name: '5) Functions (reusable blocks)',
      loop: false,
      setup(d) {},
      draw(d) {
        background(240);
        noStroke();
        for (let i = 0; i < 10; i++) {
          const x = map(i, 0, 9, 80, width - 80);
          const y = height / 2 + sin(i) * 20;
          drawStar(x, y, 10, 24, 5, color(255, 180 - i * 10, 80 + i * 15));
        }
        hint('A named function encapsulates logic and can be reused.');
      },
    },

    // 6) Arrays & Objects — small particle system
    {
      name: '6) Arrays & Objects (particles)',
      loop: true,
      setup(d) {
        d.P = [];
        const N = floor(min(200, (width * height) / 10000));
        for (let i = 0; i < N; i++)
          d.P.push({
            x: random(width),
            y: random(height),
            vx: random(-1, 1),
            vy: random(-1, 1),
            r: random(1.5, 3.5),
          });
      },
      draw(d) {
        background(20, 24, 28);
        noStroke();
        fill(180, 220, 255);
        for (let i = 0; i < d.P.length; i++) {
          const p = d.P[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -p.r) p.x = width + p.r;
          if (p.x > width + p.r) p.x = -p.r;
          if (p.y < -p.r) p.y = height + p.r;
          if (p.y > height + p.r) p.y = -p.r;
          circle(p.x, p.y, p.r * 2);
        }
        hint('Array of objects; classic for-loop updates & draws each.');
      },
    },

    // 7) Closures — click to increment a private counter
    {
      name: '7) Closures (private state)',
      loop: true,
      setup(d) {
        d.next = makeCounter();
        d.n = 0;
      },
      draw(d) {
        background(250);
        textAlign(CENTER, CENTER);
        textSize(32);
        fill(30);
        text(`Clicks: ${d.n}`, width / 2, height / 2);
        hint('Click: inner function remembers outer variable (closure).');
      },
      mousePressed(d) {
        d.n = d.next();
      },
    },

    // 8) Switch / Key controls — move a box with arrows
    {
      name: '8) switch + keys (controls)',
      loop: true,
      setup(d) {
        d.x = width / 2;
        d.y = height / 2;
        d.s = 4;
      },
      draw(d) {
        background(244);
        fill(60, 130, 230);
        noStroke();
        rectMode(CENTER);
        rect(d.x, d.y, 60, 60, 8);
        hint('Use arrow keys. A switch() maps keys to actions.');
      },
      keyPressed(d) {
        switch (key) {
          case 'ArrowLeft':
            d.x -= d.s;
            break;
          case 'ArrowRight':
            d.x += d.s;
            break;
          case 'ArrowUp':
            d.y -= d.s;
            break;
          case 'ArrowDown':
            d.y += d.s;
            break;
        }
      },
    },
  ];

  demoSelect = createSelect();
  demoSelect.position(10, 10);
  demoSelect.style('padding', '6px');
  demos.forEach((d, i) => demoSelect.option(d.name, i));
  demoSelect.changed(() => selectDemo(int(demoSelect.value())));
  selectDemo(0);
}

function draw() {
  const d = demos[currentDemo];
  d.draw && d.draw(d);
  showHUD();
}

function selectDemo(i) {
  currentDemo = constrain(i, 0, demos.length - 1);
  const d = demos[currentDemo];
  d.setup && d.setup(d);
  d.loop ? loop() : noLoop();
  redraw();
}

function keyPressed() {
  const d = demos[currentDemo];
  if (d.keyPressed) d.keyPressed(d);
  if (key === 'h' || key === 'H') hudOn = !hudOn;
}
function mousePressed() {
  const d = demos[currentDemo];
  if (d.mousePressed) d.mousePressed(d);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  selectDemo(currentDemo);
}

// ——— helpers ———
function showHUD() {
  if (!hudOn) return;
  push();
  textSize(12);
  noStroke();
  const d = demos[currentDemo];
  const a = `${d.name}`;
  const b = `FPS: ${nf(frameRate(), 2, 0)}  mouse: (${int(mouseX)}, ${int(
    mouseY
  )})`;
  const pad = 6,
    w = max(textWidth(a), textWidth(b)) + pad * 2,
    h = 38;
  fill(255, 220);
  rect(10, 50, w, h, 6);
  fill(0);
  text(a, 10 + pad, 50 + 14);
  text(b, 10 + pad, 50 + 28);
  pop();
}
function hint(msg) {
  push();
  const pad = 6;
  const w = textWidth(msg) + pad * 2;
  noStroke();
  fill(255, 220);
  rect(10, height - 34, w, 24, 6);
  fill(0);
  text(msg, 10 + pad, height - 18);
  pop();
}

function drawStar(x, y, r1, r2, n, col) {
  push();
  translate(x, y);
  fill(col);
  beginShape();
  const aStep = PI / n;
  for (let i = 0; i < 2 * n; i++) {
    const r = i % 2 ? r1 : r2;
    const a = i * aStep;
    vertex(cos(a) * r, sin(a) * r);
  }
  endShape(CLOSE);
  pop();
}
function makeCounter() {
  let n = 0;
  return () => ++n;
}
```
