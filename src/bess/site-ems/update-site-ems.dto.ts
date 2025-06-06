import { PartialType } from '@nestjs/swagger';
import { SiteEms } from './site-ems.entity';

export class UpdateSiteEmsDto extends PartialType(SiteEms) {}