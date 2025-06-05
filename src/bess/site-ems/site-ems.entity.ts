import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Site_EMS')
export class SiteEms {
  @PrimaryGeneratedColumn({ name: 'EMS_ID' })
  EMS_ID: number;

  @Column()
  ESS_site_ID: number;
  @Column()
  Data_time: Date;
  @Column()
  ReceivedTime: Date;
  @Column()
  Sys_status: number;
  @Column()
  Logic_mode: number;
  @Column('decimal', { precision: 4, scale: 2 })
  Frequency: number;
  @Column('decimal', { precision: 6, scale: 1 })
  Site_S: number;
  @Column('decimal', { precision: 6, scale: 1 })
  Site_P: number;
  @Column('decimal', { precision: 6, scale: 1 })
  Site_Q: number;
  @Column('decimal', { precision: 4, scale: 2, nullable: true })
  Control_Freq?: number;
  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Control_P?: number;
  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Control_Q?: number;
  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Sys_outputP?: number;
  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Sys_outputQ?: number;
  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Sys_SOC?: number;
  @Column({ type: 'tinyint', nullable: true })
  SBSPM?: number;
}