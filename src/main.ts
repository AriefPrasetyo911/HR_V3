import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
//serve static files
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';

const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //serve static files
  const uploadDir = join(process.cwd(), 'uploads/employee_photo');
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir);
  }
  app.use('/uploads/employee_photo', express.static(join(process.cwd(), 'uploads/employee_photo')));

  //prefix
  app.setGlobalPrefix('/api/v1/');
  //prismaORM
  app.enableShutdownHooks();
  //swagger
  const config = new DocumentBuilder()
    .setTitle('Open API Test HR System')
    .setDescription('API Test HR System')
    .setVersion('1.0')
    .addTag('HR System')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('open-api', app, document);
  //CORS
  const cors = {
    origin: [
      'http://localhost:4200',
      'http://localhost',
      'http://localhost:4500',
      'http://192.168.1.6:4500',
      '*',
    ],
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: ['*'],
  };
  app.enableCors(cors);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors( new ClassSerializerInterceptor(app.get(Reflector)));
  //listern port
  await app.listen(port);
}
bootstrap();