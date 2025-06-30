import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { SolarController } from 'src/solar/solar.controller';
import { SolarSiteGenerationService } from './solar-site-generation.service';
import { SolarSiteGeneration } from './solar-site-generation.entity';
import { UpdateSolarSiteGenerationDto } from './update-solar-site-generation.dto';

@Controller('Solar/SolarSiteGeneration')
export class SolarSiteGenerationController extends SolarController<SolarSiteGeneration> {
  constructor(service: SolarSiteGenerationService) {
    super(service);
  }


  @Put(':id') 
    @ApiOperation(
     { summary: '發送太陽能案場總發電資料' ,   
    description: `🧾 API 資料內容請依照下述通訊格式傳送。\n
    -📌 Generation_ID (int)：資料紀錄 ID（主鍵，自動遞增）
    -📌 Solar_site_ID (int)：案場 ID（外鍵，參照 Site_solar_info.Solar_site_ID）
    -📌 Data_time (datetime)：資料時間
    -📌 Received_time (datetime)：收到時間，由觸發程序寫入
    -📌 Generation_P_daily (decimal(8,2))：當日發電量（kWh）
    -📌 Generation_P_all (decimal(12,0))：總累積發電量（kWh）
    -📌 Sunshine_meter (decimal(7,3))：日照量（即時值，例如 W/m²）
    -📌 Sunshine_meter_avg (decimal(5,3))：日照平均值（統計週期內平均）
    -📌 Error_code (nvarchar(max))：錯誤描述內容（如設備異常等）
      `
    })
  @ApiBody({ type: UpdateSolarSiteGenerationDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<SolarSiteGeneration>,
  ) {
    return this.solarService.update(id, updateDto);
    }

}