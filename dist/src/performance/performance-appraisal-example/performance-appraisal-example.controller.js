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
exports.PerformanceAppraisalExampleController = void 0;
const common_1 = require("@nestjs/common");
const performance_appraisal_example_service_1 = require("./performance-appraisal-example.service");
const create_performance_appraisal_example_dto_1 = require("./dto/create-performance-appraisal-example.dto");
const update_performance_appraisal_example_dto_1 = require("./dto/update-performance-appraisal-example.dto");
let PerformanceAppraisalExampleController = class PerformanceAppraisalExampleController {
    constructor(performanceAppraisalExampleService) {
        this.performanceAppraisalExampleService = performanceAppraisalExampleService;
    }
    async create(createExample) {
        return await this.performanceAppraisalExampleService.create(createExample);
    }
    async findAll() {
        return await this.performanceAppraisalExampleService.findAll();
    }
    async findOne(id) {
        return await this.performanceAppraisalExampleService.findOne(+id);
    }
    async update(id, data) {
        return await this.performanceAppraisalExampleService.update(+id, data);
    }
    async remove(id) {
        return await this.performanceAppraisalExampleService.remove(+id);
    }
};
exports.PerformanceAppraisalExampleController = PerformanceAppraisalExampleController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_performance_appraisal_example_dto_1.CreatePerformanceAppraisalExampleDto]),
    __metadata("design:returntype", Promise)
], PerformanceAppraisalExampleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PerformanceAppraisalExampleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PerformanceAppraisalExampleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_performance_appraisal_example_dto_1.UpdatePerformanceAppraisalExampleDto]),
    __metadata("design:returntype", Promise)
], PerformanceAppraisalExampleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PerformanceAppraisalExampleController.prototype, "remove", null);
exports.PerformanceAppraisalExampleController = PerformanceAppraisalExampleController = __decorate([
    (0, common_1.Controller)('performance-appraisal-example'),
    __metadata("design:paramtypes", [performance_appraisal_example_service_1.PerformanceAppraisalExampleService])
], PerformanceAppraisalExampleController);
