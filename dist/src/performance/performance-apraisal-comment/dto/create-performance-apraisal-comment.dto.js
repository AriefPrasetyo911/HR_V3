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
exports.CreatePerformanceApraisalCommentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePerformanceApraisalCommentDto {
}
exports.CreatePerformanceApraisalCommentDto = CreatePerformanceApraisalCommentDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "employee_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePerformanceApraisalCommentDto.prototype, "appraisal_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory1Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory1Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory1Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory1Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory1Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory2Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory2Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory2Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory2Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory2Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory3Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory3Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory3Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory3Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory3Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory4Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory4Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory4Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory4Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory4Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory5Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory5Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory5Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory5Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory5Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory6Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory6Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory6Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory6Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory6Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory7Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory7Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory7Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory7Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory7Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory8Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory8Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory8Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory8Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory8Example5", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory9Example1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory9Example2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory9Example3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory9Example4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePerformanceApraisalCommentDto.prototype, "userCommentCategory9Example5", void 0);
