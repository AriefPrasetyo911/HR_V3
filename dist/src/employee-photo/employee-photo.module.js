"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeePhotoModule = void 0;
const common_1 = require("@nestjs/common");
const employee_photo_service_1 = require("./employee-photo.service");
const employee_photo_controller_1 = require("./employee-photo.controller");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const multer_1 = require("multer");
const uploadDir = (0, path_1.join)(process.cwd(), 'uploads/employee_photo');
let EmployeePhotoModule = class EmployeePhotoModule {
};
exports.EmployeePhotoModule = EmployeePhotoModule;
exports.EmployeePhotoModule = EmployeePhotoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: (req, file, cb) => {
                        cb(null, uploadDir);
                    },
                    filename: (req, file, cb) => {
                        const name = file.originalname.split('.')[0];
                        const ext = (0, path_1.extname)(file.originalname);
                        const filename = `${name}${ext}`;
                        cb(null, filename);
                    }
                }),
                fileFilter(req, file, callback) {
                    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
                        return callback(new Error('Only image files are allowed!'), false);
                    }
                    callback(null, true);
                },
            }),
        ],
        controllers: [employee_photo_controller_1.EmployeePhotoController],
        providers: [employee_photo_service_1.EmployeePhotoService],
    })
], EmployeePhotoModule);
