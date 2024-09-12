import { Injectable } from '@nestjs/common';
// import { CreatePerformanceAppraisalCategoryDto } from './dto/create-performance-appraisal-category.dto';
import { UpdatePerformanceAppraisalCategoryDto } from './dto/update-performance-appraisal-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Prisma, } from '@prisma/client';

@Injectable()
export class PerformanceAppraisalCategoryService {
  constructor(private dbService: PrismaService) { }

  async create(data: any) {
    return await this.dbService.performance_appraisal_category.create({ data });
  }

  async findAll() {
    return await this.dbService.performance_appraisal_category.findMany();
  }

  async findOne(id: number) {
    return await this.dbService.performance_appraisal_category.findFirst({
      where: { id },
    })
  }

  async update(id: number, data: UpdatePerformanceAppraisalCategoryDto) {
    return await this.dbService.performance_appraisal_category.update({
      where: { id },
      data
    })
  }

  async remove(id: number) {
    return await this.dbService.performance_appraisal_category.delete({
      where: { id },
    })
  }
  
  // async create(createPerformanceAppraisalCategoryDto: any) {
  //   let performanceAppraisalCategoryData = await this.dbService.performance_appraisal_category.create({
  //     data: createPerformanceAppraisalCategoryDto      
  //   });

  //   if(performanceAppraisalCategoryData) {
  //     return {
  //       statusCode: 200,
  //       message: 'Success Add New Performance Appraisal Category',
  //       data: performanceAppraisalCategoryData
  //     }
  //   }
  // }

  // async findAll() {
  //   let allPerformanceAppraisalCategory = await this.dbService.performance_appraisal_category.findMany();
  //   return allPerformanceAppraisalCategory;
  // }

  // async findOne(id: number) {
  //   return await this.dbService.performance_appraisal_category.findFirst({where: {id: id}});
  // }

  // update(id: number, updatePerformanceAppraisalCategoryDto: UpdatePerformanceAppraisalCategoryDto) {
  //   return `This action updates a #${id} performanceAppraisalCategory`;
  // }

  // async remove(id: number) {
  //   let deleteData = await this.dbService.performance_appraisal_category.delete({
  //     where: {
  //       id: id
  //     }
  //   });
  //   if(deleteData) {
  //     return {
  //       statusCode: 200,
  //       message: 'Performance Appraisal Category Data Successfully Deleted',
  //     }
  //   }
  // }
}

