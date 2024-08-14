class PaymentContext {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    executePayment(amount) {
      this.strategy.executePayment(amount);
    }
  }
  
  module.exports = PaymentContext;
  