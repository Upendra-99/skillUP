const PaymentStrategy = require('./paymentStrategy');

// Concrete Strategy 3: Bank Transfer Payment
class BankTransferPayment extends PaymentStrategy {
  executePayment(amount) {
    console.log(`Processing bank transfer payment of $${amount}`);
    // Add bank transfer payment logic here
  }
}

module.exports = BankTransferPayment;
