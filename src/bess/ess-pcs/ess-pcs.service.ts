import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EssPcs } from './ess-pcs.entity';
import { BessService } from 'src/bess/bess.service';

@Injectable()
export class EssPcsService extends BessService<EssPcs> {
  constructor(@InjectRepository(EssPcs) repo: Repository<EssPcs>) {
    super(repo, 'PCS_ID');
  }
}
