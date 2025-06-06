import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EssBess } from './ess-bess.entity';
import { BessService } from 'src/bess/bess.service';

@Injectable()
export class EssBessService extends BessService<EssBess> {
  constructor(    @InjectRepository(EssBess) repository: Repository<EssBess>  ) {
    super(repository, 'Battery_ID');
  }
}