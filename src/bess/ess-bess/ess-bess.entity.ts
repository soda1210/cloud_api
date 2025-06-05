// src/bess/bess.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  Data_time: Date;

  @Column()
  ReceivedTime: Date;

  @Column({ type: 'nvarchar', nullable: true })
  Serial_number: string;

  @Column()
  ESS_connect_status: boolean;

  @Column('decimal', { precision: 5, scale: 1 })
  Bat_V: number;

  @Column('decimal', { precision: 4, scale: 1 })
  Bat_I: number;

  @Column('decimal', { precision: 6, scale: 1 })
  Bat_P: number;

  @Column('decimal', { precision: 4, scale: 1 })
  Bat_SOC: number;

  @Column('tinyint')
  Bat_SOH: number;

  @Column('decimal', { precision: 4, scale: 3 })
  Vcell_max: number;

  @Column({ type: 'smallint', nullable: true })
  Vcell_max_location: number;

  @Column('decimal', { precision: 4, scale: 3 })
  Vcell_min: number;

  @Column({ type: 'smallint', nullable: true })
  Vcell_min_location: number;

  @Column('decimal', { precision: 4, scale: 3 })
  Vcell_avg: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Tcell_max: number;

  @Column()
  Tcell_max_location: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Tcell_min: number;

  @Column({ nullable: true })
  Tcell_min_location: number;

  @Column('decimal', { precision: 4, scale: 1 })
  Tcell_avg: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Bat_kwh: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Charge_Imax: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Discharge_Imax: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Charge_Pmax: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Discharge_Pmax: number;

  @Column({ type: 'smallint', nullable: true })
  BESS_error1: number;

  @Column({ type: 'smallint', nullable: true })
  BESS_error2: number;

  @Column({ type: 'smallint', nullable: true })
  BESS_error3: number;

  @Column({ type: 'smallint', nullable: true })
  BESS_error4: number;

  @Column({ type: 'smallint', nullable: true })
  BESS_error5: number;

  @Column({ type: 'smallint', nullable: true })
  BESS_error6: number;

  @Column({ type: 'smallint', nullable: true })
  BESS_error7: number;

  @Column({ type: 'smallint', nullable: true })
  BESS_error8: number;

  @Column({ type: 'smallint', nullable: true })
  BESS_error9: number;
}
