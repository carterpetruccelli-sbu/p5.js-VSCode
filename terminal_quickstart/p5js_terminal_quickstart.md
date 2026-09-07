# p5.js Terminal Quickstart: Project Setup & CDN Tips

This guide shows how to use the terminal to spin up a clean p5.js project (HTML + JS + CSS), with common commands, a project skeleton, and local server tips.

---

## Terminal basics (macOS/Linux zsh)

- `pwd` — print current folder  
- `ls` — list files (use `ls -la` to see hidden ones)  
- `cd <folder>` — change folder (`cd ..` goes up)  
- `mkdir <name>` — make a folder (use `-p` to make nested)  
- `touch <file>` — create an empty file  
- `open .` — open current folder in Finder (`code .` if using VS Code)  
- `mv src dest` — move/rename  
- `cp src dest` — copy  
- `rm <file>` — delete (use `rm -i` to confirm; `rm -r <folder>` for folders)

> **Windows PowerShell note:** replace `open .` with `start .`, and `touch file` with `ni file`.

---

## 1) Make your project folders

```bash
# from wherever you keep projects
mkdir -p my-p5-project/{src,styles,assets/{images,audio},lib}
cd my-p5-project
```

---

## 2) Create the core files

```bash
touch index.html styles/style.css src/sketch.js
```

Or do it in one shot with boilerplate:

```bash
# index.html
cat > index.html <<'HTML'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>p5.js Starter</title>
  <link rel="stylesheet" href="styles/style.css" />
</head>
<body>
  <main id="app"></main>

  <!-- p5 core (CDN) -->
  <script src="https://cdn.jsdelivr.net/npm/p5/lib/p5.min.js"></script>
  <!-- Optional: p5.sound -->
  <!-- <script src="https://cdn.jsdelivr.net/npm/p5/lib/addons/p5.sound.min.js"></script> -->

  <!-- your sketch last -->
  <script src="src/sketch.js"></script>
</body>
</html>
HTML

# styles/style.css
cat > styles/style.css <<'CSS'
:root { --bg: #0f1220; --fg: #e8f0ff; --accent: #6ec1ff; }
* { box-sizing: border-box; }
html, body { margin: 0; height: 100%; }
body { background: var(--bg); color: var(--fg); font-family: system-ui, sans-serif; }
#app { position: fixed; inset: 0; }
canvas { display: block; outline: 1px solid transparent; }
CSS

# src/sketch.js
cat > src/sketch.js <<'JS'
function setup() {
  // Create a full-window canvas
  const c = createCanvas(windowWidth, windowHeight);
  c.parent('app'); // attach to <main id="app">
  noStroke();
}

function draw() {
  background(15, 18, 32);
  fill(110, 193, 255);
  const r = 60 + 40 * sin(frameCount * 0.02);
  circle(width/2, height/2, r);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
JS
```

> **CDN versions:** The jsDelivr path above (`/npm/p5/lib/p5.min.js`) resolves to the latest version. If you prefer pinning, swap it for something like `/npm/p5@1.x.y/lib/p5.min.js`.

---

## 3) Run a local server (so assets load correctly)

Opening `index.html` with `file://` can break loading and fonts due to browser security. Use a tiny server:

**Python 3 (built-in on macOS):**
```bash
python3 -m http.server 5173
```
Then visit: `http://localhost:5173`

**VS Code Live Server:**  
Install the “Live Server” extension → Right-click `index.html` → “Open with Live Server”.

---

## 4) (Optional) Use local copies instead of CDNs

If you’ll be offline or want to pin versions yourself:

```bash
# Put p5 files into /lib then reference them locally
# (download p5.min.js and optional p5.sound.min.js to lib/)
```

In `index.html`:
```html
<script src="lib/p5.min.js"></script>
<!-- <script src="lib/p5.sound.min.js"></script> -->
<script src="src/sketch.js"></script>
```

**CDN + local fallback** (robust pattern):

```html
<script src="https://cdn.jsdelivr.net/npm/p5/lib/p5.min.js"></script>
<script>
  if (typeof window.p5 === 'undefined') {
    document.write('<script src="lib/p5.min.js"><\/script>');
  }
</script>
```

---

## 5) Quick “tree” check (what did I just make?)

macOS may not have `tree` by default. Use:

```bash
find . -maxdepth 3 -print
```

You should see:

```
./
./index.html
./src
./src/sketch.js
./styles
./styles/style.css
./assets
./assets/images
./assets/audio
./lib
```

---

## 6) Handy workflow tips

- **Script order matters**: load `p5` first, then `p5.sound` (if used), then your `sketch.js`.
- **One sketch file or many**: split code into modules (`src/utils.js`, etc.). Include them **before** `sketch.js`, or use ES modules & instance mode if you want imports.
- **Caching**: when editing JS/CSS, browsers may cache. Use hard refresh (⌘+Shift+R) or add a query like `src/sketch.js?v=1`.
- **Case sensitivity**: file paths on macOS can be case-tolerant; servers are not. Keep names consistent (e.g., `styles/style.css` ≠ `Styles/style.css`).
- **Console**: open DevTools (⌥⌘I) to see errors (`Console` tab). 404s mean a wrong path; “undefined” usually means a missing or wrong script order.
- **Git (optional but recommended)**:
  ```bash
  git init
  echo "node_modules
  .DS_Store
  .vscode" > .gitignore
  git add .
  git commit -m "Initial p5.js starter"
  ```

---

## 7) Windows PowerShell equivalents (quick notes)

```powershell
mkdir my-p5-project/src, my-p5-project/styles, my-p5-project/assets/images, my-p5-project/assets/audio, my-p5-project/lib
cd my-p5-project
ni index.html
ni styles/style.css
ni src/sketch.js
start .
# Simple server (if Python installed):
python -m http.server 5173
```

---

## TL;DR (quick start)

```bash
mkdir -p my-p5-project/{src,styles,assets/{images,audio},lib} && cd my-p5-project && touch index.html styles/style.css src/sketch.js && python3 -m http.server 5173
```

Paste the HTML/JS/CSS from above, refresh the browser, and you’re drawing with p5.
