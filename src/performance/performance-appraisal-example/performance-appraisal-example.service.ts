import { Injectable } from '@nestjs/common';
import { CreatePerformanceAppraisalExampleDto } from './dto/create-performance-appraisal-example.dto';
import { UpdatePerformanceAppraisalExampleDto } from './dto/update-performance-appraisal-example.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Prisma, Performance_appraisal_examples} from '@prisma/client';

@Injectable()
export class PerformanceAppraisalExampleService {
  constructor(private dbService: PrismaService) { }

  // async create(data: Prisma.Performance_appraisal_examplesCreateInput): Promise<Performance_appraisal_examples> {
  //   return await this.dbService.performance_appraisal_examples.create(
  //     { data }
  //   )  
  // }

  // async findAll(): Promise<Performance_appraisal_examples[]> {
  //   return await this.dbService.performance_appraisal_examples.findMany();
  // }

  // async findOne(id: number): Promise<Performance_appraisal_examples> {
  //   return await this.dbService.performance_appraisal_examples.findUnique({
  //     where: { id },
  //   })
    
  // }

  // async update(id: number, data: Prisma.Performance_appraisal_examplesUpdateInput): Promise<Performance_appraisal_examples> {
  //   return await this.dbService.performance_appraisal_examples.update({
  //     where: { id },
  //     data
  //   })
  // }

  // async remove(id: number): Promise<Performance_appraisal_examples> {
  //   return await this.dbService.performance_appraisal_examples.delete({
  //     where: { id },
  //   })
  // }

  //==============================================================
  
  async create(createPerformanceAppraisalExampleDto: any) {
    let performanceAppraisalExampleData = await this.dbService.performance_appraisal_examples.create({
      data: createPerformanceAppraisalExampleDto  
    });

    if(performanceAppraisalExampleData) {
      return {
        statusCode: 200,
        message: 'Success Add New Performance Appraisal Example',
        data: performanceAppraisalExampleData
      }
    }
  }

  async findAll() {
    let allData = await this.dbService.performance_appraisal_examples.findMany();
    return allData;
  }

  findOne(id: number) {
    let detailData = this.dbService.performance_appraisal_examples.findMany({
      where: {
        question_category_id: id
      }
    });
    return detailData;
  }

  async update(id: any, updatePerformanceAppraisalExampleDto: any) {
    let updateData = await this.dbService.performance_appraisal_examples.update({
      where: {
        id
      },
      data: updatePerformanceAppraisalExampleDto
    })

    return updateData;
  }

  async remove(id: number) {
    let deleteData = await this.dbService.performance_appraisal_examples.delete({
      where: {
        id
      }
    });

    if(deleteData) {
      return {
        statusCode: 200,
        message: 'Performance Appraisal Example Data Successfully Deleted',
      }
    }
  }
}
