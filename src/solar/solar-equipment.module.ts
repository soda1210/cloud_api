import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolarEquipmentController } from './solar-equipment.controller';
import { SolarEquipmentService } from './solar-equipment.service';
import { SolarEquipmentGenerationHis } from './entities/solar_equipment_generation.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SolarEquipmentGenerationHis]),
    AuthModule,
  ],
  controllers: [SolarEquipmentController],
  providers: [SolarEquipmentService],
  exports: [SolarEquipmentService],
})
export class SolarEquipmentModule {}
