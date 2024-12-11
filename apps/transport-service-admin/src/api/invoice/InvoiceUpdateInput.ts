import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentUpdateManyWithoutInvoicesInput } from "./PaymentUpdateManyWithoutInvoicesInput";
import { TransportDetailUpdateManyWithoutInvoicesInput } from "./TransportDetailUpdateManyWithoutInvoicesInput";

export type InvoiceUpdateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  invoiceNumber?: string | null;
  payments?: PaymentUpdateManyWithoutInvoicesInput;
  transportDetails?: TransportDetailUpdateManyWithoutInvoicesInput;
};
