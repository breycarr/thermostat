describe("Thermostat", function() {
  it("should start at 20 degrees", function() {
    var thermostat = new Thermostat();
    expect(thermostat.showTemp()).toEqual(20);
  });
});
