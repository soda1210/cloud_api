import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolarModule } from './solar/solar.module';
import { BessModule } from './bess/bess.module';
import { AuthModule } from './auth/auth.module';
import { SolarSiteGeneration } from './solar/solar-site-generation/solar-site-generation.entity';
import { SolarEquipmentGeneration } from './solar/solar-equipment-generation/solar-equipment-generation.entity';
import { SolarMeter } from './solar/solar-meter/solar-meter.entity';
import { SiteEms } from './bess/site-ems/site-ems.entity';
import { EssBess } from './bess/ess-bess/ess-bess.entity';
import { EssPcs } from './bess/ess-pcs/ess-pcs.entity';
import { EssMeter } from './bess/ess-meter/ess-meter.entity';

@Module({
  imports: [
    // 環境變數配置
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // 資料庫連接配置
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB_HOST', 'localhost'),
        port: parseInt(configService.get('DB_PORT', '1433')),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [
          SolarSiteGeneration,
          SolarEquipmentGeneration,
          SolarMeter,
          SiteEms,
          EssBess,
          EssPcs,
          EssMeter,
        ],
        synchronize: false, // 生產環境應該設為 false
        logging: configService.get('NODE_ENV') === 'development',
        options: {
          encrypt: configService.get('DB_ENCRYPT', 'true') === 'true',
          trustServerCertificate: configService.get('DB_TRUST_CERT', 'true') === 'true',
        },
      }),
      inject: [ConfigService],
    }),

    // 功能模組
    AuthModule,
    SolarModule,
    BessModule
  ],
})
export class AppModule {}