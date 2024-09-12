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
exports.PerformanceApraisalCommentController = void 0;
const common_1 = require("@nestjs/common");
const performance_apraisal_comment_service_1 = require("./performance-apraisal-comment.service");
const create_performance_apraisal_comment_dto_1 = require("./dto/create-performance-apraisal-comment.dto");
let PerformanceApraisalCommentController = class PerformanceApraisalCommentController {
    constructor(performanceApraisalCommentService) {
        this.performanceApraisalCommentService = performanceApraisalCommentService;
    }
    create(createPerformanceApraisalCommentDto) {
        return this.performanceApraisalCommentService.create(createPerformanceApraisalCommentDto);
    }
    findByEmail(email, year) {
        return this.performanceApraisalCommentService.findByEmail(email, year);
    }
    findOne(id) {
        return this.performanceApraisalCommentService.findOne(+id);
    }
    remove(id) {
        return this.performanceApraisalCommentService.remove(+id);
    }
};
exports.PerformanceApraisalCommentController = PerformanceApraisalCommentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_performance_apraisal_comment_dto_1.CreatePerformanceApraisalCommentDto]),
    __metadata("design:returntype", void 0)
], PerformanceApraisalCommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':email/:year'),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Param)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PerformanceApraisalCommentController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerformanceApraisalCommentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerformanceApraisalCommentController.prototype, "remove", null);
exports.PerformanceApraisalCommentController = PerformanceApraisalCommentController = __decorate([
    (0, common_1.Controller)('performance-appraisal-comment'),
    __metadata("design:paramtypes", [performance_apraisal_comment_service_1.PerformanceApraisalCommentService])
], PerformanceApraisalCommentController);
