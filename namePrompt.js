const readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('What is your name? ');
console.log(`Welcome ${userName}`);