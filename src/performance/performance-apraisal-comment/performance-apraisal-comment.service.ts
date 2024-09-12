import { Injectable } from '@nestjs/common';
import { CreatePerformanceApraisalCommentDto } from './dto/create-performance-apraisal-comment.dto';
import { UpdatePerformanceApraisalCommentDto } from './dto/update-performance-apraisal-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PerformanceApraisalCommentService {
  constructor(private dbService: PrismaService) {}
  create(createPerformanceApraisalCommentDto: any) {
    let saveData = this.dbService.performance_appraisal_result_comment.create({
      data: createPerformanceApraisalCommentDto
    });

    return {
      statusCode: 200,
      message: 'Successfully Submit Performance Appraisal Form',
      data: saveData
    }
  }

  findByEmail(email: string, year: any) {
    let appraisalYear = parseInt(year, 10)
    return this.dbService.performance_appraisal_result_comment.findFirst({
      where: {
        employee_email: email,
        appraisal_year: appraisalYear
      }
    })
  }

  findAll() {
    return `This action returns all performanceApraisalComment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} performanceApraisalComment`;
  }

  update(id: number, updatePerformanceApraisalCommentDto: UpdatePerformanceApraisalCommentDto) {
    return `This action updates a #${id} performanceApraisalComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} performanceApraisalComment`;
  }
}
