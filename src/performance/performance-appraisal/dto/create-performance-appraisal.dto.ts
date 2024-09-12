import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePerformanceAppraisalDto {
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
