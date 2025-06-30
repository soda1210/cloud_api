import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody, ApiOperation, } from '@nestjs/swagger';
import { BessController } from 'src/bess/bess.controller';
import { EssBessService } from './ess-bess.service';
import { EssBess } from './ess-bess.entity';
import { UpdateEssBessDto } from './update-ess-bess.dto';

@Controller('Bess/EssBess')
export class EssBessController extends BessController<EssBess> {
  constructor(service: EssBessService) {
    super(service);
  }
   @Put(':id') 
   @ApiOperation(
    { summary: '發送儲能案場電池資料' ,   
    description: `🧾 API 資料內容請依照下述通訊格式傳送。\n
    -📌 Battery_ID (int)：主鍵
    -📌 ESS_site_ID (int)：外鍵，對應案場
    -📌 Location_ID (int)：外鍵，對應位置
    -📌 Equipment_ID (int)：外鍵，對應型號
    -📌 Data_time (datetime)：資料時間
    -📌 Received_Time (datetime)：收到時間，觸發程序做更新
    -📌 Serial_number (nvarchar(max))：設備序號
    -📌 ESS_connect_status (bit)：ESS通訊狀態，true為通訊正常
    -📌 Bat_V (decimal(5,1))：電壓
    -📌 Bat_I (decimal(4,1))：電流
    -📌 Bat_P (decimal(6,1))：功率，單位kW
    -📌 Bat_SOC (decimal(4,1))：SOC
    -📌 Bat_SOH (tinyint)：SOH
    -📌 Vcell_max (decimal(4,3))：最高電芯電壓
    -📌 Vcell_max_location (smallint)：最高電芯電壓位置
    -📌 Vcell_min (decimal(4,3))：最低電芯電壓
    -📌 Vcell_min_location (smallint)：最低電芯電壓位置
    -📌 Vcell_avg (decimal(4,3))：平均電芯電壓
    -📌 Tcell_max (decimal(4,1))：最高電芯溫度
    -📌 Tcell_max_location (int)：最高電芯溫度位置
    -📌 Tcell_min (decimal(4,1))：最低電芯溫度
    -📌 Tcell_min_location (int)：最低電芯溫度位置
    -📌 Tcell_avg (decimal(4,1))：平均電芯溫度
    -📌 Bat_kwh (decimal(4,1))：可用容量
    -📌 Charge_Imax (decimal(4,1))：最大允許充電電流
    -📌 Discharge_Imax (decimal(4,1))：最大允許放電電流
    -📌 Charge_Pmax (decimal(4,1))：最大允許充電功率
    -📌 Discharge_Pmax (decimal(4,1))：最大允許放電功率
    -📌 BESS_error1 (smallint)：BESS故障1
    -📌 BESS_error2 (smallint)：BESS故障2
    -📌 BESS_error3 (smallint)：BESS故障3
    -📌 BESS_error4 (smallint)：BESS故障4
    -📌 BESS_error5 (smallint)：BESS故障5
    -📌 BESS_error6 (smallint)：BESS故障6
    -📌 BESS_error7 (smallint)：BESS故障7
    -📌 BESS_error8 (smallint)：BESS故障8
    -📌 BESS_error9 (smallint)：BESS故障9
      `
    })
   @ApiBody({ type: UpdateEssBessDto }) // 這行讓 Swagger 顯示 Request body
    async update(
      @Param('id') id: number,
      @Body() updateDto: Partial<EssBess>,
    ) {
      return this.baseService.update(id, updateDto);
      }
}
