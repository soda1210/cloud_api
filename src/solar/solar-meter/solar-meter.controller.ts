import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { SolarController } from 'src/solar/solar.controller';
import { SolarMeterService } from './solar-meter.service';
import { SolarMeter } from './solar-meter.entity';
import { UpdateSolarMeterDto } from './update-solar-meter.dto';

@Controller('api/v1/solar/solar-meter')
export class SolarMeterController extends SolarController<SolarMeter> {
  constructor(service: SolarMeterService) {
    super(service);
  }


  @Put(':id') 
  @ApiBody({ type: UpdateSolarMeterDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<SolarMeter>,
  ) {
    return this.solarService.update(id, updateDto);
    }

}