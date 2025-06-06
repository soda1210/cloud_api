import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EssBess } from './ess-bess.entity';
import { BessService } from 'src/bess/bess.service';

@Injectable()
export class EssBessService extends BessService<EssBess> {
  constructor(
    @InjectRepository(EssBess)
    repository: Repository<EssBess>,
  ) {
    // 如果主鍵不是 id，這裡可以改成 super(repository, 'Battery_ID')
    super(repository, 'Battery_ID');
  }
}
// export class EssBessService extends BessService<EssBess> {
//   constructor(@InjectRepository(EssBess) repo: Repository<EssBess>) {
//     super(repo);
//   }
// }
