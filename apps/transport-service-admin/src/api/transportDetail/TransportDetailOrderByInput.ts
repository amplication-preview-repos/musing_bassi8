import { SortOrder } from "../../util/SortOrder";

export type TransportDetailOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  scheduleDate?: SortOrder;
  transportationMode?: SortOrder;
  updatedAt?: SortOrder;
};
