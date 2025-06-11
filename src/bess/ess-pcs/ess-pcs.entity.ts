import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';  

@Entity('ESS_PCS')
export class EssPcs {
  @PrimaryGeneratedColumn({ name: 'PCS_ID' })
  PCS_ID: number;
  @Column('int') ESS_site_ID: number;
  
  @Column('int') Location_ID: number;

  @Column('int') Equipment_ID: number;

  @ApiProperty({ example: '2025-06-09T14:30:00' })
  @Column('datetime')
  Data_time: Date;

  @Column('datetime')
  Received_Time: Date;

  @ApiProperty({ example: 'SN123456789' })
  @Column({ nullable: true })
  Serial_number?: string;

  @ApiProperty({ example: true })
  @Column('bit')
  PCS_connect_status: boolean;

  @ApiProperty({ example: 2 })
  @Column('tinyint')
  PCS_Status: number;

  @ApiProperty({ example: 18.5 })
  @Column('decimal', { precision: 5, scale: 1 })
  PCS_S: number;

  @ApiProperty({ example: 120.5 })
  @Column('decimal', { precision: 5, scale: 1 })
  PCS_P: number;

  @ApiProperty({ example: 95.3 })
  @Column('decimal', { precision: 5, scale: 1 })
  PCS_Q: number;

  @ApiProperty({ example: 50.0 })
  @Column('decimal', { precision: 4, scale: 2 })
  PCS_Frequency: number;

  @ApiProperty({ example: 220.1 })
  @Column({ nullable: true })
  PCS_Van?: number;

  @ApiProperty({ example: 220.1 })
  @Column({ nullable: true })
  PCS_Vbn?: number;

  @ApiProperty({ example: 220.1 })
  @Column({ nullable: true })
  PCS_Vcn?: number;

  @ApiProperty({ example: 220.1 })
  @Column({ nullable: true })
  PCS_Vavg?: number;

  @ApiProperty({ example: 10.5 })
  @Column({ nullable: true })
  PCS_Ia?: number;

  @ApiProperty({ example: 10.2 })
  @Column({ nullable: true })
  PCS_Ib?: number;

  @ApiProperty({ example: 10.3 })
  @Column({ nullable: true })
  PCS_Ic?: number;

  @ApiProperty({ example: 10.3 })
  @Column({ nullable: true })
  PCS_Iavg?: number;

  @ApiProperty({ example: 0.98 })
  @Column({ nullable: true })
  PCS_PFa?: number;

  @ApiProperty({ example: 0.97 })
  @Column({ nullable: true })
  PCS_PFb?: number;

  @ApiProperty({ example: 0.99 })
  @Column({ nullable: true })
  PCS_PFc?: number;

  @ApiProperty({ example: 0.98 })
  @Column({ nullable: true })
  PCS_PFavg?: number;

  @ApiProperty({ example: 400.5 })
  @Column({ nullable: true })
  PCS_Vdc?: number;

  @ApiProperty({ example: 15.2 })
  @Column({ nullable: true })
  PCS_Idc?: number;

  @ApiProperty({ example: 1500.3 })
  @Column({ nullable: true })
  PCS_Pdc?: number;

  @ApiProperty({ example: 45.6 })
  @Column({ nullable: true })
  Inner_T?: number;

  @ApiProperty({ example: 85.4 })
  @Column({ nullable: true })
  IGBT_Ta?: number;

  @ApiProperty({ example: 86.0 })
  @Column({ nullable: true })
  IGBT_Tb?: number;

  @ApiProperty({ example: 85.7 })
  @Column({ nullable: true })
  IGBT_Tc?: number;

  @ApiProperty({ example: true })
  @Column({ nullable: true })
  On_grid?: boolean;

  @ApiProperty({ example: 0.002 })
  @Column({ nullable: true })
  AC_leakage_I?: number;

  @ApiProperty({ example: 1.5 })
  @Column({ nullable: true })
  PCS_R?: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  PCS_error1: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  PCS_error2: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  PCS_error3: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  PCS_error4: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  PCS_error5: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  PCS_error6: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  PCS_error7: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  PCS_error8: number;

  @Column({ type: 'smallint', nullable: true })
  @ApiProperty({ example: 0 })
  PCS_error9: number;
}