import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 安全性中間件
  app.use(helmet());
  app.use(compression());

  // 全域驗證管道`
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Global Prefix（所有 API 的路徑都會有此前綴）
  app.setGlobalPrefix('api/CloudDB');

  // CORS 設定
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization, X-API-Key',
  });

  app.getHttpAdapter().get('/', (req, res) => {
    res.redirect('/api/CloudDB');
  });

  // Swagger API 文件設定
  const config = new DocumentBuilder()
    .setTitle('東元雲平台API')
    .setDescription('案場資料操作手冊')
    .setVersion('1.0')
    .addTag('Solar')
    .addTag('BESS')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'X-API-Key',
        in: 'header',
        description: 'API Key for authentication',
      },
      'API-Key',
    )
    .addServer('/')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  // ✅ Swagger UI 掛在 /api/CloudDB
  SwaggerModule.setup('api/CloudDB', app, document, {
    swaggerOptions: {
      url: '/api/CloudDB-json', // 用來 fetch json
    },
    customSiteTitle: '東元雲平台 API 文件',
  });

  //監聽 Port
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api/CloudDB`);
  console.log(`API Documentation: http://localhost:${port}/api/CloudDB`);
}

bootstrap();