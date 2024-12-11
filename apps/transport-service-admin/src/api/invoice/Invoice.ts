import { Customer } from "../customer/Customer";
import { Payment } from "../payment/Payment";
import { TransportDetail } from "../transportDetail/TransportDetail";

export type Invoice = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  invoiceNumber: string | null;
  payments?: Array<Payment>;
  transportDetails?: Array<TransportDetail>;
  updatedAt: Date;
};
