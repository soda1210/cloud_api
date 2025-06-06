import { PartialType } from '@nestjs/swagger';
import { EssPcs } from './ess-pcs.entity';

export class UpdateEssPcsDto extends PartialType(EssPcs) {}


