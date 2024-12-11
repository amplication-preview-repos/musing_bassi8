import { Invoice } from "../invoice/Invoice";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  invoice?: Invoice | null;
  paymentDate: Date | null;
  paymentMethod?: "Option1" | null;
  updatedAt: Date;
};
