import { Invoice } from "../invoice/Invoice";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  invoices?: Array<Invoice>;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
