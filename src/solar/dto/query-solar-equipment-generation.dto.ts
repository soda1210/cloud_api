import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsNumber,
  IsDateString,
  IsString,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

//這邊是在get裡面

export class QuerySolarEquipmentGenerationDto {
  @ApiPropertyOptional({
    description: '發電機 ID',
    example: 1001,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  generationId?: number;

  @ApiPropertyOptional({
    description: '太陽能案場 ID',
    example: 2001,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  solarSiteId?: number;

  @ApiPropertyOptional({
    description: '位置 ID',
    example: 3001,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  locationId?: number;

  @ApiPropertyOptional({
    description: '設備 ID',
    example: 4001,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  equipmentId?: number;

  @ApiPropertyOptional({
    description: '開始日期 (ISO 8601 格式)',
    example: '2024-01-01T00:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({
    description: '結束日期 (ISO 8601 格式)',
    example: '2024-01-31T23:59:59.999Z',
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({
    description: '設備序號',
    example: 'SN123456789',
  })
  @IsOptional()
  @IsString()
  serialNumber?: string;

  @ApiPropertyOptional({
    description: '頁數 (從 1 開始)',
    example: 1,
    minimum: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    description: '每頁筆數',
    example: 10,
    minimum: 1,
    maximum: 100,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number = 10;
}
