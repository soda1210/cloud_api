// src/bess/bess.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('ESS_BESS')
export class EssBess {
  @PrimaryGeneratedColumn({ name: 'Battery_ID' })
  Battery_ID: number;

  @Column()
  ESS_site_ID: number;

  @Column()
  Location_ID: number;

  @Column()
  Equipment_ID: number;

  @Column()
  @ApiProperty({ example: '2025-06-09T14:30:00' })
  Data_time: Date;

  @Column()
  Received_Time: Date;

  @Column({ type: 'nvarchar', nullable: true })
  @ApiProperty({ example: 'SN987654321' })
  Serial_number: string;

  @Column()
  @ApiProperty({ example: true })
  ESS_connect_status: boolean;

  @Column('decimal', { precision: 5, scale: 1 })
  @ApiProperty({ example: 400.5 })
  Bat_V: number;

  @Column('decimal', { precision: 4, scale: 1 })
  @ApiProperty({ example: 15.2 })
  Bat_I: number;

  @Column('decimal', { precision: 6, scale: 1 })
  @ApiProperty({ example: 6000.3 })
  Bat_P: number;

  @Column('decimal', { precision: 4, scale: 1 })
  @ApiProperty({ example: 85.4 })
  Bat_SOC: number;

  @Column('tinyint')
  @ApiProperty({ example: 90 })
  Bat_SOH: number;

  @Column('decimal', { precision: 4, scale: 3 })
  @ApiProperty({ example: 3.65 })
  Vcell_max: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 1 })
  Vcell_max_location: number;

  @Column('decimal', { precision: 4, scale: 3 })
  @ApiProperty({ example: 3.10 })
  Vcell_min: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 3 })
  Vcell_min_location: number;

  @Column('decimal', { precision: 4, scale: 3 })
  @ApiProperty({ example: 3.35 })
  Vcell_avg: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  @ApiProperty({ example: 35.6 })
  Tcell_max: number;

  @Column()
  @ApiProperty({ example: 2 })
  Tcell_max_location: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  @ApiProperty({ example: 25.4 })
  Tcell_min: number;

  @Column({ nullable: true })
  @ApiProperty({ example: 4 })
  Tcell_min_location: number;

  @Column('decimal', { precision: 4, scale: 1 })
  @ApiProperty({ example: 30.2 })
  Tcell_avg: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  @ApiProperty({ example: 150.3 })
  Bat_kwh: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  @ApiProperty({ example: 100.5 })
  Charge_Imax: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  @ApiProperty({ example: 90.3 })
  Discharge_Imax: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  @ApiProperty({ example: 500.0 })
  Charge_Pmax: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  @ApiProperty({ example: 450.0 })
  Discharge_Pmax: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  BESS_error1: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  BESS_error2: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  BESS_error3: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  BESS_error4: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  BESS_error5: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  BESS_error6: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  BESS_error7: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  BESS_error8: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  BESS_error9: number;
}
