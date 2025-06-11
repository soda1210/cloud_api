import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { SolarMeter } from './solar-meter/solar-meter.entity';
import { SolarMeterService } from './solar-meter/solar-meter.service';
import { SolarMeterController } from './solar-meter/solar-meter.controller';

import { SolarEquipmentGeneration } from './solar-equipment-generation/solar-equipment-generation.entity';
import { SolarEquipmentGenerationService } from './solar-equipment-generation/solar-equipment-generation.service';
import { SolarEquipmentGenerationController } from './solar-equipment-generation/solar-equipment-generation.controller';

import { SolarSiteGeneration } from './solar-site-generation/solar-site-generation.entity';
import { SolarSiteGenerationService } from './solar-site-generation/solar-site-generation.service';
import { SolarSiteGenerationController } from './solar-site-generation/solar-site-generation.controller';

// import { EssMeter } from './ess-meter/ess-meter.entity';
// import { EssMeterService } from './ess-meter/ess-meter.service';
// import { EssMeterController } from './ess-meter/ess-meter.controller';


@Module({
  imports: [TypeOrmModule.forFeature([ SolarMeter, SolarEquipmentGeneration, SolarSiteGeneration])],
  providers: [SolarMeterService, SolarEquipmentGenerationService, SolarSiteGenerationService],
  controllers: [SolarMeterController, SolarEquipmentGenerationController, SolarSiteGenerationController],
})
export class SolarModule {}
