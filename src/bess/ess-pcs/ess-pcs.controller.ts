import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { BessController } from 'src/bess/bess.controller';
import { EssPcsService } from './ess-pcs.service';
import { EssPcs } from './ess-pcs.entity';
import { UpdateEssPcsDto } from './update-ess-pcs.dto';

@Controller('api/v1/bess/ess-pcs')
export class EssPcsController extends BessController<EssPcs> {
  constructor(service: EssPcsService) {
    super(service);
  }

 @Put(':id') 
@ApiBody({ type: UpdateEssPcsDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<EssPcs>,
  ) {
    return this.baseService.update(id, updateDto);
    }
}

