import { Injectable } from '@nestjs/common';
import { CreatePerformanceAppraisalQuestionDto } from './dto/create-performance-appraisal-question.dto';
import { UpdatePerformanceAppraisalQuestionDto } from './dto/update-performance-appraisal-question.dto';
import { PerformanceAppraisalCategoryService } from '../performance-appraisal-category/performance-appraisal-category.service';
import { PerformanceAppraisalExampleService } from '../performance-appraisal-example/performance-appraisal-example.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class PerformanceAppraisalQuestionsService {
  constructor(
    private category: PerformanceAppraisalCategoryService,
    private example: PerformanceAppraisalExampleService,
    private dbService: PrismaService) {}

  async getPerformanceQuestions() {
    let questions = this.dbService.$queryRaw
    `SELECT DISTINCT Performance_appraisal_category.question_category, Performance_appraisal_examples.question_example
    FROM Performance_appraisal_category
    INNER JOIN Performance_appraisal_examples
    ON Performance_appraisal_category.id = Performance_appraisal_examples.question_category_id ORDER BY Performance_appraisal_category.id;`;
    
    
    return questions;

    // const result = await Prisma.performance_appraisal_category.findMany({
    //   select: {
    //     question_category: true,
    //     performance_appraisal_examples: {
    //       select: {
    //         question_example: true,
    //       },
    //     },
    //   },
    //   orderBy: {
    //     id: 'asc',
    //   },
    // });
    
    // return 'This action returns all performanceAppraisalQuestions';
  }
  // create(createPerformanceAppraisalQuestionDto: CreatePerformanceAppraisalQuestionDto) {
  //   return 'This action adds a new performanceAppraisalQuestion';
  // }

  // findAll() {
  //   return `This action returns all performanceAppraisalQuestions`;
  // }

  findOne(id: number) {
    // let data = this.dbService.$queryRaw
    // `SELECT Performance_appraisal_category.question_category, Performance_appraisal_examples.question_example
    // FROM Performance_appraisal_category
    // INNER JOIN Performance_appraisal_examples
    // ON Performance_appraisal_category.id = Performance_appraisal_examples.question_category_id WHERE Performance_appraisal_examples.question_category_id = ${id}`;
    // return data;
    return `This action returns a #${id} performanceAppraisalQuestion`;
  }

  // update(id: number, updatePerformanceAppraisalQuestionDto: UpdatePerformanceAppraisalQuestionDto) {
  //   return `This action updates a #${id} performanceAppraisalQuestion`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} performanceAppraisalQuestion`;
  // }
}