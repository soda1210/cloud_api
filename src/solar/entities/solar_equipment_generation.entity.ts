import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('solar_equipment_generation_his')
export class SolarEquipmentGenerationHis {
  @PrimaryGeneratedColumn({ name: 'History_ID' })
  historyId: number;

  @Column({
    name: 'Generation_ID',
    type: 'int',
  })
  generationId: number;

  @Column({
    name: 'Solar_site_ID',
    type: 'int',
  })
  solarSiteId: number;

  @Column({
    name: 'Location_ID',
    type: 'int',
  })
  locationId: number;

  @Column({
    name: 'Equipment_ID',
    type: 'int',
  })
  equipmentId: number;

  @Column({
    name: 'Data_time',
    type: 'datetime',
  })
  dataTime: Date;

  @CreateDateColumn({
    name: 'ReceivedTime',
    type: 'datetime',
  })
  receivedTime: Date;

  @Column({
    name: 'Serial_number',
    type: 'nvarchar',
    length: 'MAX',
    nullable: true,
  })
  serialNumber?: string;

  @Column({
    name: 'Generation_P_daily',
    type: 'decimal',
    precision: 8,
    scale: 2,
    nullable: true,
  })
  generationPDaily?: number;

  @Column({
    name: 'Generation_P_all',
    type: 'decimal',
    precision: 12,
    scale: 0,
    nullable: true,
  })
  generationPAll?: number;

  @Column({
    name: 'Sunshine_meter',
    type: 'decimal',
    precision: 7,
    scale: 3,
    nullable: true,
  })
  sunshineMeter?: number;

  @Column({
    name: 'Sunshine_meter_avg',
    type: 'decimal',
    precision: 5,
    scale: 3,
    nullable: true,
  })
  sunshineMeterAvg?: number;

  @Column({
    name: 'Error_code',
    type: 'nvarchar',
    length: 'MAX',
    nullable: true,
  })
  errorCode?: string;
}
