// // src/config/typeorm.config.ts
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as dotenv from 'dotenv';
// dotenv.config();

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'mssql',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT || '1433', 10),//10代表10進位
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   synchronize: false, // 建議 production 設 false
//   options: {
//     encrypt: process.env.DB_ENCRYPT === 'true',
//     trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === 'true',
//   },
// };
