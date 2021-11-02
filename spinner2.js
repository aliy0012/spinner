process.stdout.write('hello from spinner2.js... \n');



let arr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r| \n"];
let delay = 1000;

for (let element of arr){
  setTimeout(() => {
    process.stdout.write(element);
  }, delay);
  delay += 200;
}

