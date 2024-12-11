import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type TransportDetailUpdateInput = {
  invoice?: InvoiceWhereUniqueInput | null;
  scheduleDate?: Date | null;
  transportationMode?: "Option1" | null;
};
