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

---

## User Story 1
```
As a user who wants to use the Thermostat
So that the thermostat always starts at the same temperature
I want the thermostat to start at 20 degrees
```
Object | Message
-|-
thermostat | showTemp

Output should be 20 degrees

### Console test:
```js
var thermostat = new Thermostat()
thermostat.showTemp()

// output should be 20
```
---
## User Story 2
```
As a User
So that I can turn the temperature up when I'm cold
I want to be able increase the temperature
```
Object | Message
-|-
thermostat | up

### Console test:
```js
var thermostat = new Thermostat()
thermostat.showTemp()
// output is 20
thermostat.up()
thermostat.showTemp()
// output is 21
```
---
## User Story 3

```
As a User
So that I can turn down the temperature when I'm hot
I want to be able to decrease the temperature
```

Object | Message
-|-
thermostat | down

### Console test:
```js
var thermostat = new Thermostat()
thermostat.showTemp()
// output is 20
thermostat.down()
thermostat.showTemp()
// output is 19
```
----
## User Story 4

```
As a user
So that I am not too cold
I want the min temperature to not go below 10
```
Object | Message
-|-
thermostat | down

### Console test:
```js
var thermostat = new Thermostat()
thermostat.down(11)
```
----
## User Story 5
```
As a user
In order to reduce my electricity usage
If Power Saving Mode is turned on then the maximum temperature should not exceed 25 degrees
```
Object | Message
-|-
thermostat | up

### Console test:
```js
var thermostat = new Thermostat()
thermostat.up(6)
```
---
## User Story 6
```
As a user
Because I sometimes want to be even warmer
I want to be able to deactivate powersaving mode, and have a maximum temperature of 32
```
Object | Message
-|-
thermostat | up
thermostat | powerSaveSwitch

### Console test:
```js
var thermostat = new Thermostat()
thermostat.up(6)
thermostat.powerSaveSwitch()
thermostat.up(6)
thermostat.up(13)
```
---
## User Story 7
```
As a User
So I can return to the starting temperature
I would like a reset button
```
Object | Message
-|-
thermostat | reset

### Console test:
```js
var thermostat = new Thermostat()
thermostat.up()
thermostat.reset()
thermostat.showTemp()
```
---
## User Story 8
```
As a User
So I can check energy usage, I would like to know know high usage, medium
and low usage

```
Object | Message
-|-
thermostat | usage

### Console test:
```js
var thermostat = new Thermostat()
thermostat.usage()
