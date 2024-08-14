const PaymentContext = require('./paymentContext');
const CreditCardPayment = require('./creditCardPayment');
const PayPalPayment = require('./payPalPayment');

// User selects a payment method
const selectedPaymentMethod = new PayPalPayment(); // or new CreditCardPayment()

const paymentContext = new PaymentContext(selectedPaymentMethod);
paymentContext.executePayment(100); // Process payment of $100
