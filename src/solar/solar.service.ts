import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, ObjectLiteral } from 'typeorm';

// 不加 @Injectable()
export class SolarService<T extends ObjectLiteral> {
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
