class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemperature = 25;
    this.minTemperature = 10;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSavingMode == false) {
      return this.temperature += 1;
    }
    else if (this.powerSavingMode == true && this.temperature < this.maxTemperature) {
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
    if (this.temperature < 18)
    {
      return "Low-usage";
    }

    else if (this.temperature <= 25)
    {
      return "Medium-usage";
    }

    else
    {
      return "High-usage";
    }
  }
}

module.exports = Thermostat;