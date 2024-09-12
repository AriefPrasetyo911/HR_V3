import { Module } from '@nestjs/common';
import { PerformanceAppraisalCategoryService } from './performance-appraisal-category.service';
import { PerformanceAppraisalCategoryController } from './performance-appraisal-category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PerformanceAppraisalCategoryController],
  providers: [PerformanceAppraisalCategoryService],
  exports: [PerformanceAppraisalCategoryService],
})
export class PerformanceAppraisalCategoryModule {}
