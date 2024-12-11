import { TransportDetail as TTransportDetail } from "../api/transportDetail/TransportDetail";

export const TRANSPORTDETAIL_TITLE_FIELD = "id";

export const TransportDetailTitle = (record: TTransportDetail): string => {
  return record.id?.toString() || String(record.id);
};
