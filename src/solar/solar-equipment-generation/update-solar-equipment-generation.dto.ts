import { PartialType } from '@nestjs/swagger';
import { SolarEquipmentGeneration } from './solar-equipment-generation.entity';

export class UpdateSolarEquipmentGenerationDto extends PartialType(SolarEquipmentGeneration) {}