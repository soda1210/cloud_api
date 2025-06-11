import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Solar_equipment_generation')
export class SolarEquipmentGeneration {
  @PrimaryGeneratedColumn({ name: 'Generation_ID' })
  Generation_ID: number;

  @Column()
  Solar_site_ID: number;

  @Column()
  Location_ID: number;

  @Column()
  Equipment_ID: number;

  @ApiProperty({ example: '2025-06-09T14:30:00' })
  @Column('datetime')
  Data_time: Date;

  @Column()
  Received_Time: Date;

  @Column()
  @ApiProperty({ example: 'SN123456789' })
  Serial_number: string;

  @ApiProperty({ example: 15.25, required: false })
  @Column('decimal', { precision: 8, scale: 2, nullable: true })
  Generation_P_daily?: number;

  @ApiProperty({ example: 123567812, required: false })
  @Column('decimal', { precision: 12, scale: 0, nullable: true })
  Generation_P_all?: number;

  @ApiProperty({ example: 1234.567, required: false })
  @Column('decimal', { precision: 7, scale: 3, nullable: true })
  Sunshine_meter?: number;

  @ApiProperty({ example: 12.345, required: false })
  @Column('decimal', { precision: 5, scale: 3, nullable: true })
  Sunshine_meter_avg?: number;

  @ApiProperty({ example: 'E001,E005', required: false })
  @Column({ type: 'nvarchar', nullable: true })
  Error_code?: string;
}

