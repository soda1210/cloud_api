import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, FindManyOptions } from 'typeorm';
import { SolarEquipmentGenerationHis } from './entities/solar_equipment_generation.entity'; 
import { CreateSolarEquipmentGenerationDto } from './dto/create-solar-equipment-generation.dto';
import { BatchCreateSolarEquipmentGenerationDto } from './dto/batch-create-solar-equipment-generation.dto';
import { QuerySolarEquipmentGenerationDto } from './dto/query-solar-equipment-generation.dto';

@Injectable()
export class SolarEquipmentService {
  private readonly logger = new Logger(SolarEquipmentService.name);

  constructor(
    @InjectRepository(SolarEquipmentGenerationHis)
    private readonly solarEquipmentRepository: Repository<SolarEquipmentGenerationHis>,
  ) {}

  /**
   * 建立單筆太陽能設備發電資料
   */
  async create(
    createDto: CreateSolarEquipmentGenerationDto,
  ): Promise<SolarEquipmentGenerationHis> {
    try {
      const entity = this.solarEquipmentRepository.create({
        generationId: createDto.generationId,
        solarSiteId: createDto.solarSiteId,
        locationId: createDto.locationId,
        equipmentId: createDto.equipmentId,
        dataTime: new Date(createDto.dataTime),
        serialNumber: createDto.serialNumber,
        generationPDaily: createDto.generationPDaily,
        generationPAll: createDto.generationPAll,
        sunshineMeter: createDto.sunshineMeter,
        sunshineMeterAvg: createDto.sunshineMeterAvg,
        errorCode: createDto.errorCode,
      });

      const result = await this.solarEquipmentRepository.save(entity);
      this.logger.log(`建立太陽能設備資料成功，ID: ${result.historyId}`);
      return result;
    } catch (error) {
      this.logger.error(`建立太陽能設備資料失敗: ${error.message}`, error.stack);
      throw new BadRequestException(`建立資料失敗: ${error.message}`);
    }
  }

  /**
   * 批次建立太陽能設備發電資料
   */
  async batchCreate(
    batchCreateDto: BatchCreateSolarEquipmentGenerationDto,
  ): Promise<{ success: number; failed: number; results: any[] }> {
    const results: Array<
      | { index: number; success: true; data: any }
      | { index: number; success: false; error: string; originalData: any }
    > = [];
    let successCount = 0;
    let failedCount = 0;

    for (const [index, item] of batchCreateDto.data.entries()) {
      try {
        const entity = this.solarEquipmentRepository.create({
          generationId: item.generationId,
          solarSiteId: item.solarSiteId,
          locationId: item.locationId,
          equipmentId: item.equipmentId,
          dataTime: new Date(item.dataTime),
          serialNumber: item.serialNumber,
          generationPDaily: item.generationPDaily,
          generationPAll: item.generationPAll,
          sunshineMeter: item.sunshineMeter,
          sunshineMeterAvg: item.sunshineMeterAvg,
          errorCode: item.errorCode,
        });

        const result = await this.solarEquipmentRepository.save(entity);
        results.push({
          index,
          success: true,
          data: result,
        });
        successCount++;
      } catch (error) {
        this.logger.error(`批次建立第 ${index + 1} 筆資料失敗: ${error.message}`);
        results.push({
          index,
          success: false,
          error: error.message,
          originalData: item,
        });
        failedCount++;
      }
    }

    this.logger.log(`批次建立完成 - 成功: ${successCount}, 失敗: ${failedCount}`);
    return {
      success: successCount,
      failed: failedCount,
      results,
    };
  }

