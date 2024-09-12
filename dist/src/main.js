"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const fs_1 = require("fs");
const express = require("express");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const uploadDir = (0, path_1.join)(process.cwd(), 'uploads/employee_photo');
    if (!(0, fs_1.existsSync)(uploadDir)) {
        (0, fs_1.mkdirSync)(uploadDir);
    }
    app.use('/uploads/employee_photo', express.static((0, path_1.join)(process.cwd(), 'uploads/employee_photo')));
    app.setGlobalPrefix('/api/v1/');
    app.enableShutdownHooks();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Open API Test HR System')
        .setDescription('API Test HR System')
        .setVersion('1.0')
        .addTag('HR System')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('open-api', app, document);
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
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    await app.listen(port);
}
bootstrap();
