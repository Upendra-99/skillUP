function mixin(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}

function GPS() {
  this.locate = function() {
    console.log("Locating...");
  };
}

function Heater() {
  this.heat = function() {
    console.log("Heating...");
  };
}

class Car {
  constructor() {
    this.drive = () => {
      console.log("Driving...");
    };
  }
}

const myCar = new Car();
mixin(myCar, new GPS());
mixin(myCar, new Heater());

myCar.drive();
myCar.locate();
myCar.heat();