  /**
   * 查詢太陽能設備發電資料
   */
  async findAll(queryDto: QuerySolarEquipmentGenerationDto) {
    const { page = 1, limit = 10, startDate, endDate, ...filters } = queryDto;

    // 建立查詢條件
    const where: any = {};

    // 加入篩選條件
    if (filters.generationId) where.generationId = filters.generationId;
    if (filters.solarSiteId) where.solarSiteId = filters.solarSiteId;
    if (filters.locationId) where.locationId = filters.locationId;
    if (filters.equipmentId) where.equipmentId = filters.equipmentId;
    if (filters.serialNumber) where.serialNumber = filters.serialNumber;

    // 日期範圍查詢
    if (startDate && endDate) {
      where.dataTime = Between(new Date(startDate), new Date(endDate));
    } else if (startDate) {
      where.dataTime = new Date(startDate);
    }

    // 建立查詢選項
    const findOptions: FindManyOptions<SolarEquipmentGenerationHis> = {
      where,
      order: { dataTime: 'DESC', historyId: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    };

    try {
      const [data, total] = await this.solarEquipmentRepository.findAndCount(findOptions);

      return {
        data,
        pagination: {
          current: page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      this.logger.error(`查詢太陽能設備資料失敗: ${error.message}`, error.stack);
      throw new BadRequestException(`查詢資料失敗: ${error.message}`);
    }
  }

  /**
   * 根據 ID 查詢單筆資料
   */
  async findOne(id: number): Promise<SolarEquipmentGenerationHis> {
    try {
      const result = await this.solarEquipmentRepository.findOne({
        where: { historyId: id },
      });

      if (!result) {
        throw new BadRequestException(`找不到 ID 為 ${id} 的資料`);
      }

      return result;
    } catch (error) {
      this.logger.error(`查詢單筆資料失敗: ${error.message}`, error.stack);
      throw new BadRequestException(`查詢資料失敗: ${error.message}`);
    }
  }
  /* 根據設備 ID 取得最新資料*/

  // 修正後的方法，需要替換 service 中的對應方法

/**
 * 取得發電統計資料
 */
async getStatistics(query?: QuerySolarEquipmentGenerationDto) {
  try {
    const { startDate, endDate, ...filters } = query || {};

    // 建立查詢條件
    const where: any = {};

    // 加入篩選條件
    if (filters.generationId) where.generationId = filters.generationId;
    if (filters.solarSiteId) where.solarSiteId = filters.solarSiteId;
    if (filters.locationId) where.locationId = filters.locationId;
    if (filters.equipmentId) where.equipmentId = filters.equipmentId;
    if (filters.serialNumber) where.serialNumber = filters.serialNumber;

    // 日期範圍查詢
    if (startDate && endDate) {
      where.dataTime = Between(new Date(startDate), new Date(endDate));
    } else if (startDate) {
      where.dataTime = new Date(startDate);
    }

    // 取得總筆數
    const totalRecords = await this.solarEquipmentRepository.count({ where });

    // 取得統計資料
    const queryBuilder = this.solarEquipmentRepository
      .createQueryBuilder('solar')
      .where(where);

    const stats = await queryBuilder
      .select([
        'SUM(solar.generationPDaily) as totalDailyGeneration',
        'AVG(solar.generationPDaily) as avgDailyGeneration',
        'MAX(solar.generationPDaily) as maxDailyGeneration',
        'MIN(solar.generationPDaily) as minDailyGeneration',
        'AVG(solar.sunshineMeterAvg) as avgSunshineMeter'
      ])
      .getRawOne();

    return {
      totalRecords,
      totalDailyGeneration: parseFloat(stats.totalDailyGeneration) || 0,
      avgDailyGeneration: parseFloat(stats.avgDailyGeneration) || 0,
      maxDailyGeneration: parseFloat(stats.maxDailyGeneration) || 0,
      minDailyGeneration: parseFloat(stats.minDailyGeneration) || 0,
      avgSunshineMeter: parseFloat(stats.avgSunshineMeter) || 0,
    };
  } catch (error) {
    this.logger.error(`取得統計資料失敗: ${error.message}`, error.stack);
    throw new BadRequestException(`取得統計資料失敗: ${error.message}`);
  }
}

/**
 * 根據設備ID查找最新資料
 */
async findLatestByEquipmentId(equipmentId: number): Promise<SolarEquipmentGenerationHis> {
  try {
    const latestData = await this.solarEquipmentRepository.findOne({
      where: { equipmentId },
      order: { dataTime: 'DESC', historyId: 'DESC' }
    });
    
    if (!latestData) {
      throw new BadRequestException(`找不到設備ID ${equipmentId} 的資料`);
    }
    
    return latestData;
  } catch (error) {
    if (error instanceof BadRequestException) {
      throw error;
    }
    this.logger.error(`查找最新設備資料失敗: ${error.message}`, error.stack);
    throw new BadRequestException(`查找最新設備資料失敗: ${error.message}`);
  }
}

}
