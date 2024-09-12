import { PartialType } from '@nestjs/swagger';
import { CreatePerformanceAppraisalQuestionDto } from './create-performance-appraisal-question.dto';

export class UpdatePerformanceAppraisalQuestionDto extends PartialType(CreatePerformanceAppraisalQuestionDto) {}
