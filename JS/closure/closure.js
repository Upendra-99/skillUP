function createCounter() {
    let count = 0; // This is the outer function's variable
    console.log("HERE1--->",count)
    return function() { // This inner function is a closure
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  