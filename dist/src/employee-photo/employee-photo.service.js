"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeePhotoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EmployeePhotoService = class EmployeePhotoService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(createEmployeePhotoDto) {
        let createData = await this.dbService.employee_photo.create({
            data: createEmployeePhotoDto
        });
        return {
            statusCode: 200,
            message: 'Success Add New Employee Photo',
            data: createData
        };
    }
    async uploadFile(file) {
        return {
            originalName: file.originalname,
            filename: file.originalname,
            path: file.path,
            size: file.size,
            mimeType: file.mimetype
        };
    }
    async findAll() {
        let employeePhotoData = await this.dbService.employee_photo.findMany();
        return employeePhotoData;
    }
    async findOne(employee_id) {
        let employeePhotoData = await this.dbService.employee_photo.findFirst({
            where: {
                employee_id
            }
        });
        return employeePhotoData;
    }
    async update(id, updateEmployeePhotoDto) {
        let updateData = await this.dbService.employee_photo.update({
            data: {
                ...updateEmployeePhotoDto
            },
            where: {
                id: id
            }
        });
        return updateData;
    }
    async remove(id) {
        let deleteData = await this.dbService.employee_photo.delete({
            where: {
                id: id
            }
        });
        return {
            statusCode: 200,
            message: 'Success Delete Employee Photo',
            data: deleteData
        };
    }
};
exports.EmployeePhotoService = EmployeePhotoService;
exports.EmployeePhotoService = EmployeePhotoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeePhotoService);
