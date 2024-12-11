import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { TransportDetailListRelationFilter } from "../transportDetail/TransportDetailListRelationFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceNumber?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  transportDetails?: TransportDetailListRelationFilter;
};
