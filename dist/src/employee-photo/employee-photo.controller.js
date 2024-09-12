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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeePhotoController = void 0;
const common_1 = require("@nestjs/common");
const employee_photo_service_1 = require("./employee-photo.service");
const create_employee_photo_dto_1 = require("./dto/create-employee-photo.dto");
const update_employee_photo_dto_1 = require("./dto/update-employee-photo.dto");
const platform_express_1 = require("@nestjs/platform-express");
let EmployeePhotoController = class EmployeePhotoController {
    constructor(employeePhotoService) {
        this.employeePhotoService = employeePhotoService;
    }
    async create(createEmployeePhotoDto) {
        return await this.employeePhotoService.create(createEmployeePhotoDto);
    }
    async uploadFile(file) {
        const fileURL = `http://localhost:3000/uploads/employee_photo/${file.filename}`;
        return {
            url: fileURL
        };
    }
    async findAll() {
        return await this.employeePhotoService.findAll();
    }
    async findOne(employee_id) {
        return await this.employeePhotoService.findOne(employee_id);
    }
    async update(id, updateEmployeePhotoDto) {
        return await this.employeePhotoService.update(+id, updateEmployeePhotoDto);
    }
    async remove(id) {
        return await this.employeePhotoService.remove(+id);
    }
};
exports.EmployeePhotoController = EmployeePhotoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_photo_dto_1.CreateEmployeePhotoDto]),
    __metadata("design:returntype", Promise)
], EmployeePhotoController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', {
        limits: {
            fileSize: Math.pow(1024, 2) * 1
        }
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeePhotoController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeePhotoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':employee_id'),
    __param(0, (0, common_1.Param)('employee_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeePhotoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employee_photo_dto_1.UpdateEmployeePhotoDto]),
    __metadata("design:returntype", Promise)
], EmployeePhotoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeePhotoController.prototype, "remove", null);
exports.EmployeePhotoController = EmployeePhotoController = __decorate([
    (0, common_1.Controller)('employee-photo'),
    __metadata("design:paramtypes", [employee_photo_service_1.EmployeePhotoService])
], EmployeePhotoController);
