import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { BessController } from 'src/bess/bess.controller';
import { SiteEmsService } from './site-ems.service';
import { SiteEms } from './site-ems.entity';
import { UpdateSiteEmsDto } from './update-site-ems.dto';

@Controller('api/v1/bess/site-ems')
export class SiteEmsController extends BessController<SiteEms> {
  constructor(service: SiteEmsService) {
    super(service);
  }

 @Put(':id') 
 @ApiBody({ type: UpdateSiteEmsDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<SiteEms>,
  ) {
    return this.baseService.update(id, updateDto);
    }
}