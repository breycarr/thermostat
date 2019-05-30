function Thermostat() {
  this._temperature = 20;
  this._minTemp = 10;
}

Thermostat.prototype.showTemp = function() {
   return this._temperature;
}

Thermostat.prototype.up = function(increase = 1) {
  this._temperature = this._temperature + increase;
}

Thermostat.prototype.down = function(decrease = 1) {
  if (this._temperature - decrease < this._minTemp) throw "Temperature can't go below 10!"
  this._temperature = this._temperature - decrease;
}
