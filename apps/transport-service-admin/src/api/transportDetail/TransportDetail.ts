import { Invoice } from "../invoice/Invoice";

export type TransportDetail = {
  createdAt: Date;
  id: string;
  invoice?: Invoice | null;
  scheduleDate: Date | null;
  transportationMode?: "Option1" | null;
  updatedAt: Date;
};
