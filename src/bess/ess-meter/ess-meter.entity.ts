import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ESS_meter')
export class EssMeter {
  @PrimaryGeneratedColumn({ name: 'Meter_ID' })
  Meter_ID: number;
  @Column() ESS_site_ID: number;
  @Column() Equipment_ID: number;
  @Column() Data_time: Date;
  @Column() ReceivedTime: Date;
  @Column('decimal', { precision: 5, scale: 1 }) Meter_V: number;
  @Column('decimal', { precision: 4, scale: 1 }) Meter_I: number;
  @Column('decimal', { precision: 6, scale: 1 }) Meter_P: number;
  @Column('decimal', { precision: 4, scale: 1 }) Meter_Q: number;
  @Column('decimal', { precision: 6, scale: 3 }) Meter_F: number;
}
