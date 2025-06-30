import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { BessController } from 'src/bess/bess.controller';
import { EssMeterService } from './ess-meter.service';
import { EssMeter } from './ess-meter.entity';
import { UpdateEssMeterDto } from './update-ess-meter.dto';

@Controller('Bess/EssMeter')
export class EssMeterController extends BessController<EssMeter> {
  constructor(service: EssMeterService) {
    super(service);
  }

  @Put(':id') 
  @ApiOperation(
     { summary: '發送儲能案場電池電表資料' ,   
    description: `🧾 API 資料內容請依照下述通訊格式傳送。\n
    -📌 Meter_ID (int)：主鍵
    -📌 ESS_site_ID (int)：案場 ID
    -📌 Location_ID (int)：位置 ID
    -📌 Equipment_ID (int)：外鍵，對應型號
    -📌 Data_time (datetime)：資料時間
    -📌 Received_Time (datetime)：收到時間，觸發程序更新
    -📌 Serial_number (nvarchar(max))：設備序號
    -📌 Meter_connect_status (bit)：true 表示通訊正常
    -📌 Frequency (decimal(4,2))：頻率
    -📌 V_AN (decimal(6,1))：A 相對 N 線電壓
    -📌 V_BN (decimal(6,1))：B 相對 N 線電壓
    -📌 V_CN (decimal(6,1))：C 相對 N 線電壓
    -📌 Vln_Avg (decimal(6,1))：線對中性平均電壓
    -📌 V_AB (decimal(6,1))：A-B 線電壓
    -📌 V_BC (decimal(6,1))：B-C 線電壓
    -📌 V_CA (decimal(6,1))：C-A 線電壓
    -📌 Vll_Avg (decimal(6,1))：線對線平均電壓
    -📌 I_A (decimal(7,3))：A 相電流
    -📌 I_B (decimal(7,3))：B 相電流
    -📌 I_C (decimal(7,3))：C 相電流
    -📌 I_Avg (decimal(7,3))：平均電流
    -📌 I_Nc (decimal(7,3))：中性電流
    -📌 Watt_A (decimal(6,1))：A 相有功功率（kW）
    -📌 Watt_B (decimal(6,1))：B 相有功功率
    -📌 Watt_C (decimal(6,1))：C 相有功功率
    -📌 Watt_tot (decimal(6,1))：總有功功率
    -📌 Var_A (decimal(6,1))：A 相無功功率（kVar）
    -📌 Var_B (decimal(6,1))：B 相無功功率
    -📌 Var_C (decimal(6,1))：C 相無功功率
    -📌 Var_tot (decimal(6,1))：總無功功率
    -📌 VA_A (decimal(6,1))：A 相視在功率（kVA）
    -📌 VA_B (decimal(6,1))：B 相視在功率
    -📌 VA_C (decimal(6,1))：C 相視在功率
    -📌 VA_tot (decimal(6,1))：總視在功率
    -📌 PF_A (decimal(4,3))：A 相功因
    -📌 PF_B (decimal(4,3))：B 相功因
    -📌 PF_C (decimal(4,3))：C 相功因
    -📌 PF_tot (decimal(4,3))：總功因
    -📌 Imb_V (decimal(4,1))：電壓不平衡
    -📌 Imb_I (decimal(4,1))：電流不平衡
    -📌 Watt_in (int)：輸入有效電能
    -📌 Watt_out (int)：輸出有效電能
    -📌 Var_in (int)：輸入無效電能
    -📌 Var_out (int)：輸出無效電能
      `
    })
  @ApiBody({ type: UpdateEssMeterDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<EssMeter>,
  ) {
    return this.baseService.update(id, updateDto);
    }

}