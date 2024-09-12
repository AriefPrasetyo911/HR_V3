import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePerformanceAppraisalYearDto } from './dto/create-performance-appraisal-year.dto';
import { UpdatePerformanceAppraisalYearDto } from './dto/update-performance-appraisal-year.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PerformanceAppraisalYearService {
  constructor(private dbService: PrismaService) { }

  async create(createPerformanceAppraisalYearDto: CreatePerformanceAppraisalYearDto) {
    const createData = await this.dbService.performance_appraisal_year.create({
      data: createPerformanceAppraisalYearDto
    });

    return {
      statusCode: 200,
      message: 'Successfully Add New Evaluation Period',
      data: createData
    }
  }

  async findAll() {
    let checkData = await this.dbService.performance_appraisal_year.findMany();

    return checkData;
  }


  async findOne(id: number) {
    const detailPerformanceAppraisalYear = await this.dbService.performance_appraisal_year.findFirst({
      where: {
        id
      }
    });

    return detailPerformanceAppraisalYear;
  }

  async update(id: number, updatePerformanceAppraisalYearDto: UpdatePerformanceAppraisalYearDto) {
    const updateData = await this.dbService.performance_appraisal_year.update({
      data: updatePerformanceAppraisalYearDto,
      where: {
        id
      }
    });

    return {
      statusCode: 200,
      message: 'Successfully Update Evaluation Period',
      data: updateData
    }
  }

  async remove(id: number) {
    const deleteData = await this.dbService.performance_appraisal_year.delete({
      where: {
        id
      }
    });

    return {
      statusCode: 200,
      message: 'Successfully Delete Evaluation Period',
      data: deleteData
    }
  }
}
