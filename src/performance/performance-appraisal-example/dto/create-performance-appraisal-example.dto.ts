import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePerformanceAppraisalExampleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    question_category_id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_example: string;
}
