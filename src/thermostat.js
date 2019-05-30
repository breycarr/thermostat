function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.showTemp = function() {
   return this._temperature;
}

Thermostat.prototype.up = function(increase = 1) {
  this._temperature = this._temperature + increase;
}

Thermostat.prototype.down = function(decrease = 1) {
  this._temperature = this._temperature - decrease;
}
