import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiParam,
} from '@nestjs/swagger';
import { SolarEquipmentService } from './solar-equipment.service';
import { CreateSolarEquipmentGenerationDto } from './dto/create-solar-equipment-generation.dto';
import { BatchCreateSolarEquipmentGenerationDto } from './dto/batch-create-solar-equipment-generation.dto';
import { QuerySolarEquipmentGenerationDto } from './dto/query-solar-equipment-generation.dto';
import { ApiKeyGuard } from '../auth/api-key.guard';

@ApiTags('Solar Equipment Generation')
@ApiSecurity('API-Key')
@UseGuards(ApiKeyGuard)
@Controller('solar-equipment')
export class SolarEquipmentController {
  constructor(private readonly solarEquipmentService: SolarEquipmentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: '建立單筆太陽能設備發電資料',
    description: '接收單筆太陽能設備的發電資料並儲存至資料庫',
  })
  @ApiResponse({
    status: 201,
    description: '資料建立成功',
    schema: {
      example: {
        historyId: 1,
        generationId: 1001,
        solarSiteId: 2001,
        locationId: 3001,
        equipmentId: 4001,
        dataTime: '2024-01-15T10:30:00.000Z',
        receivedTime: '2024-01-15T10:35:00.000Z',
        serialNumber: 'SN123456789',
        generationPDaily: 25.75,
        generationPAll: 15000,
        sunshineMeter: 8.523,
        sunshineMeterAvg: 7.852,
        errorCode: null,
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: '資料驗證失敗或建立失敗',
  })
  @ApiResponse({
    status: 401,
    description: 'API Key 驗證失敗',
  })
  async create(@Body() createDto: CreateSolarEquipmentGenerationDto) {
    return await this.solarEquipmentService.create(createDto);
  }

  @Post('batch')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: '批次建立太陽能設備發電資料',
    description: '接收多筆太陽能設備的發電資料並批次儲存至資料庫',
  })
  @ApiResponse({
    status: 201,
    description: '批次建立完成',
    schema: {
      example: {
        success: 8,
        failed: 2,
        results: [
          {
            index: 0,
            success: true,
            data: {
              historyId: 1,
              generationId: 1001,
              // ... 其他欄位
            },
          },
          {
            index: 1,
            success: false,
            error: '資料驗證失敗',
            originalData: {
              // ... 原始資料
            },
          },
        ],
      },
    },
  })
  async batchCreate(@Body() batchCreateDto: BatchCreateSolarEquipmentGenerationDto) {
    return await this.solarEquipmentService.batchCreate(batchCreateDto);
  }

  @Get()
  @ApiOperation({
    summary: '查詢太陽能設備發電資料',
    description: '根據條件查詢太陽能設備發電資料，支援分頁和篩選',
  })
  @ApiResponse({
    status: 200,
    description: '查詢成功',
    schema: {
      example: {
        data: [
          {
            historyId: 1,
            generationId: 1001,
            solarSiteId: 2001,
            locationId: 3001,
            equipmentId: 4001,
            dataTime: '2024-01-15T10:30:00.000Z',
            receivedTime: '2024-01-15T10:35:00.000Z',
            serialNumber: 'SN123456789',
            generationPDaily: 25.75,
            generationPAll: 15000,
            sunshineMeter: 8.523,
            sunshineMeterAvg: 7.852,
            errorCode: null,
          },
        ],
        pagination: {
          current: 1,
          limit: 10,
          total: 100,
          totalPages: 10,
        },
      },
    },
  })
  async findAll(@Query() queryDto: QuerySolarEquipmentGenerationDto) {
    console.log('🔍 GET  1 /solar-equipment 被呼叫了！');
    console.log('查詢參數:', queryDto);
    console.log('請求時間:', new Date().toISOString());
    console.log('═══════════════════════════════');
    return await this.solarEquipmentService.findAll(queryDto);
  }

  @Get('statistics')
  @ApiOperation({
    summary: '取得發電統計資料',
    description: '根據條件取得太陽能設備發電統計資料',
  })
  @ApiResponse({
    status: 200,
    description: '統計資料取得成功',
    schema: {
      example: {
        totalRecords: 1000,
        totalDailyGeneration: 25750.5,
        avgDailyGeneration: 25.75,
        maxDailyGeneration: 45.2,
        minDailyGeneration: 12.3,
        avgSunshineMeter: 7.852,
      },
    },
  })
  async getStatistics(@Query() queryDto: QuerySolarEquipmentGenerationDto) {
    console.log('🔍 GET  2 /solar-equipment 被呼叫了！');
    console.log('查詢參數:', queryDto);
    console.log('請求時間:', new Date().toISOString());
    console.log('═══════════════════════════════');
    return await this.solarEquipmentService.getStatistics(queryDto);
  }

  @Get('equipment/:equipmentId/latest')
  @ApiOperation({
    summary: '取得設備最新資料',
    description: '根據設備 ID 取得該設備的最新發電資料',
  })
  @ApiParam({
    name: 'equipmentId',
    description: '設備 ID',
    example: 4001,
  })
  @ApiResponse({
    status: 200,
    description: '查詢成功',
  })
  @ApiResponse({
    status: 404,
    description: '找不到該設備的資料',
  })
  async findLatestByEquipmentId(
    @Param('equipmentId', ParseIntPipe) equipmentId: number,
  ) {
     console.log('🔍 GET  3 /solar-equipment 被呼叫了！');
    return await this.solarEquipmentService.findLatestByEquipmentId(equipmentId);
  }

  @Get(':id')
  @ApiOperation({
    summary: '取得單筆資料',
    description: '根據歷程 ID 取得單筆太陽能設備發電資料',
  })
  @ApiParam({
    name: 'id',
    description: '歷程 ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '查詢成功',
  })
  @ApiResponse({
    status: 404,
    description: '找不到該筆資料',
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.solarEquipmentService.findOne(id);
    if (!result || result instanceof Error) {
      // You may want to customize the message or status code as needed
      throw new NotFoundException('找不到該筆資料');
    }
    return result;
  }
}
