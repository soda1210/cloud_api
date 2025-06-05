import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EssMeter } from './ess-meter.entity';
import { BessService } from 'src/bess/bess.service';

@Injectable()
export class EssMeterService extends BessService<EssMeter> {
  constructor(@InjectRepository(EssMeter) repo: Repository<EssMeter>) {
    super(repo);
  }
}