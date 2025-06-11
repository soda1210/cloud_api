import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SolarSiteGeneration } from './solar-site-generation.entity';
import { SolarService } from 'src/solar/solar.service';

@Injectable()
export class SolarSiteGenerationService extends SolarService<SolarSiteGeneration> {
  constructor(@InjectRepository(SolarSiteGeneration) repo: Repository<SolarSiteGeneration>) {
    super(repo, 'Generation_ID');
  }
}