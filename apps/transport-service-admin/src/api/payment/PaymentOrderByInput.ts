import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  paymentDate?: SortOrder;
  paymentMethod?: SortOrder;
  updatedAt?: SortOrder;
};
