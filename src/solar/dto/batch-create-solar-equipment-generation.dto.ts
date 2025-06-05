import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateSolarEquipmentGenerationDto } from './create-solar-equipment-generation.dto';

export class BatchCreateSolarEquipmentGenerationDto {
  @ApiProperty({
    description: '批次資料列表',
    type: [CreateSolarEquipmentGenerationDto],
    example: [
      {
        generationId: 1001,
        solarSiteId: 2001,
        locationId: 3001,
        equipmentId: 4001,
        dataTime: '2024-01-15T10:30:00.000Z',
        serialNumber: 'SN123456789',
        generationPDaily: 25.75,
        generationPAll: 15000,
        sunshineMeter: 8.523,
        sunshineMeterAvg: 7.852,
        errorCode: null,
      },
    ],
  })
  @IsArray()
  @ArrayMinSize(1, { message: '至少需要一筆資料' })
  @ValidateNested({ each: true })
  @Type(() => CreateSolarEquipmentGenerationDto)
  data: CreateSolarEquipmentGenerationDto[];
}
