"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceAppraisalExampleModule = void 0;
const common_1 = require("@nestjs/common");
const performance_appraisal_example_service_1 = require("./performance-appraisal-example.service");
const performance_appraisal_example_controller_1 = require("./performance-appraisal-example.controller");
const prisma_module_1 = require("../../prisma/prisma.module");
let PerformanceAppraisalExampleModule = class PerformanceAppraisalExampleModule {
};
exports.PerformanceAppraisalExampleModule = PerformanceAppraisalExampleModule;
exports.PerformanceAppraisalExampleModule = PerformanceAppraisalExampleModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [performance_appraisal_example_controller_1.PerformanceAppraisalExampleController],
        providers: [performance_appraisal_example_service_1.PerformanceAppraisalExampleService],
        exports: [performance_appraisal_example_service_1.PerformanceAppraisalExampleService],
    })
], PerformanceAppraisalExampleModule);
