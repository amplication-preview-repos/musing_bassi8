import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type TransportDetailCreateInput = {
  invoice?: InvoiceWhereUniqueInput | null;
  scheduleDate?: Date | null;
  transportationMode?: "Option1" | null;
};
