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
exports.PerformanceAppraisalYearService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PerformanceAppraisalYearService = class PerformanceAppraisalYearService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(createPerformanceAppraisalYearDto) {
        const createData = await this.dbService.performance_appraisal_year.create({
            data: createPerformanceAppraisalYearDto
        });
        return {
            statusCode: 200,
            message: 'Successfully Add New Evaluation Period',
            data: createData
        };
    }
    async findAll() {
        let checkData = await this.dbService.performance_appraisal_year.findMany();
        return checkData;
    }
    async findOne(id) {
        const detailPerformanceAppraisalYear = await this.dbService.performance_appraisal_year.findFirst({
            where: {
                id
            }
        });
        return detailPerformanceAppraisalYear;
    }
    async update(id, updatePerformanceAppraisalYearDto) {
        const updateData = await this.dbService.performance_appraisal_year.update({
            data: updatePerformanceAppraisalYearDto,
            where: {
                id
            }
        });
        return {
            statusCode: 200,
            message: 'Successfully Update Evaluation Period',
            data: updateData
        };
    }
    async remove(id) {
        const deleteData = await this.dbService.performance_appraisal_year.delete({
            where: {
                id
            }
        });
        return {
            statusCode: 200,
            message: 'Successfully Delete Evaluation Period',
            data: deleteData
        };
    }
};
exports.PerformanceAppraisalYearService = PerformanceAppraisalYearService;
exports.PerformanceAppraisalYearService = PerformanceAppraisalYearService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PerformanceAppraisalYearService);
