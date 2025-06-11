import { PartialType } from '@nestjs/swagger';
import { SolarSiteGeneration } from './solar-site-generation.entity';

export class UpdateSolarSiteGenerationDto extends PartialType(SolarSiteGeneration) {}