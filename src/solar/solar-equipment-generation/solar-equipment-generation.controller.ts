import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { SolarController } from 'src/solar/solar.controller';
import { SolarEquipmentGenerationService } from './solar-equipment-generation.service';
import { SolarEquipmentGeneration } from './solar-equipment-generation.entity';
import { UpdateSolarEquipmentGenerationDto } from './update-solar-equipment-generation.dto';

@Controller('api/v1/solar/solar-equipment-generation')
export class SolarEquipmentGenerationController extends SolarController<SolarEquipmentGeneration> {
  constructor(service: SolarEquipmentGenerationService) {
    super(service);
  }


  @Put(':id') 
  @ApiOperation(
     { summary: '發送太陽能案場單一設備發電資料' ,   
    description: `🧾 API 資料內容請依照下述通訊格式傳送。\n
    -📌 Generation_ID (int)：資料紀錄 ID（主鍵，自動遞增）
    -📌 Solar_site_ID (int)：案場 ID（外鍵）
    -📌 Location_ID (int)：位置 ID（外鍵，）
    -📌 Equipment_ID (int)：設備型號（外鍵）
    -📌 Data_time (datetime)：資料時間
    -📌 Received_time (datetime)：收到時間，由觸發程序寫入
    -📌 Serial_number (nvarchar(max))：設備序號
    -📌 Generation_P_daily (decimal(8,2))：當日累積發電量（kWh）
    -📌 Generation_P_all (decimal(12,0))：總累積發電量（kWh）
    -📌 Sunshine_meter (decimal(7,3))：日照量（即時值，單位例如 W/m²）
    -📌 Sunshine_meter_avg (decimal(5,3))：日照平均值
    -📌 Error_code (nvarchar(max))：錯誤描述內容（若有異常）
      `
    })
@ApiBody({ type: UpdateSolarEquipmentGenerationDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<SolarEquipmentGeneration>,
  ) {
    return this.solarService.update(id, updateDto);
    }

}