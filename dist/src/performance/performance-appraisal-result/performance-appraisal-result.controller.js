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
exports.PerformanceAppraisalResultController = void 0;
const common_1 = require("@nestjs/common");
const performance_appraisal_result_service_1 = require("./performance-appraisal-result.service");
const create_performance_appraisal_result_dto_1 = require("./dto/create-performance-appraisal-result.dto");
let PerformanceAppraisalResultController = class PerformanceAppraisalResultController {
    constructor(performanceAppraisalResultService) {
        this.performanceAppraisalResultService = performanceAppraisalResultService;
    }
    create(createPerformanceAppraisalResultDto) {
        return this.performanceAppraisalResultService.create(createPerformanceAppraisalResultDto);
    }
    async findById(id) {
        return await this.performanceAppraisalResultService.findDataById(id);
    }
    async findOne(email) {
        return await this.performanceAppraisalResultService.findOneByEmail(email);
    }
    async findOneByYear(email, year) {
        return await this.performanceAppraisalResultService.findOneByYear(email, year);
    }
};
exports.PerformanceAppraisalResultController = PerformanceAppraisalResultController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_performance_appraisal_result_dto_1.CreatePerformanceAppraisalResultDto]),
    __metadata("design:returntype", void 0)
], PerformanceAppraisalResultController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PerformanceAppraisalResultController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('by/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerformanceAppraisalResultController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':email/:year'),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Param)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PerformanceAppraisalResultController.prototype, "findOneByYear", null);
exports.PerformanceAppraisalResultController = PerformanceAppraisalResultController = __decorate([
    (0, common_1.Controller)('performance-appraisal-result'),
    __metadata("design:paramtypes", [performance_appraisal_result_service_1.PerformanceAppraisalResultService])
], PerformanceAppraisalResultController);
