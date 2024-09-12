import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerformanceAppraisalCategoryDto } from './create-performance-appraisal-category.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePerformanceAppraisalCategoryDto extends PartialType(CreatePerformanceAppraisalCategoryDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_category: string;
}
