import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { BessController } from 'src/bess/bess.controller';
import { EssBessService } from './ess-bess.service';
import { EssBess } from './ess-bess.entity';
import { UpdateEssBessDto } from './update-ess-bess.dto';

@Controller('api/v1/bess/ess-bess')
export class EssBessController extends BessController<EssBess> {
  constructor(service: EssBessService) {
    super(service);
  }

  
   @Put(':id') 
   @ApiBody({ type: UpdateEssBessDto }) // 這行讓 Swagger 顯示 Request body
    async update(
      @Param('id') id: number,
      @Body() updateDto: Partial<EssBess>,
    ) {
      return this.baseService.update(id, updateDto);
      }
}
