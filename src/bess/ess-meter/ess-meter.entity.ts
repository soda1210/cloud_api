import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ESS_meter')
export class EssMeter {
  @PrimaryGeneratedColumn({ name: 'Meter_ID' })
  Meter_ID: number;

  @Column()
  ESS_site_ID: number;

  @Column()
  LocationtID: number;

  @Column()
  Equipment_ID: number;

  @Column()
  Data_time: Date;

  @Column()
  ReceivedTime: Date;

  @Column({ type: 'nvarchar', length: 'max', nullable: true })
  Serial_number: string;

  @Column({ type: 'bit' })
  Meter_connect_status: boolean;

  @Column('decimal', { precision: 4, scale: 2 })
  Frequency: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  V_AN: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  V_BN: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  V_CN: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Vln_Avg: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  V_AB: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  V_BC: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  V_CA: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Vll_Avg: number;

  @Column('decimal', { precision: 7, scale: 3, nullable: true })
  I_A: number;

  @Column('decimal', { precision: 7, scale: 3, nullable: true })
  I_B: number;

  @Column('decimal', { precision: 7, scale: 3, nullable: true })
  I_C: number;

  @Column('decimal', { precision: 7, scale: 3, nullable: true })
  I_Avg: number;

  @Column('decimal', { precision: 7, scale: 3, nullable: true })
  I_Nc: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Watt_A: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Watt_B: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Watt_C: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Watt_tot: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Var_A: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Var_B: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Var_C: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  Var_tot: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  VA_A: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  VA_B: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  VA_C: number;

  @Column('decimal', { precision: 6, scale: 1, nullable: true })
  VA_tot: number;

  @Column('decimal', { precision: 4, scale: 3, nullable: true })
  PF_A: number;

  @Column('decimal', { precision: 4, scale: 3, nullable: true })
  PF_B: number;

  @Column('decimal', { precision: 4, scale: 3, nullable: true })
  PF_C: number;

  @Column('decimal', { precision: 4, scale: 3, nullable: true })
  PF_tot: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Imb_V: number;

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  Imb_I: number;

  @Column('int', { nullable: true })
  Watt_in: number;

  @Column('int', { nullable: true })
  Watt_out: number;

  @Column('int', { nullable: true })
  Var_in: number;

  @Column('int', { nullable: true })
  Var_out: number;
}

