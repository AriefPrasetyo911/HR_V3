import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePerformanceApraisalCommentDto } from './create-performance-apraisal-comment.dto';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePerformanceApraisalCommentDto extends PartialType(CreatePerformanceApraisalCommentDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    employee_email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    appraisal_year: number;

    @ApiProperty()
    userCommentCategory1Example1: string;

    @ApiProperty()
    userCommentCategory1Example2: string;

    @ApiProperty()
    userCommentCategory1Example3: string;

    @ApiProperty()
    userCommentCategory1Example4: string;

    @ApiProperty()
    userCommentCategory1Example5: string;

    @ApiProperty()
    userCommentCategory2Example1: string;

    @ApiProperty()
    userCommentCategory2Example2: string;

    @ApiProperty()
    userCommentCategory2Example3: string;

    @ApiProperty()
    userCommentCategory2Example4: string;

    @ApiProperty()
    userCommentCategory2Example5: string;

    @ApiProperty()
    userCommentCategory3Example1: string;

    @ApiProperty()
    userCommentCategory3Example2: string;

    @ApiProperty()
    userCommentCategory3Example3: string;

    @ApiProperty()
    userCommentCategory3Example4: string;

    @ApiProperty()
    userCommentCategory3Example5: string;

    @ApiProperty()
    userCommentCategory4Example1: string;

    @ApiProperty()
    userCommentCategory4Example2: string;

    @ApiProperty()
    userCommentCategory4Example3: string;

    @ApiProperty()
    userCommentCategory4Example4: string;

    @ApiProperty()
    userCommentCategory4Example5: string;

    @ApiProperty()
    userCommentCategory5Example1: string;

    @ApiProperty()
    userCommentCategory5Example2: string;

    @ApiProperty()
    userCommentCategory5Example3: string;

    @ApiProperty()
    userCommentCategory5Example4: string;

    @ApiProperty()
    userCommentCategory5Example5: string;

    @ApiProperty()
    userCommentCategory6Example1: string;

    @ApiProperty()
    userCommentCategory6Example2: string;

    @ApiProperty()
    userCommentCategory6Example3: string;

    @ApiProperty()
    userCommentCategory6Example4: string;

    @ApiProperty()
    userCommentCategory6Example5: string;

    @ApiProperty()
    userCommentCategory7Example1: string;

    @ApiProperty()
    userCommentCategory7Example2: string;

    @ApiProperty()
    userCommentCategory7Example3: string;

    @ApiProperty()
    userCommentCategory7Example4: string;

    @ApiProperty()
    userCommentCategory7Example5: string;

    @ApiProperty()
    userCommentCategory8Example1: string;

    @ApiProperty()
    userCommentCategory8Example2: string;

    @ApiProperty()
    userCommentCategory8Example3: string;

    @ApiProperty()
    userCommentCategory8Example4: string;

    @ApiProperty()
    userCommentCategory8Example5: string;

    @ApiProperty()
    userCommentCategory9Example1: string;

    @ApiProperty()
    userCommentCategory9Example2: string;

    @ApiProperty()
    userCommentCategory9Example3: string;

    @ApiProperty()
    userCommentCategory9Example4: string;

    @ApiProperty()
    userCommentCategory9Example5: string;
}
