"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceAppraisalQuestionsModule = void 0;
const common_1 = require("@nestjs/common");
const performance_appraisal_questions_service_1 = require("./performance-appraisal-questions.service");
const performance_appraisal_questions_controller_1 = require("./performance-appraisal-questions.controller");
const performance_appraisal_category_service_1 = require("../performance-appraisal-category/performance-appraisal-category.service");
const performance_appraisal_example_service_1 = require("../performance-appraisal-example/performance-appraisal-example.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const prisma_module_1 = require("../../prisma/prisma.module");
let PerformanceAppraisalQuestionsModule = class PerformanceAppraisalQuestionsModule {
};
exports.PerformanceAppraisalQuestionsModule = PerformanceAppraisalQuestionsModule;
exports.PerformanceAppraisalQuestionsModule = PerformanceAppraisalQuestionsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [performance_appraisal_questions_controller_1.PerformanceAppraisalQuestionsController],
        providers: [
            performance_appraisal_questions_service_1.PerformanceAppraisalQuestionsService,
            performance_appraisal_category_service_1.PerformanceAppraisalCategoryService,
            performance_appraisal_example_service_1.PerformanceAppraisalExampleService,
            prisma_service_1.PrismaService
        ],
    })
], PerformanceAppraisalQuestionsModule);
