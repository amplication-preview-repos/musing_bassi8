import { Module } from "@nestjs/common";
import { TransportDetailModuleBase } from "./base/transportDetail.module.base";
import { TransportDetailService } from "./transportDetail.service";
import { TransportDetailController } from "./transportDetail.controller";
import { TransportDetailResolver } from "./transportDetail.resolver";

@Module({
  imports: [TransportDetailModuleBase],
  controllers: [TransportDetailController],
  providers: [TransportDetailService, TransportDetailResolver],
  exports: [TransportDetailService],
})
export class TransportDetailModule {}
