"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePerformanceAppraisalQuestionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_performance_appraisal_question_dto_1 = require("./create-performance-appraisal-question.dto");
class UpdatePerformanceAppraisalQuestionDto extends (0, swagger_1.PartialType)(create_performance_appraisal_question_dto_1.CreatePerformanceAppraisalQuestionDto) {
}
exports.UpdatePerformanceAppraisalQuestionDto = UpdatePerformanceAppraisalQuestionDto;
