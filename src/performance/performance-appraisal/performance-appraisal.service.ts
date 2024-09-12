import { Injectable } from '@nestjs/common';
import { CreatePerformanceAppraisalDto } from './dto/create-performance-appraisal.dto';
import { UpdatePerformanceAppraisalDto } from './dto/update-performance-appraisal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PerformanceAppraisalService {
  constructor(private dbService: PrismaService) { }
  
  async create(createPerformanceAppraisalDto: any) {
    const createData = await this.dbService.performance_appraisal_result.create({
      data: createPerformanceAppraisalDto
    });

    return {
      statusCode: 200,
      message: 'Success Add New Performance Appraisal',
      data: createData
    }
  }

  async findAll() {
    const allPerformanceAppraisal = await this.dbService.performance_appraisal_result.findMany();
    return allPerformanceAppraisal;
  }

  async findOne(id: number) {
    const detailPerformanceAppraisal = await this.dbService.performance_appraisal_result.findFirst({
      where: {
        id
      }
    });

    return detailPerformanceAppraisal;
  }

  update(id: number, updatePerformanceAppraisalDto: UpdatePerformanceAppraisalDto) {
    const updateData = this.dbService.performance_appraisal_result.update({
      data: updatePerformanceAppraisalDto,
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

  remove(id: number) {
    const deleteData = this.dbService.performance_appraisal_result.delete({
      where: {
        id
      }
    });

    return {
      statusCode: 200,
      message: 'Delete Success',
      data: deleteData
    }
  }
}
