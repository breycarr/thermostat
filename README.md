# Thermostat

The purpose of this project is to build a thermostat in JavaScript.

---

## Specification

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
* (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

---

User story 1

```
As a user who wants to use the Thermostat
So that the thermostat always starts at the same temperature
I want the thermostat to start at 20 degrees
```

Object | Message
-|-
thermostat | show
 | Output should be 20 degrees

Console test:
```js
var thermostat = new Thermostat()
thermostat.showTemp()

// output should be 20
```
