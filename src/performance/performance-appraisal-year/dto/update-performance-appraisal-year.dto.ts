import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerformanceAppraisalYearDto } from './create-performance-appraisal-year.dto';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePerformanceAppraisalYearDto extends PartialType(CreatePerformanceAppraisalYearDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    year: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    evaluation_period: string
}
