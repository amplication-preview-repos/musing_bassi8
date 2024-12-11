import * as graphql from "@nestjs/graphql";
import { TransportDetailResolverBase } from "./base/transportDetail.resolver.base";
import { TransportDetail } from "./base/TransportDetail";
import { TransportDetailService } from "./transportDetail.service";

@graphql.Resolver(() => TransportDetail)
export class TransportDetailResolver extends TransportDetailResolverBase {
  constructor(protected readonly service: TransportDetailService) {
    super(service);
  }
}
