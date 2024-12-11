import { StringFilter } from "../../util/StringFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransportDetailWhereInput = {
  id?: StringFilter;
  invoice?: InvoiceWhereUniqueInput;
  scheduleDate?: DateTimeNullableFilter;
  transportationMode?: "Option1";
};
