import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePerformanceAppraisalYearDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    year: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    evaluation_period: string
}
