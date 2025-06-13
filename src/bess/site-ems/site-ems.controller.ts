import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { BessController } from 'src/bess/bess.controller';
import { SiteEmsService } from './site-ems.service';
import { SiteEms } from './site-ems.entity';
import { UpdateSiteEmsDto } from './update-site-ems.dto';

@Controller('api/v1/bess/site-ems')
export class SiteEmsController extends BessController<SiteEms> {
  constructor(service: SiteEmsService) {
    super(service);
  }

 @Put(':id') 
  @ApiOperation(
     { summary: '發送儲能案場EMS資料' ,   
    description: `🧾 API 資料內容請依照下述通訊格式傳送。\n
    -📌 EMS_ID (int)：主鍵
    -📌 ESS_site_ID (int)：外鍵，儲能站 ID
    -📌 Data_time (datetime)：資料時間
    -📌 Received_Time (datetime)：收到時間，觸發程序做更新
    -📌 Sys_status (tinyint)：外鍵，系統狀態
    -📌 Logic_mode (tinyint)：外鍵，系統狀態
    -📌 Frequency (decimal(4,2))：頻率
    -📌 Site_S (decimal(6,1))：案場視在功率，以 kVA 儲存
    -📌 Site_P (decimal(6,1))：案場實功率，以 kW 儲存
    -📌 Site_Q (decimal(6,1))：案場虛功率，以 kVar 儲存
    -📌 Control_Freq (decimal(4,2))：控制頻率
    -📌 Control_P (decimal(6,1))：控制輸出實功率，以 kW 儲存
    -📌 Control_Q (decimal(6,1))：控制輸出虛功率，以 kVar 儲存
    -📌 Sys_outputP (decimal(6,1))：PCS 輸出實功率，以 kW 儲存
    -📌 Sys_outputQ (decimal(6,1))：PCS 輸出虛功率，以 kVar 儲存
    -📌 Sys_SOC (decimal(4,1))：SOC 平均值
    -📌 SBSPM (tinyint)：SBSPM
      `
    })
 @ApiBody({ type: UpdateSiteEmsDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<SiteEms>,
  ) {
    return this.baseService.update(id, updateDto);
    }
}