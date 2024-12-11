import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutInvoicesInput } from "./PaymentCreateNestedManyWithoutInvoicesInput";
import { TransportDetailCreateNestedManyWithoutInvoicesInput } from "./TransportDetailCreateNestedManyWithoutInvoicesInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  invoiceNumber?: string | null;
  payments?: PaymentCreateNestedManyWithoutInvoicesInput;
  transportDetails?: TransportDetailCreateNestedManyWithoutInvoicesInput;
};
