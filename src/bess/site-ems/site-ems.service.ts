import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SiteEms } from './site-ems.entity';
import { BessService } from 'src/bess/bess.service';

@Injectable()
export class SiteEmsService extends BessService<SiteEms> {
  constructor(@InjectRepository(SiteEms) repo: Repository<SiteEms>) {
    super(repo, 'EMS_ID');
  }
}
