import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "invoiceNumber";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.invoiceNumber?.toString() || String(record.id);
};
