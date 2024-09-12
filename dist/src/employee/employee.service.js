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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const fs = require("fs");
const config_1 = require("@nestjs/config");
let EmployeeService = class EmployeeService {
    constructor(dbService, configService) {
        this.dbService = dbService;
        this.configService = configService;
    }
    async create(createEmployeeDto) {
        const createData = await this.dbService.employee_data.create({
            data: createEmployeeDto
        });
        return {
            statusCode: 200,
            message: 'Success Register New User',
            data: createData
        };
    }
    async findAll() {
        const allEmployee = await this.dbService.employee_data.findMany();
        return allEmployee;
    }
    async findOne(employee_id) {
        const detailEmployee = await this.dbService.employee_data.findFirst({
            where: {
                employee_id: employee_id
            }
        });
        return detailEmployee;
    }
    async findOneByEmail(email) {
        const detailEmployee = await this.dbService.employee_data.findFirst({
            where: {
                email: email
            }
        });
        return detailEmployee;
    }
    async findOneByName(name) {
        const detailEmployee = await this.dbService.employee_data.findFirst({
            where: {
                employee_full_name: name
            }
        });
        return detailEmployee;
    }
    async findOneBySupervisoremail(email) {
        const detailEmployee = await this.dbService.employee_data.findFirst({
            where: {
                supervisor_email: email
            }
        });
        return detailEmployee;
    }
    async update(id, updateEmployeeDto) {
        const updateData = await this.dbService.employee_data.update({
            data: updateEmployeeDto,
            where: {
                id
            }
        });
        return {
            statusCode: 200,
            message: 'Update Success',
            data: updateData
        };
    }
    async updateByEmail(email, updateEmployeeDto) {
        const updateData = await this.dbService.employee_data.update({
            data: updateEmployeeDto,
            where: {
                email
            }
        });
        return updateData;
    }
    async remove(id, employee_id) {
        let rootDir = process.cwd();
        let baseDir = rootDir + '/uploads/employee_photo/';
        let detailData = await this.dbService.employee_photo.findFirst({
            where: {
                employee_id: employee_id
            }
        });
        let stringify = JSON.stringify(detailData);
        let parse = JSON.parse(stringify);
        let emp_photo = parse.photo;
        let detailEmployee = await this.dbService.employee_data.findFirst({
            where: {
                employee_id: employee_id
            }
        });
        let employeeStringify = JSON.stringify(detailEmployee);
        let employeeParse = JSON.parse(employeeStringify);
        let employeeEmail = employeeParse.email;
        let detelePhoto = this.dbService.employee_photo.deleteMany({
            where: {
                photo: emp_photo
            }
        });
        let deleteEmployeeData = this.dbService.employee_data.delete({
            where: {
                email: employeeEmail
            }
        });
        if (deleteEmployeeData && detelePhoto) {
            fs.unlink(baseDir + emp_photo, (err) => {
                if (err) {
                    throw err;
                }
                else {
                    return {
                        statusCode: 200,
                        message: 'Employee Data Successfully Deleted',
                        data: detailData
                    };
                }
            });
        }
        else {
            throw new Error('Employee Data Not Found');
        }
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], EmployeeService);
