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
exports.PerformanceAppraisalController = void 0;
const common_1 = require("@nestjs/common");
const performance_appraisal_service_1 = require("./performance-appraisal.service");
const create_performance_appraisal_dto_1 = require("./dto/create-performance-appraisal.dto");
const update_performance_appraisal_dto_1 = require("./dto/update-performance-appraisal.dto");
let PerformanceAppraisalController = class PerformanceAppraisalController {
    constructor(performanceAppraisalService) {
        this.performanceAppraisalService = performanceAppraisalService;
    }
    create(createPerformanceAppraisalDto) {
        return this.performanceAppraisalService.create(createPerformanceAppraisalDto);
    }
    findAll() {
        return this.performanceAppraisalService.findAll();
    }
    findOne(id) {
        return this.performanceAppraisalService.findOne(+id);
    }
    update(id, updatePerformanceAppraisalDto) {
        return this.performanceAppraisalService.update(+id, updatePerformanceAppraisalDto);
    }
    remove(id) {
        return this.performanceAppraisalService.remove(+id);
    }
};
exports.PerformanceAppraisalController = PerformanceAppraisalController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_performance_appraisal_dto_1.CreatePerformanceAppraisalDto]),
    __metadata("design:returntype", void 0)
], PerformanceAppraisalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PerformanceAppraisalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerformanceAppraisalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_performance_appraisal_dto_1.UpdatePerformanceAppraisalDto]),
    __metadata("design:returntype", void 0)
], PerformanceAppraisalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerformanceAppraisalController.prototype, "remove", null);
exports.PerformanceAppraisalController = PerformanceAppraisalController = __decorate([
    (0, common_1.Controller)('performance-appraisal'),
    __metadata("design:paramtypes", [performance_appraisal_service_1.PerformanceAppraisalService])
], PerformanceAppraisalController);
