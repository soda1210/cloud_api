import { Put, Param, Body } from '@nestjs/common';
import { BessService } from './bess.service';
import { ObjectLiteral } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BESS') // 對應到 Swagger 的 /BESS 分組
export class BessController<T extends ObjectLiteral> {
  constructor(protected readonly baseService: BessService<T>) {}
  
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDto: Partial<T>) {
    return await this.baseService.update(id, updateDto);
  }
}
