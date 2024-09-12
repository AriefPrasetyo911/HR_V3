import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerformanceAppraisalExampleDto } from './create-performance-appraisal-example.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePerformanceAppraisalExampleDto extends PartialType(CreatePerformanceAppraisalExampleDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_category_id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_example: string;
}
