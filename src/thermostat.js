function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype.showTemp = function() {
   return this._temperature;
}
