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

const weather = new Weather();

weather.fetchWeatherData('Manchester', (weatherData) => {
  console.log(JSON.parse(weatherData));
})


// const got = require('got');
//const apiKey = 'a793f0752d0998a7d22a32b35631d8d5'; // paste your API key here
// const city = 'London';
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

// let weatherData = null;

// got(apiUrl).then((response) => {
//   weatherData = JSON.parse(response.body);
//   console.log(`The weather today in ${weatherData.name} will be ${weatherData.weather[0].description}`);
// });

// console.log('Requesting weather data');