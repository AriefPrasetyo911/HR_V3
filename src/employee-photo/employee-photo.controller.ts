import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EmployeePhotoService } from './employee-photo.service';
import { CreateEmployeePhotoDto } from './dto/create-employee-photo.dto';
import { UpdateEmployeePhotoDto } from './dto/update-employee-photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

// const storage = diskStorage({
//   destination: './uploads/employee_photo',
//   filename(req, file, callback) {
//       const name = file.originalname.split('.')[0];
//       const fileExt = extname(file.originalname);
//       // const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
//       callback(null, `${name}${fileExt}`)
//   },
// })
@Controller('employee-photo')
export class EmployeePhotoController {
  constructor(private readonly employeePhotoService: EmployeePhotoService) {}

  @Post()
  async create(@Body() createEmployeePhotoDto: CreateEmployeePhotoDto) {
    return await this.employeePhotoService.create(createEmployeePhotoDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('photo', {
    limits: {
      fileSize: Math.pow(1024, 2) * 1
    }
  }))
  async uploadFile(@UploadedFile() file ){
    // return {
    //   message: 'File Uploaded Successfully',
    // }
    const fileURL = `http://localhost:3000/uploads/employee_photo/${file.filename}`;
    return {
      url: fileURL
    }
  }
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('photo', {storage: storage}))
  // async uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   // return await this.employeePhotoService.uploadFile(file);
  //   return {
  //     message: 'File Uploaded Successfully',
  //     filename: file.filename
  //   }
    
  // }

  @Get()
  async findAll() {
    return await this.employeePhotoService.findAll();
  }

  @Get(':employee_id')
  async findOne(@Param('employee_id') employee_id: string) {
    return await this.employeePhotoService.findOne(employee_id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEmployeePhotoDto: UpdateEmployeePhotoDto) {
    return await this.employeePhotoService.update(+id, updateEmployeePhotoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.employeePhotoService.remove(+id);
  }
}