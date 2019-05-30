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
});
