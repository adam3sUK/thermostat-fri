const Thermostat = require('./thermostat');
/*
thermostat.reset();
thermostat.getTemperature(); // should be back to 20
*/

describe('Thermostat', () => {
  it('starts with a temperature of 20', () => {
    thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  describe('up()', () => {
    it('increases temperature by 1', () => {
      thermostat = new Thermostat();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(21);
    });
  });

  describe('down()', () => {
    it('decreases temperature by 1', () => {
      thermostat = new Thermostat();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(19);
    });

    it('wont decrease past min temperature of 10', () => {
      thermostat = new Thermostat();
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toBe(10);
    });
  });

  describe('setPowerSavingMode()', () => {
    it('setPowerSavingMode(true) sets max temperature to 25', () => {
      thermostat = new Thermostat();
      thermostat.setPowerSavingMode(true);
      expect(thermostat.powerSavingMode).toBe(true);
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toBe(25);
    });

    it('setPowerSavingMode(false) removes max temperature cap', () => {
      thermostat = new Thermostat();
      thermostat.setPowerSavingMode(true);
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }
      thermostat.setPowerSavingMode(false);
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(26);
    });
  });

  describe('reset()', () => {
    it('sets temperature back to 20', () => {
      thermostat = new Thermostat();
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.getTemperature()).toBe(20);
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