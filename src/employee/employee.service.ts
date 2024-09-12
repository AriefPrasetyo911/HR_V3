import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';
// import { EmployeePhotoService } from 'src/employee-photo/employee-photo.service';

@Injectable()
export class EmployeeService {
  constructor(private dbService: PrismaService,
    private readonly configService: ConfigService
  ) { }
  async create(createEmployeeDto: any) {
    const createData = await this.dbService.employee_data.create({
      data: createEmployeeDto
    });

    return {
      statusCode: 200,
      message: 'Success Register New User',
      data: createData
    }
  }

  async findAll() {
    const allEmployee = await this.dbService.employee_data.findMany();
    return allEmployee;
  }

  async findOne(employee_id: string) {  
    const detailEmployee = await this.dbService.employee_data.findFirst({
      where: {
        employee_id: employee_id
      }
    });
    return detailEmployee;
  }

  async findOneByEmail(email: string) {
    const detailEmployee = await this.dbService.employee_data.findFirst({
      where: {
        email: email
      }
    });
    return detailEmployee;
  }

  async findOneByName(name: string) {
    const detailEmployee = await this.dbService.employee_data.findFirst({
      where: {
        employee_full_name: name
      }
    });
    return detailEmployee;
  }

  async findOneBySupervisoremail(email: string) {
    const detailEmployee = await this.dbService.employee_data.findFirst({
      where: {
        supervisor_email: email
      }
    });
    return detailEmployee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const updateData = await this.dbService.employee_data.update({
      data: updateEmployeeDto,
      where: {
        id
      }
    });

    return {
      statusCode: 200,
      message: 'Update Success',
      data: updateData
    }
  }

  async updateByEmail(email: string, updateEmployeeDto: UpdateEmployeeDto) {
    const updateData = await this.dbService.employee_data.update({
      data: updateEmployeeDto,
      where: {
        email
      }
    });
    return updateData;
  }

  async remove(id: number, employee_id: string) {
    let rootDir = process.cwd();
    let baseDir = rootDir+'/uploads/employee_photo/';

    let detailData = await this.dbService.employee_photo.findFirst({
      where: {
        employee_id: employee_id
      }
    });
    let stringify = JSON.stringify(detailData);
    let parse = JSON.parse(stringify);

    let emp_photo = parse.photo;
    //===========================
    //get email
    let detailEmployee = await this.dbService.employee_data.findFirst({
      where: {
        employee_id: employee_id
      }
    });
    let employeeStringify = JSON.stringify(detailEmployee);
    let employeeParse = JSON.parse(employeeStringify);
    let employeeEmail = employeeParse.email;
    //===========================

    // delete employee_photo
    let detelePhoto = this.dbService.employee_photo.deleteMany({
      where: {
        photo: emp_photo
      }
    });

    //delete employee_data
    let deleteEmployeeData = this.dbService.employee_data.delete({
      where: {
        email: employeeEmail
      }
    });

    if(deleteEmployeeData && detelePhoto){
      fs.unlink(baseDir+emp_photo, (err) => {
        if (err){
          throw err;
        } else {
          return {
            statusCode: 200,
            message: 'Employee Data Successfully Deleted',
            data: detailData
          }
        }
      })
    } else {
      throw new Error('Employee Data Not Found');
    }
  }
} 