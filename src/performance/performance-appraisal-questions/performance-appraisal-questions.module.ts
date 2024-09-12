import { Module } from '@nestjs/common';
import { PerformanceAppraisalQuestionsService } from './performance-appraisal-questions.service';
import { PerformanceAppraisalQuestionsController } from './performance-appraisal-questions.controller';
import { PerformanceAppraisalCategoryService } from '../performance-appraisal-category/performance-appraisal-category.service';
import { PerformanceAppraisalExampleService } from '../performance-appraisal-example/performance-appraisal-example.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PerformanceAppraisalQuestionsController],
  providers: [
    PerformanceAppraisalQuestionsService,
    PerformanceAppraisalCategoryService,
    PerformanceAppraisalExampleService,
    PrismaService
  ],
})
export class PerformanceAppraisalQuestionsModule {}
