import { TransportDetailWhereInput } from "./TransportDetailWhereInput";
import { TransportDetailOrderByInput } from "./TransportDetailOrderByInput";

export type TransportDetailFindManyArgs = {
  where?: TransportDetailWhereInput;
  orderBy?: Array<TransportDetailOrderByInput>;
  skip?: number;
  take?: number;
};
