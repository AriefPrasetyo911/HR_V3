import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    employee_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    employee_full_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    gender: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    job_title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    department: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phone_number: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    join_date: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nationality: string;

    @ApiProperty()
    date_completion: string;

    @ApiProperty()
    appraisal_status: string;

    @ApiProperty()
    supervisor_name: string;

    @ApiProperty()
    supervisor_email: string;
}