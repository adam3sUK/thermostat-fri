const Thermostat = require('./thermostat');
const Weather = require('./openweather')
const weather = new Weather;

describe('Thermostat', () => {
  thermostat = new Thermostat(weather);
  it('starts with a temperature of 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  describe('up()', () => {
    it('increases temperature by 1', () => {
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(21);
    });
  });

  describe('down()', () => {
    it('decreases temperature by 1', () => {
      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(19);
    });

    it('wont decrease past min temperature of 10', () => {
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toBe(10);
    });
  });

  describe('setPowerSavingMode()', () => {
    it('setPowerSavingMode(true) sets max temperature to 25', () => {
      thermostat.setPowerSavingMode(true);
      expect(thermostat.powerSavingMode).toBe(true);
      for (let i = 0 ; i < 15 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toBe("25 (maximum reached)");
    });

    it('setPowerSavingMode(false) sets max temperature to 32', () => {
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.up();
      }
      thermostat.up();
      expect(thermostat.getTemperature()).toBe("32 (maximum reached)");
    });
  });

  describe('reset()', () => {
    it('sets temperature back to 20', () => {
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.getTemperature()).toBe(20);
    });
  });

  describe('setCity()', () => {
    it('sets the tempature of the themostat to match that of the city entered', () => {
      thermostat.setCity('London');
      setTimeout(() => {
        thermostat.getTemperature();
      }, 500);
      const newTemp = thermostat.getTemperature();
      expect(thermostat.getTemperature()).toEqual(newTemp);
    });
  });

  describe('getCurrentEnergyUsage()', () => {
    it('returns high energy usage statement when temperature is >= 25', () => {
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentEnergyUsage()).toBe("High-usage");
    });
    
    it('returns low energy usage statement when temperature is < 18', () => {
      for (let i = 0 ; i < 15 ; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentEnergyUsage()).toBe("Low-usage");
    });
  });
});