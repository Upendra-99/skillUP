const PaymentStrategy = require('./paymentStrategy');

// Concrete Strategy 1: Credit Card Payment
class CreditCardPayment extends PaymentStrategy {
  executePayment(amount) {
    console.log(`Processing credit card payment of $${amount}`);
    // Add credit card payment logic here
  }
}

module.exports = CreditCardPayment;
