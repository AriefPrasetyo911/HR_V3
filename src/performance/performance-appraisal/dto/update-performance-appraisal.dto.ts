import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerformanceAppraisalDto } from './create-performance-appraisal.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePerformanceAppraisalDto extends PartialType(CreatePerformanceAppraisalDto) {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    employee_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    answer_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_category: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_example: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    status: string;
}
