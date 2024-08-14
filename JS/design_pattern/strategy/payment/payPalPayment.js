const PaymentStrategy = require('./paymentStrategy');

// Concrete Strategy 2: PayPal Payment
class PayPalPayment extends PaymentStrategy {
  executePayment(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
    // Add PayPal payment logic here
  }
}

module.exports = PayPalPayment;
