import { Put, Param, Body } from '@nestjs/common';
import { SolarService } from './solar.service';
import { ObjectLiteral } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Solar') // 對應到 Swagger 的 /BESS 分組
export class SolarController<T extends ObjectLiteral> {
  constructor(protected readonly solarService: SolarService<T>) {}
  
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDto: Partial<T>) {
    return await this.solarService.update(id, updateDto);
  }
}
