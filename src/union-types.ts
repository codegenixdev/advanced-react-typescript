const PaymentStatus = {
  Pending: "pending",
  Successful: "successful",
  Failed: "failed",
  Refunded: "refunded",
} as const;

// Create type from the const object
type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

// Define payment interface
type Payment = {
  id: string;
  amount: number;
  status: PaymentStatus;
  createdAt: Date;
};

// Utility functions
const canRefund = (payment: Payment): boolean => {
  return payment.status === PaymentStatus.Successful;
};

// Usage example
const payment: Payment = {
  id: "pay_123",
  amount: 99.99,
  status: PaymentStatus.Successful,
  createdAt: new Date(),
};
