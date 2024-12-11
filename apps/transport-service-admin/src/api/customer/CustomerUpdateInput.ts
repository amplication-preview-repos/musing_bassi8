import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  invoices?: InvoiceUpdateManyWithoutCustomersInput;
  name?: string | null;
  phoneNumber?: string | null;
};
