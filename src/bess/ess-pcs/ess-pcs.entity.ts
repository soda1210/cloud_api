import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ESS_PCS')
export class EssPcs {
  @PrimaryGeneratedColumn({ name: 'PCS_ID' })
  PCS_ID: number;
  @Column() ESS_site_ID: number;
  @Column() Equipment_ID: number;
  @Column() Data_time: Date;
  @Column() ReceivedTime: Date;
  @Column('decimal', { precision: 5, scale: 1 }) PCS_V: number;
  @Column('decimal', { precision: 4, scale: 1 }) PCS_I: number;
  @Column('decimal', { precision: 6, scale: 1 }) PCS_P: number;
  @Column('decimal', { precision: 4, scale: 1 }) PCS_Q: number;
  @Column() PCS_connect_status: boolean;
  @Column('tinyint') PCS_mode: number;
  @Column('tinyint') PCS_direction: number;
  @Column({ nullable: true }) PCS_error1?: number;
  @Column({ nullable: true }) PCS_error2?: number;
  @Column({ nullable: true }) PCS_error3?: number;
  @Column({ nullable: true }) PCS_error4?: number;
}