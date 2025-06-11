import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { SolarController } from 'src/solar/solar.controller';
import { SolarEquipmentGenerationService } from './solar-equipment-generation.service';
import { SolarEquipmentGeneration } from './solar-equipment-generation.entity';
import { UpdateSolarEquipmentGenerationDto } from './update-solar-equipment-generation.dto';

@Controller('api/v1/solar/solar-equipment-generation')
export class SolarEquipmentGenerationController extends SolarController<SolarEquipmentGeneration> {
  constructor(service: SolarEquipmentGenerationService) {
    super(service);
  }


  @Put(':id') 
  @ApiBody({ type: UpdateSolarEquipmentGenerationDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<SolarEquipmentGeneration>,
  ) {
    return this.solarService.update(id, updateDto);
    }

}