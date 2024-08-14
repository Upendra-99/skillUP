const PaymentContext = require('./paymentContext');
const CreditCardPayment = require('./creditCardPayment');
const PayPalPayment = require('./payPalPayment');
const BankTransferPayment = require('./bankTransferPayment');

// Function to determine payment strategy based on user profile
function determinePaymentStrategy(user) {
  if (user.hasCreditCard) {
    return new CreditCardPayment();
  } else if (user.prefersPayPal) {
    return new PayPalPayment();
  } else {
    return new BankTransferPayment();
  }
}

const user = { hasCreditCard: false, prefersPayPal: false };
const selectedPaymentMethod = determinePaymentStrategy(user);

const paymentContext = new PaymentContext(selectedPaymentMethod);
paymentContext.executePayment(100); // Process payment of $100
