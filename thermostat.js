const got = require('got');

class Thermostat {
  constructor(weather) {
    this.temperature = 20;
    this.maxTemperatureLow = 25;
    this.maxTemperatureHigh = 32;
    this.minTemperature = 10;
    this.powerSavingMode = true;
    this.weather = weather;
  }

  setCity(city) {
    this.weather.fetchWeatherData(city, (weatherData) => {
      this.temperature = weatherData;
      return weatherData;
    })
  }

  getTemperature() {
    if (this.powerSavingMode == true && this.temperature == this.maxTemperatureLow) {
    return `${this.temperature} (maximum reached)`;}
    else if (this.powerSavingMode == false && this.temperature == this.maxTemperatureHigh) {
    return `${this.temperature} (maximum reached)`;}
    else {return this.temperature}
  }

  up() {
    if (this.powerSavingMode == false && this.temperature < this.maxTemperatureHigh) {
      return this.temperature += 1;
    }
    else if (this.powerSavingMode == true && this.temperature < this.maxTemperatureLow) {
      return this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > this.minTemperature) {
      return this.temperature -= 1;
    }
  }

  setPowerSavingMode(status) {
    this.powerSavingMode = status;
  }

  reset() {
    this.temperature = 20;
  }

  getCurrentEnergyUsage() {
    if (this.temperature < 18) {return "Low-usage";}
    else if (this.temperature <= 25) {return "Medium-usage";}
    else {return "High-usage";}
  }
}


module.exports = Thermostat;