import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, ObjectLiteral } from 'typeorm';

// 不加 @Injectable()
export class BessService<T extends ObjectLiteral> {
  constructor(
    protected readonly repository: Repository<T>,
    protected readonly idKey: keyof T = 'id' as keyof T,
  ) {}

  async update(id: number, updateDto: Partial<T>): Promise<T> {
    const entity = await this.repository.findOne({ where: { [this.idKey]: id } as any });
    if (!entity) {
      throw new NotFoundException(`找不到 ID 為 ${id} 的資料`);
    }

    // 過濾掉 undefined 或 null 欄位
    Object.keys(updateDto).forEach((key) => {
      const value = updateDto[key as keyof T];
      if (value !== undefined ) {// 只排除 undefined，允許 null
        (entity as any)[key] = value;
      }
    });

    return await this.repository.save(entity);
  }
}


// @Injectable()
// export class BessService<T extends ObjectLiteral> {
//     constructor(protected readonly repository: Repository<T>, protected readonly idKey: keyof T = 'id' as keyof T) {}

//   async update(id: number, updateDto: Partial<T>): Promise<T> {
//     const entity = await this.repository.findOne({ where: { [this.idKey]: id } as any });
//     if (!entity) {
//       throw new NotFoundException(`找不到 ID 為 ${id} 的資料`);
//     }
//     Object.assign(entity, updateDto);
//     return await this.repository.save(entity);
//   }
// }

// import { SiteEmsService } from './site-ems/site-ems.service';
// import { EssBessService } from './ess-bess/ess-bess.service';
// import { EssPcsService } from './ess-pcs/ess-pcs.service';
// import { EssMeterService } from './ess-meter/ess-meter.service';

// @Injectable()
// export class BessService {
//   constructor(
//     private siteEmsService: SiteEmsService,
//     private essBessService: EssBessService,
//     private essPcsService: EssPcsService,
//     private essMeterService: EssMeterService,
//   ) {}

//   async update(tableName: string, id: number, data: any) {
//     switch (tableName) {
//       case 'SiteEms':
//         return this.siteEmsService.update(id, data);
//       case 'EssBess':
//         return this.essBessService.update(id, data);
//       case 'EssPcs':
//         return this.essPcsService.update(id, data);
//       case 'EssMeter':
//         return this.essMeterService.update(id, data);
//       default:
//         throw new Error(`未知的資料表：${tableName}`);
//     }
//   }
// }

//改進 ID 欄位動態支援：

// 目前所有 entity 都是以 id 查詢，但不同 entity 的主鍵名稱不同（如 EMS_ID、Battery_ID）。

// 建議將 BaseService 的 id 欄位名稱 改為動態傳入（constructor 增加主鍵欄位名）。

// ts
// 複製
// 編輯
// export class BaseService<T> {
//   constructor(
//     private readonly repository: Repository<T>,
//     private readonly idKey: keyof T
//   ) {}

//   async update(id: number, updateDto: Partial<T>): Promise<T> {
//     const entity = await this.repository.findOne({ where: { [this.idKey]: id } as any });
//     if (!entity) throw new NotFoundException(`找不到 ID 為 ${id} 的資料`);
//     Object.assign(entity, updateDto);
//     return await this.repository.save(entity);
//   }
// }
// 然後在繼承的 service 中這樣傳入：

// ts
// 複製
// 編輯
// super(repo, 'EMS_ID');
// 加入 DTO 驗證機制（ValidationPipe）：

// 建議為每個資料表實作對應的 Update DTO，並搭配 class-validator 套件。

// 可強化欄位型別與值驗證，避免不合法資料寫入。

// ts
// 複製
// 編輯
// import { IsOptional, IsNumber } from 'class-validator';

// export class UpdateSiteEmsDto {
//   @IsOptional()
//   @IsNumber()
//   Frequency?: number;

//   // ... 其餘欄位
// }