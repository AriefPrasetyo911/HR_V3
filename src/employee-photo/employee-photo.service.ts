import { Injectable } from '@nestjs/common';
import { CreateEmployeePhotoDto } from './dto/create-employee-photo.dto';
import { UpdateEmployeePhotoDto } from './dto/update-employee-photo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeePhotoService {
  // employeePhotoArray = [];
  constructor(private dbService: PrismaService) { }

  async create(createEmployeePhotoDto: any) {
    let createData = await this.dbService.employee_photo.create({
      data: createEmployeePhotoDto
    });

    return {
      statusCode: 200,
      message: 'Success Add New Employee Photo',
      data: createData
    }
  }

  async uploadFile(file: Express.Multer.File) {

    return {
      originalName: file.originalname,
      filename: file.originalname,
      path: file.path,
      size: file.size,
      mimeType: file.mimetype
    }
    
  }

  async findAll() {
    let employeePhotoData = await this.dbService.employee_photo.findMany();

    return employeePhotoData;
  }

  async findOne(employee_id: string) {
    let employeePhotoData = await this.dbService.employee_photo.findFirst({
      where: {
        employee_id
      }
    });

    return employeePhotoData;    
  }

  async update(id: number, updateEmployeePhotoDto: UpdateEmployeePhotoDto) {
    let updateData = await this.dbService.employee_photo.update({
      data: {
        ...updateEmployeePhotoDto
      }, 
      where: {
        id: id
      }
    })
    return updateData;
  }

  async remove(id: number) {
    let deleteData = await this.dbService.employee_photo.delete({
      where: {
        id: id
      }
    })

    return {
      statusCode: 200,
      message: 'Success Delete Employee Photo',
      data: deleteData
    }
  }
}
