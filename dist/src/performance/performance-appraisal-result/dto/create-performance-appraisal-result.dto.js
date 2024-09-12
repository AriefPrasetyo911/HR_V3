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
exports.CreatePerformanceAppraisalResultDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePerformanceAppraisalResultDto {
}
exports.CreatePerformanceAppraisalResultDto = CreatePerformanceAppraisalResultDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePerformanceAppraisalResultDto.prototype, "employee_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePerformanceAppraisalResultDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "appraisal_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "total_point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "average_point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory1Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory1Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory1Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory1Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory1Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory2Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory2Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory2Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory2Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory2Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory3Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory3Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory3Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory3Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory3Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory4Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory4Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory4Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory4Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory4Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory5Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory5Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory5Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory5Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory5Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory6Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory6Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory6Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory6Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory6Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory7Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory7Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory7Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory7Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory7Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory8Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory8Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory8Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory8Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory8Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory9Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory9Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory9Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory9Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePerformanceAppraisalResultDto.prototype, "answerCategory9Example5", void 0);
