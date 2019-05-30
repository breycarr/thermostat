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
    expect( function(){ thermostat.down(11); } ).toThrow("Temperature can't go below 10!")
  });
  it('if power saving mode is on, max temperature should be 25', function() {
    var thermostat = new Thermostat();
    expect( function(){ thermostat.up(6); } ).toThrow("Temperature can't go above 25 in power save!")
  });
});
