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
exports.PerformanceAppraisalResultService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const employee_service_1 = require("../../employee/employee.service");
let PerformanceAppraisalResultService = class PerformanceAppraisalResultService {
    constructor(dbService, employeeService) {
        this.dbService = dbService;
        this.employeeService = employeeService;
        this.employeeIdArray = [];
        this.employeeDataArray = [];
        this.finalEmployeeDataArray = [];
    }
    create(createPerformanceAppraisalResultDto) {
        let create = this.dbService.performance_appraisal_result.create({
            data: createPerformanceAppraisalResultDto
        });
        return {
            statusCode: 200,
            message: 'Successfully Submit Performance Appraisal Form',
            data: create
        };
    }
    async findAll() {
        return 'This action returns all performanceAppraisalResults';
    }
    async findDataById(id) {
    }
    async findOneByEmail(email) {
        return this.dbService.performance_appraisal_result.findMany({
            where: {
                employee_email: email
            }
        });
        console.log(email);
    }
    async findOneByYear(email, year) {
        let appraisalYear = parseInt(year, 10);
        return this.dbService.performance_appraisal_result.findMany({
            where: {
                employee_email: email,
                appraisal_year: appraisalYear
            }
        });
    }
    update(id, updatePerformanceAppraisalResultDto) {
        return `This action updates a #${id} performanceAppraisalResult`;
    }
    remove(id) {
        return `This action removes a #${id} performanceAppraisalResult`;
    }
};
exports.PerformanceAppraisalResultService = PerformanceAppraisalResultService;
exports.PerformanceAppraisalResultService = PerformanceAppraisalResultService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, employee_service_1.EmployeeService])
], PerformanceAppraisalResultService);
