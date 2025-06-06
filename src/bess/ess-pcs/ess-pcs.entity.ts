import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ESS_PCS')
export class EssPcs {
  @PrimaryGeneratedColumn({ name: 'PCS_ID' })
  PCS_ID: number;
  @Column('int') ESS_site_ID: number;
  @Column('int') Location_ID: number;
  @Column('int') Equipment_ID: number;
  @Column('datetime') Data_time: Date;
  @Column('datetime') ReceivedTime: Date;
  @Column({ nullable: true }) Serial_number?: string;
  @Column('bit') PCS_connect_status: boolean;
  @Column('tinyint') PCS_Status: number;
  @Column('decimal', { precision: 5, scale: 1 }) PCS_S: number;
  @Column('decimal', { precision: 5, scale: 1 }) PCS_P: number;
  @Column('decimal', { precision: 5, scale: 1 }) PCS_Q: number;
  @Column('decimal', { precision: 4, scale: 2 }) PCS_Frequency: number;
  @Column({ nullable: true }) PCS_Van?: number;
  @Column({ nullable: true }) PCS_Vbn?: number;
  @Column({ nullable: true }) PCS_Vcn?: number;
  @Column({ nullable: true }) PCS_Vavg?: number;
  @Column({ nullable: true }) PCS_Ia?: number;
  @Column({ nullable: true }) PCS_Ib?: number;
  @Column({ nullable: true }) PCS_Ic?: number;
  @Column({ nullable: true }) PCS_Iavg?: number;
  @Column({ nullable: true }) PCS_PFa?: number;
  @Column({ nullable: true }) PCS_PFb?: number;
  @Column({ nullable: true }) PCS_PFc?: number;
  @Column({ nullable: true }) PCS_PFavg?: number;
  @Column({ nullable: true }) PCS_Vdc?: number;
  @Column({ nullable: true }) PCS_Idc?: number;
  @Column({ nullable: true }) PCS_Pdc?: number;
  @Column({ nullable: true }) Inner_T?: number;
  @Column({ nullable: true }) IGBT_Ta?: number;
  @Column({ nullable: true }) IGBT_Tb?: number;
  @Column({ nullable: true }) IGBT_Tc?: number;
  @Column({ nullable: true }) On_grid?: boolean;
  @Column({ nullable: true }) AC_leakage_I?: number;
  @Column({ nullable: true }) PCS_R?: number;
}