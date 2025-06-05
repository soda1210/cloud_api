import { Controller } from '@nestjs/common';
import { BessController } from 'src/bess/bess.controller';
import { EssBessService } from './ess-bess.service';
import { EssBess } from './ess-bess.entity';

@Controller('api/v1/bess/ess-bess')
export class EssBessController extends BessController<EssBess> {
  constructor(service: EssBessService) {
    super(service);
  }
}
