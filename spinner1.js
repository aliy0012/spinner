process.stdout.write('hello from spinner1.js... \n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 150);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 350);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 550);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 750);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 950);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1150);

setTimeout(() => {
  process.stdout.write('\r-   ');
},1350);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1550);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1750);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 2000);

setTimeout(() => {
  process.stdout.write('\r-   ');
},2200);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 2400);

setTimeout(() => {
  process.stdout.write('\r|   \n');
}, 2600);