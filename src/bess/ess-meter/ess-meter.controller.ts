import { Controller } from '@nestjs/common';
import { BessController } from 'src/bess/bess.controller';
import { EssMeterService } from './ess-meter.service';
import { EssMeter } from './ess-meter.entity';

@Controller('api/v1/bess/ess-meter')
export class EssMeterController extends BessController<EssMeter> {
  constructor(service: EssMeterService) {
    super(service);
  }
}
