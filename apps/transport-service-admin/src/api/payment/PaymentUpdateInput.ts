import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  invoice?: InvoiceWhereUniqueInput | null;
  paymentDate?: Date | null;
  paymentMethod?: "Option1" | null;
};
