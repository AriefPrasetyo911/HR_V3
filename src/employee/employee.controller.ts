import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Roles } from 'src/auth/decorators/roles/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
// import { RolesGuard } from 'src/auth/guards/roles/roles.guard';

@Controller('employee')
// @UseGuards(RolesGuard)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeService.create(createEmployeeDto);
  }

  @Get()
  // @Get('admin')
  @Roles('admin')
  async findAll() {
    return await this.employeeService.findAll();
  }

  @Get(':employee_id')
  async findOne(@Param('employee_id') employee_id: string) {
    return await this.employeeService.findOne(employee_id);
  }

  @Get('employee_id/:email')
  async findOneByEmployeeId(@Param('email') email: string) {
    return await this.employeeService.findOneByEmail(email);
  }

  @Get('employee_name/:name')
  async findOneByEmployeeName(@Param('name') name: string){
    return await this.employeeService.findOneByName(name);
  }

  @Get('supervisor/email/:email')
  async findOneBySupervisorEmail(@Param('email') email: string){
    return await this.employeeService.findOneBySupervisoremail(email);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return await this.employeeService.update(+id, updateEmployeeDto);
  }

  @Patch('email/:email')
  async updateByEmail(@Param('email') email: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return await this.employeeService.updateByEmail(email, updateEmployeeDto);
  }

  @Delete(':id/:employee_id')
  async remove(@Param('id') id: string, @Param('employee_id') employee: string) {
    return await this.employeeService.remove(+id, employee);
  }
}