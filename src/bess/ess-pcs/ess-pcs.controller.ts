import { Controller } from '@nestjs/common';
import { BessController } from 'src/bess/bess.controller';
import { EssPcsService } from './ess-pcs.service';
import { EssPcs } from './ess-pcs.entity';

@Controller('api/v1/bess/ess-pcs')
export class EssPcsController extends BessController<EssPcs> {
  constructor(service: EssPcsService) {
    super(service);
  }
}
