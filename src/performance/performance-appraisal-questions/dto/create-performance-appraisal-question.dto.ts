import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePerformanceAppraisalQuestionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_category: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_example: string;
}
