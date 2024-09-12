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
exports.PerformanceAppraisalExampleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PerformanceAppraisalExampleService = class PerformanceAppraisalExampleService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async create(createPerformanceAppraisalExampleDto) {
        let performanceAppraisalExampleData = await this.dbService.performance_appraisal_examples.create({
            data: createPerformanceAppraisalExampleDto
        });
        if (performanceAppraisalExampleData) {
            return {
                statusCode: 200,
                message: 'Success Add New Performance Appraisal Example',
                data: performanceAppraisalExampleData
            };
        }
    }
    async findAll() {
        let allData = await this.dbService.performance_appraisal_examples.findMany();
        return allData;
    }
    findOne(id) {
        let detailData = this.dbService.performance_appraisal_examples.findMany({
            where: {
                question_category_id: id
            }
        });
        return detailData;
    }
    async update(id, updatePerformanceAppraisalExampleDto) {
        let updateData = await this.dbService.performance_appraisal_examples.update({
            where: {
                id
            },
            data: updatePerformanceAppraisalExampleDto
        });
        return updateData;
    }
    async remove(id) {
        let deleteData = await this.dbService.performance_appraisal_examples.delete({
            where: {
                id
            }
        });
        if (deleteData) {
            return {
                statusCode: 200,
                message: 'Performance Appraisal Example Data Successfully Deleted',
            };
        }
    }
};
exports.PerformanceAppraisalExampleService = PerformanceAppraisalExampleService;
exports.PerformanceAppraisalExampleService = PerformanceAppraisalExampleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PerformanceAppraisalExampleService);
