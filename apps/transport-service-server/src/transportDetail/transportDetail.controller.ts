import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransportDetailService } from "./transportDetail.service";
import { TransportDetailControllerBase } from "./base/transportDetail.controller.base";

@swagger.ApiTags("transportDetails")
@common.Controller("transportDetails")
export class TransportDetailController extends TransportDetailControllerBase {
  constructor(protected readonly service: TransportDetailService) {
    super(service);
  }
}
