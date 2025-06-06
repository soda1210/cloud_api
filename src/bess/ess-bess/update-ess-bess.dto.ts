import { PartialType } from '@nestjs/swagger';
import { EssBess } from './ess-bess.entity';

export class UpdateEssBessDto extends PartialType(EssBess) {}