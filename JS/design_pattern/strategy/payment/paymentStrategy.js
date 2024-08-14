// Strategy Interface
class PaymentStrategy {
    executePayment(amount) {
      throw new Error('Method "executePayment" should be implemented.');
    }
  }
  
  module.exports = PaymentStrategy;
  