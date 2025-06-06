import { Controller, Put, Param, Body } from '@nestjs/common';
import { BessController } from 'src/bess/bess.controller';
import { SiteEmsService } from './site-ems.service';
import { SiteEms } from './site-ems.entity';

@Controller('api/v1/bess/site-ems')
export class SiteEmsController extends BessController<SiteEms> {
  constructor(service: SiteEmsService) {
    super(service);
  }

 @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<SiteEms>,
  ) {
    return this.baseService.update(id, updateDto);
    }
}