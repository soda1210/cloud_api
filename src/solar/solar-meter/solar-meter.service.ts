import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SolarMeter } from './solar-meter.entity';
import { SolarService } from 'src/solar/solar.service';

@Injectable()
export class SolarMeterService extends SolarService<SolarMeter> {
  constructor(@InjectRepository(SolarMeter) repo: Repository<SolarMeter>) {
    super(repo, 'Meter_ID');
  }
}