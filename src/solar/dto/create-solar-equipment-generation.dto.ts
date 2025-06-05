import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsDateString,
  IsPositive,
  IsDecimal,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
//這邊是在Schemas裡面
export class CreateSolarEquipmentGenerationDto {
  @ApiProperty({
    description: '發電機 ID',
    example: 1001,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  generationId: number;

  @ApiProperty({
    description: '太陽能案場 ID',
    example: 2001,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  solarSiteId: number;

  @ApiProperty({
    description: '位置 ID',
    example: 3001,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  locationId: number;

  @ApiProperty({
    description: '設備 ID',
    example: 4001,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  equipmentId: number;

  @ApiProperty({
    description: '資料時間 (ISO 8601 格式)',
    example: '2024-01-15T10:30:00.000Z',
  })
  @IsNotEmpty()
  @IsDateString()
  dataTime: string;

  @ApiProperty({
    description: '設備序號',
    example: 'SN123456789',
    required: false,
  })
  @IsOptional()
  @IsString()
  serialNumber?: string;

  @ApiProperty({
    description: '日發電量 (kWh)',
    example: 25.75,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  generationPDaily?: number;

  @ApiProperty({
    description: '累計發電量 (kWh)',
    example: 15000,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 0 })
  generationPAll?: number;

  @ApiProperty({
    description: '日照計數值',
    example: 8.523,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 3 })
  sunshineMeter?: number;

  @ApiProperty({
    description: '平均日照計數值',
    example: 7.852,
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 3 })
  sunshineMeterAvg?: number;

  @ApiProperty({
    description: '錯誤代碼',
    example: 'E001,E002',
    required: false,
  })
  @IsOptional()
  @IsString()
  errorCode?: string;
}
