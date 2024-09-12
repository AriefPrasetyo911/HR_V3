import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePerformanceAppraisalCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question_category: string;
}
