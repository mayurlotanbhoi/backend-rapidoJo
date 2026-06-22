export interface PurchaseDto {
  userId: string;
  courseId: string;
  subscriptionId?: string;
  amount?: number;
  paymentStatus?: "pending" | "paid" | "failed" | "refunded";
  transactionId?: string;
  purchasedAt?: Date;
}
