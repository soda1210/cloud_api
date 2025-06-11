import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Site_EMS')
export class SiteEms {
  @PrimaryGeneratedColumn({ name: 'EMS_ID' })
  EMS_ID: number;

  @Column()
  ESS_site_ID: number;

  @ApiProperty({ example: '2025-06-09T14:30:00' })
  @Column()
  Data_time: Date;

  @Column()
  Received_Time: Date;

  @ApiProperty({ example: 1 })
  @Column()
  Sys_status: number;

  @ApiProperty({ example: 1 })
  @Column()
  Logic_mode: number;

  @ApiProperty({ example: 60.1 })
  @Column('decimal', { precision: 4, scale: 2 })
  Frequency: number;

  @ApiProperty({ example: 100.5 })
  @Column('decimal', { precision: 6, scale: 1 })
  Site_S: number;

  @ApiProperty({ example: 120.5 })
  @Column('decimal', { precision: 6, scale: 1 })
  Site_P: number;

  @ApiProperty({ example: 95.3 })
  @Column('decimal', { precision: 6, scale: 1 })
  Site_Q: number;

  @ApiProperty({ example: 49.9, required: false })
  @Column('decimal', { precision: 4, scale: 2, nullable: true })
  Control_Freq?: number;

  @ApiProperty({ example: 105.0, required: false })
  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Control_P?: number;

  @ApiProperty({ example: 90.2, required: false })
  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Control_Q?: number;

  @ApiProperty({ example: 110.0, required: false })
  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Sys_outputP?: number;

  @ApiProperty({ example: 85.0, required: false })
  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Sys_outputQ?: number;

  @ApiProperty({ example: 80.5, required: false })
  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Sys_SOC?: number;

  @ApiProperty({ example: 90, required: false })
  @Column({ type: 'tinyint', nullable: true })
  SBSPM?: number;
}