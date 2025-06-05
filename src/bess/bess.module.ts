// src/bess/bess.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BessService } from './bess.service';
import { BessController } from './bess.controller';

import { SiteEms } from './site-ems/site-ems.entity';
import { SiteEmsService } from './site-ems/site-ems.service';
import { SiteEmsController } from './site-ems/site-ems.controller';

import { EssBess } from './ess-bess/ess-bess.entity';
import { EssBessService } from './ess-bess/ess-bess.service';
import { EssBessController } from './ess-bess/ess-bess.controller';

import { EssPcs } from './ess-pcs/ess-pcs.entity';
import { EssPcsService } from './ess-pcs/ess-pcs.service';
import { EssPcsController } from './ess-pcs/ess-pcs.controller';

import { EssMeter } from './ess-meter/ess-meter.entity';
import { EssMeterService } from './ess-meter/ess-meter.service';
import { EssMeterController } from './ess-meter/ess-meter.controller';


// 之後加上 EssPcs 與 EssMeter
@Module({
  imports: [TypeOrmModule.forFeature([ SiteEms, EssBess, EssPcs, EssMeter])],
  providers: [BessService, SiteEmsService, EssBessService, EssPcsService, EssMeterService],
  controllers: [BessController, SiteEmsController, EssBessController, EssPcsController, EssMeterController],
})
export class BessModule {}
