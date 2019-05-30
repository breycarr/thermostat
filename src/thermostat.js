function Thermostat() {
  this._temperature = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
  this._powerSave = true;
}

Thermostat.prototype.showTemp = function() {
   return this._temperature;
}

Thermostat.prototype.up = function(increase = 1) {
  if (this._temperature + increase > this._maxTemp) throw "Temperature can't go above " + this._maxTemp + "!";
  this._temperature = this._temperature + increase;
}

Thermostat.prototype.down = function(decrease = 1) {
  if (this._temperature - decrease < this._minTemp) throw "Temperature can't go below 10!";
  this._temperature = this._temperature - decrease;
}

Thermostat.prototype.powerSaveSwitch = function() {
  if (this._powerSave === true) {
    this._maxTemp = 32;
    this._powerSave = false;
  } else if (this._powerSave === false) {
    this._powerSave = true;
    this._maxTemp = 25;
  }
}
