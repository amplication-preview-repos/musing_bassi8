import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phoneNumber?: string | null;
};
