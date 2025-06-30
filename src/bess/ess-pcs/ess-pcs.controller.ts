import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { BessController } from 'src/bess/bess.controller';
import { EssPcsService } from './ess-pcs.service';
import { EssPcs } from './ess-pcs.entity';
import { UpdateEssPcsDto } from './update-ess-pcs.dto';

@Controller('Bess/EssPCS')
export class EssPcsController extends BessController<EssPcs> {
  constructor(service: EssPcsService) {
    super(service);
  }

 @Put(':id') 
  @ApiOperation(
     { summary: '發送儲能案場PCS資料' ,   
    description: `🧾 API 資料內容請依照下述通訊格式傳送。\n   
    -📌 PCS_ID (int)：PCS 主鍵
    -📌 ESS_site_ID (int)：外鍵：案場 ID
    -📌 Location_ID (int)：外鍵：位置 ID
    -📌 Equipment_ID (int)：外鍵，對應型號
    -📌 Data_time (datetime)：資料時間
    -📌 Received_Time (datetime)：收到時間，由觸發程序自動更新
    -📌 Serial_number (nvarchar(max))：設備序號
    -📌 PCS_connect_status (bit)：PCS 通訊狀態，true 表示正常
    -📌 PCS_Status (tinyint)：外鍵：PCS 狀態
    -📌 PCS_S (decimal(5,1))：視在功率 (kVA)
    -📌 PCS_P (decimal(5,1))：有功功率 (kW)
    -📌 PCS_Q (decimal(5,1))：無功功率 (kVar)
    -📌 PCS_Frequency (decimal(4,2))：頻率
    -📌 PCS_Van (decimal(4,1))：A 相電壓
    -📌 PCS_Vbn (decimal(4,1))：B 相電壓
    -📌 PCS_Vcn (decimal(4,1))：C 相電壓
    -📌 PCS_Vavg (decimal(4,1))：平均電壓
    -📌 PCS_Ia (decimal(5,1))：A 相電流
    -📌 PCS_Ib (decimal(5,1))：B 相電流
    -📌 PCS_Ic (decimal(5,1))：C 相電流
    -📌 PCS_Iavg (decimal(5,1))：平均電流
    -📌 PCS_PFa (decimal(4,3))：A 相功因
    -📌 PCS_PFb (decimal(4,3))：B 相功因
    -📌 PCS_PFc (decimal(4,3))：C 相功因
    -📌 PCS_PFavg (decimal(4,3))：平均功因
    -📌 PCS_Vdc (decimal(5,1))：直流電壓
    -📌 PCS_Idc (decimal(5,1))：直流電流
    -📌 PCS_Pdc (decimal(5,1))：直流功率 (kW)
    -📌 Inner_T (decimal(4,1))：內部溫度
    -📌 IGBT_Ta (decimal(4,1))：IGBT A 相溫度
    -📌 IGBT_Tb (decimal(4,1))：IGBT B 相溫度
    -📌 IGBT_Tc (decimal(4,1))：IGBT C 相溫度
    -📌 On_grid (bit)：true 表示併網
    -📌 AC_leakage_I (float)：交流漏電流
    -📌 PCS_R (decimal(5,1))：絕緣阻抗
    -📌 PCS_error1 (smallint)：PCS故障1
    -📌 PCS_error2 (smallint)：PCS故障2
    -📌 PCS_error3 (smallint)：PCS故障3
    -📌 PCS_error4 (smallint)：PCS故障4
    -📌 PCS_error5 (smallint)：PCS故障5
    -📌 PCS_error6 (smallint)：PCS故障6
    -📌 PCS_error7 (smallint)：PCS故障7
    -📌 PCS_error8 (smallint)：PCS故障8
    -📌 PCS_error9 (smallint)：PCS故障9
      `
    })
 @ApiBody({ type: UpdateEssPcsDto }) // 這行讓 Swagger 顯示 Request body
  async update(
    @Param('id') id: number,
    @Body() updateDto: Partial<EssPcs>,
  ) {
    return this.baseService.update(id, updateDto);
    }
}

