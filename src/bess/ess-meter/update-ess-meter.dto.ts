import { PartialType } from '@nestjs/swagger';
import { EssMeter } from './ess-meter.entity';

export class UpdateEssMeterDto extends PartialType(EssMeter) {}