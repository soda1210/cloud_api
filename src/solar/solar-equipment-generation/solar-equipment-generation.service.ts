import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SolarEquipmentGeneration } from './solar-equipment-generation.entity';
import { SolarService } from 'src/solar/solar.service';

@Injectable()
export class SolarEquipmentGenerationService extends SolarService<SolarEquipmentGeneration> {
  constructor(@InjectRepository(SolarEquipmentGeneration) repo: Repository<SolarEquipmentGeneration>) {
    super(repo, 'Generation_ID');
  }
}