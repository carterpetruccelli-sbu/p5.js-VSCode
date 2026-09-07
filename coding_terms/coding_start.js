let x = 10;
console.log(x); // type variable name
console.log('type some text: ' + x); // using single quotes
console.log(`type text and: ${x}`); // use template string literal

const myName = 'Ada'; // must not be reassigned
console.log(myName);

typeof 42; // "number"
console.log(typeof 'a');

Array.isArray([]); // true
// console.log(Array.isArray([])); // true

let age = 21;
let hasID = false;

const canDrink = age >= 21 && hasID;
console.log('canDrink? ' + canDrink);

let score = 79;

if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else grade = 'C';

console.log('score: ' + score + ' ' + grade);

// Loops - Repeat actions.
n = 100;
for (let i = 0; i < n; i++) {
  console.log(`i is printing ${n} times`);
}

for (const v of [2, 4, 6, 8, 10]) {
  console.log(v);
}

let count = 15;
while (count > 0) {
  console.log(`while is counting down: ${count--}`);
}

// Functions - Reusable blocks of code
function area(w, h) {
  return w * h;
} // declaration
console.log(`The area is: ${area(10, 5)}`);

const perim = (w, h) => 2 * (w + h); // arrow
console.log(`The perimeter is: ${perim(6, 6)}`);

// // Scope & Closures
// // let/const are block‑scoped. Closures remember outer vars.
// function makeCounter() {
//   let n = 0;
//   return () => ++n;
// }
