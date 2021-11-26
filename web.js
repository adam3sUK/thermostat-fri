const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat');
const Weather = require('./openweather');
const weather = new Weather;
const thermostat = new Thermostat(weather);



app.get('/', (req, res) => {
  res.send('Hello, express!')
});


app.route('/temperature')
  .get((req, res) => {
    res.send(`${thermostat.getTemperature()}`)
  })
  .post((req, res) => {
    res.send("POST request to counter page")
  })
  .delete((req, res) => {
    thermostat.reset();
    res.send(`Temperature reset to ${thermostat.getTemperature()}`)
  })

app.route('/up')
  .post((req, res) => {
    thermostat.up();
    res.send(`Temperature increased: ${thermostat.getTemperature()}`)
  })

app.route('/down')
  .post((req, res) => {
    thermostat.down();
    res.send(`Temperature decreased: ${thermostat.getTemperature()}`)
})


console.log(`Server listening on ${port}`);
app.listen(port);