import { PartialType } from '@nestjs/swagger';
import { SolarMeter } from './solar-meter.entity';

export class UpdateSolarMeterDto extends PartialType(SolarMeter) {}