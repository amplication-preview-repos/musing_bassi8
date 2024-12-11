import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransportDetailServiceBase } from "./base/transportDetail.service.base";

@Injectable()
export class TransportDetailService extends TransportDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
