const readlineSync = require('readline-sync');
const Thermostat = require('./thermostat');
thermostat = new Thermostat();

while (true) {
console.log(`Temperature is ${thermostat.getTemperature()}`)
var userInput = readlineSync.question('Enter command > ');

if (userInput == 'up') {thermostat.up();}
else if (userInput == 'down') {thermostat.down();}
else if (userInput == 'psm on') {thermostat.setPowerSavingMode(true);}
else if (userInput == 'psm off') {thermostat.setPowerSavingMode(false);}
else if (userInput == 'exit') {break;}
}