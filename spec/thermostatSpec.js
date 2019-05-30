describe("Thermostat", function() {

  it("should start at 20 degrees", function() {
    var thermostat = new Thermostat();
    expect(thermostat.showTemp()).toEqual(20);
  });
  it('should increase the temperature', function() {
    var thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.showTemp()).toEqual(21);
  });
  it("should decrease the temperature", function(){
    var thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.showTemp()).toEqual(19);
  });
  it("should throw an error if temperature would go below 10", function(){
    var thermostat = new Thermostat();
    expect( function(){ thermostat.down(11); } ).toThrow("Temperature can't go below 10!");
  });
  it('should allow the max temperature to be 25 if the power saving is on', function() {
    var thermostat = new Thermostat();
    expect( function(){ thermostat.up(6); } ).toThrow("Temperature can't go above 25!");
  });
  it('should increase the max temperature to be 32 if the power saving is off', function() {
    var thermostat = new Thermostat();
    thermostat.powerSaveSwitch();
    expect( function(){ thermostat.up(6); } ).not.toThrowError();
  });
  it('should throw an error if the temperature goes above 32', function() {
    var thermostat = new Thermostat();
    thermostat.powerSaveSwitch();
    expect( function(){ thermostat.up(13); } ).toThrow("Temperature can't go above 32!");
  });
  it("should allow user to reset temperature to starting temperature", function(){
    var thermostat = new Thermostat();
    thermostat.up();
    thermostat.reset()
    expect(thermostat.showTemp()).toEqual(20);
  });
  it("should show medium usage, between 18 and 25 degrees,", function(){
    var thermostat = new Thermostat();
    expect(thermostat.usage()).toEqual("medium");
  });
  it("should show low usage is less than 18,", function(){
    var thermostat = new Thermostat();
    thermostat.down(3)
    expect(thermostat.usage()).toEqual("low");
  });
  it("should show high usage is greater than 25,", function(){
    var thermostat = new Thermostat();
    thermostat.powerSaveSwitch()
    thermostat.up(6)
    expect(thermostat.usage()).toEqual("high");
  });
});
