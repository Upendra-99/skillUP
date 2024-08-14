// Mix-in constructor function 
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
  
  // Base class
  function Car() {
    this.drive = function() {
      console.log("Driving...");
    };
  }
  
  // Adding mix-ins to an object
  const myCar = new Car();
  Object.assign(myCar, new GPS(), new Heater());
  
  // Using the mixed-in methods
  myCar.locate(); // Output: Locating...
  myCar.heat();   // Output: Heating...
  myCar.drive();  // Output: Driving...
  