// const readlineSync = require('readline-sync');

// var userName = readlineSync.question('What is your name? ');
// console.log(`Welcome ${userName}`);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (userName) => {
  console.log(`Welcome ${userName}`);
  rl.close();
});

console.log("Hint: It might be Adam");