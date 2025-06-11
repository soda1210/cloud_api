import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { SolarController } from 'src/solar/solar.controller';
import { SolarSiteGenerationService } from './solar-site-generation.service';
import { SolarSiteGeneration } from './solar-site-generation.entity';
import { UpdateSolarSiteGenerationDto } from './update-solar-site-generation.dto';

@Controller('api/v1/solar/solar-site-generation')
export class SolarSiteGenerationController extends SolarController<SolarSiteGeneration> {
  constructor(service: SolarSiteGenerationService) {
    super(service);
  }


  @Put(':id') 
  @ApiBody({ type: UpdateSolarSiteGenerationDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<SolarSiteGeneration>,
  ) {
    return this.solarService.update(id, updateDto);
    }

}