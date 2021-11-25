const apiKey = require('./apikey');
const got = require('got');

class Weather {
  fetchWeatherData = (city, callback) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`; 
    got(apiUrl).then((response) => {
      callback(response.body);
    });
  }
}

module.exports = Weather, apiKey;

// const weather = new Weather();

// weather.fetchWeatherData('Manchester', (weatherData) => {
//   console.log(JSON.parse(weatherData));
// })