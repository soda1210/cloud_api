import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { BessController } from 'src/bess/bess.controller';
import { EssMeterService } from './ess-meter.service';
import { EssMeter } from './ess-meter.entity';
import { UpdateEssMeterDto } from './update-ess-meter.dto';

@Controller('api/v1/bess/ess-meter')
export class EssMeterController extends BessController<EssMeter> {
  constructor(service: EssMeterService) {
    super(service);
  }

  @Put(':id') 
  @ApiBody({ type: UpdateEssMeterDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<EssMeter>,
  ) {
    return this.baseService.update(id, updateDto);
    }

}