import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Solar_meter')
export class SolarMeter {
  @PrimaryGeneratedColumn({ name: 'Meter_ID' })
  Meter_ID: number;

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

  @Column()
  @ApiProperty({ example: true })
  Meter_connect_status: boolean;

  @Column()
  @ApiProperty({ example: 53.0 })
  Frequency: number;

  @Column()
  @ApiProperty({ example: 220.3 })
  V_AN: number;

  @Column()
  @ApiProperty({ example: 220.3 })
  V_BN: number;

  @Column()
  @ApiProperty({ example: 220.0 })
  V_CN: number;

  @Column()
  @ApiProperty({ example: 220.1 })
  Vln_Avg: number;

  @Column()
  @ApiProperty({ example: 380.1 })
  V_AB: number;

  @Column()
  @ApiProperty({ example: 380.0 })
  V_BC: number;

  @Column()
  @ApiProperty({ example: 380.2 })
  V_CA: number;

  @Column()
  @ApiProperty({ example: 380.1 })
  Vll_Avg: number;

  @Column()
  @ApiProperty({ example: 10.512 })
  I_A: number;

  @Column()
  @ApiProperty({ example: 10.456 })
  I_B: number;

  @Column()
  @ApiProperty({ example: 10.489 })
  I_C: number;

  @Column()
  @ApiProperty({ example: 10.486 })
  I_Avg: number;

  @Column()
  @ApiProperty({ example: 5.341 })
  I_Nc: number;

  @Column()
  @ApiProperty({ example: 2200.5 })
  Watt_A: number;

  @Column()
  @ApiProperty({ example: 2205.6 })
  Watt_B: number;

  @Column()
  @ApiProperty({ example: 2210.2 })
  Watt_C: number;

  @Column()
  @ApiProperty({ example: 6616.3 })
  Watt_tot: number;

  @Column()
  @ApiProperty({ example: 1500.5 })
  Var_A: number;

  @Column()
  @ApiProperty({ example: 1503.2 })
  Var_B: number;

  @Column()
  @ApiProperty({ example: 1501.0 })
  Var_C: number;

  @Column()
  @ApiProperty({ example: 4504.7 })
  Var_tot: number;

  @Column()
  @ApiProperty({ example: 2400.4 })
  VA_A: number;

  @Column()
  @ApiProperty({ example: 2403.3 })
  VA_B: number;

  @Column()
  @ApiProperty({ example: 2402.8 })
  VA_C: number;

  @Column()
  @ApiProperty({ example: 7206.5 })
  VA_tot: number;

  @Column()
  @ApiProperty({ example: 0.98 })
  PF_A: number;

  @Column()
  @ApiProperty({ example: 0.97 })
  PF_B: number;

  @Column()
  @ApiProperty({ example: 0.99 })
  PF_C: number;

  @Column()
  @ApiProperty({ example: 0.98 })
  PF_tot: number;

  @Column()
  @ApiProperty({ example: 0.5 })
  Imb_V: number;

  @Column()
  @ApiProperty({ example: 0.1 })
  Imb_I: number;

  @Column()
  @ApiProperty({ example: 5500 })
  Watt_in: number;

  @Column()
  @ApiProperty({ example: 1100 })
  Watt_out: number;

  @Column()
  @ApiProperty({ example: 3000 })
  Var_in: number;

  @Column()
  @ApiProperty({ example: 500 })
  Var_out: number;
}

