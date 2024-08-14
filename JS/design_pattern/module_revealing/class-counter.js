class CounterModule {
    constructor() {
      // Private variables
      this._count = 0;
    }
  
    // Private method to update the display
    _updateDisplay() {
      document.getElementById('counter').textContent = this._count;
    }
  
    // Public method to increment the counter
    increment() {
      this._count++;
      this._updateDisplay();
    }
  
    // Public method to decrement the counter
    decrement() {
      if (this._count > 0) {
        this._count--;
        this._updateDisplay();
      }
    }
  
    // Public method to reset the counter
    reset() {
      this._count = 0;
      this._updateDisplay();
    }
  
    // Public method to initialize the event listeners
    init() {
      document.getElementById('incrementBtn').addEventListener('click', () => this.increment());
      document.getElementById('decrementBtn').addEventListener('click', () => this.decrement());
      document.getElementById('resetBtn').addEventListener('click', () => this.reset());
    }
  }
  
  // Initialize the module when the page is fully loaded
  window.onload = function() {
    const counter = new CounterModule();
    counter.init();
  };
  