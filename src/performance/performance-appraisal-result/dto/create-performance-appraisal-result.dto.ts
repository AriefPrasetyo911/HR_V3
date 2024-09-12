import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePerformanceAppraisalResultDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    employee_email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    status: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    appraisal_year: number;

    @ApiProperty()    
    @IsInt()
    total_point: number;

    @ApiProperty()    
    average_point: number;

    @ApiProperty()
    answerCategory1Example1: number;

    @ApiProperty()
    answerCategory1Example2: number;

    @ApiProperty()
    answerCategory1Example3: number;

    @ApiProperty()
    answerCategory1Example4: number;

    @ApiProperty()
    answerCategory1Example5: number;

    @ApiProperty()
    answerCategory2Example1: number;

    @ApiProperty()
    answerCategory2Example2: number;

    @ApiProperty()
    answerCategory2Example3: number;

    @ApiProperty()
    answerCategory2Example4: number;

    @ApiProperty()
    answerCategory2Example5: number;

    @ApiProperty()
    answerCategory3Example1: number;

    @ApiProperty()
    answerCategory3Example2: number;

    @ApiProperty()
    answerCategory3Example3: number;

    @ApiProperty()
    answerCategory3Example4: number;

    @ApiProperty()
    answerCategory3Example5: number;

    @ApiProperty()
    answerCategory4Example1: number;

    @ApiProperty()
    answerCategory4Example2: number;

    @ApiProperty()
    answerCategory4Example3: number;

    @ApiProperty()
    answerCategory4Example4: number;

    @ApiProperty()
    answerCategory4Example5: number;

    @ApiProperty()
    answerCategory5Example1: number;

    @ApiProperty()
    answerCategory5Example2: number;

    @ApiProperty()
    answerCategory5Example3: number;

    @ApiProperty()
    answerCategory5Example4: number;

    @ApiProperty()
    answerCategory5Example5: number;

    @ApiProperty()
    answerCategory6Example1: number;

    @ApiProperty()
    answerCategory6Example2: number;

    @ApiProperty()
    answerCategory6Example3: number;

    @ApiProperty()
    answerCategory6Example4: number;

    @ApiProperty()
    answerCategory6Example5: number;

    @ApiProperty()
    answerCategory7Example1: number;

    @ApiProperty()
    answerCategory7Example2: number;

    @ApiProperty()
    answerCategory7Example3: number;

    @ApiProperty()
    answerCategory7Example4: number;

    @ApiProperty()
    answerCategory7Example5: number;

    @ApiProperty()
    answerCategory8Example1: number;

    @ApiProperty()
    answerCategory8Example2: number;

    @ApiProperty()
    answerCategory8Example3: number;

    @ApiProperty()
    answerCategory8Example4: number;

    @ApiProperty()
    answerCategory8Example5: number;

    @ApiProperty()
    answerCategory9Example1: number;

    @ApiProperty()
    answerCategory9Example2: number;

    @ApiProperty()
    answerCategory9Example3: number;

    @ApiProperty()
    answerCategory9Example4: number;

    @ApiProperty()
    answerCategory9Example5: number;
}
