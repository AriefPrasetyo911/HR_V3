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
exports.PerformanceAppraisalQuestionsService = void 0;
const common_1 = require("@nestjs/common");
const performance_appraisal_category_service_1 = require("../performance-appraisal-category/performance-appraisal-category.service");
const performance_appraisal_example_service_1 = require("../performance-appraisal-example/performance-appraisal-example.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let PerformanceAppraisalQuestionsService = class PerformanceAppraisalQuestionsService {
    constructor(category, example, dbService) {
        this.category = category;
        this.example = example;
        this.dbService = dbService;
    }
    async getPerformanceQuestions() {
        let questions = this.dbService.$queryRaw `SELECT DISTINCT Performance_appraisal_category.question_category, Performance_appraisal_examples.question_example
    FROM Performance_appraisal_category
    INNER JOIN Performance_appraisal_examples
    ON Performance_appraisal_category.id = Performance_appraisal_examples.question_category_id ORDER BY Performance_appraisal_category.id;`;
        return questions;
    }
    findOne(id) {
        return `This action returns a #${id} performanceAppraisalQuestion`;
    }
};
exports.PerformanceAppraisalQuestionsService = PerformanceAppraisalQuestionsService;
exports.PerformanceAppraisalQuestionsService = PerformanceAppraisalQuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [performance_appraisal_category_service_1.PerformanceAppraisalCategoryService,
        performance_appraisal_example_service_1.PerformanceAppraisalExampleService,
        prisma_service_1.PrismaService])
], PerformanceAppraisalQuestionsService);
