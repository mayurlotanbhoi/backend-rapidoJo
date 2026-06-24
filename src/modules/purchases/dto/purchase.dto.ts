export interface PurchaseDto {
  userId?: string;
  courseId?: string;
  subscriptionId?: string;
  applicantName?: string;
  applicantEmail?: string;
  courseName?: string;
  paymentId?: string;
  utr?: string;
  screenshot?: string;
  amount?: number;
  paymentStatus?: "pending" | "submitted" | "approved" | "rejected" | "paid" | "failed" | "refunded";
  enrollmentStatus?: "pending" | "approved" | "rejected";
  rejectionReason?: string;
  verifiedAt?: Date | null;
  verifiedBy?: string | null;
  transactionId?: string;
  purchasedAt?: Date;
}
