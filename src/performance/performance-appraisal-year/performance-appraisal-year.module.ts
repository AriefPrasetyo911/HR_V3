import { Module } from '@nestjs/common';
import { PerformanceAppraisalYearService } from './performance-appraisal-year.service';
import { PerformanceAppraisalYearController } from './performance-appraisal-year.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PerformanceAppraisalYearController],
  providers: [PerformanceAppraisalYearService],
})
export class PerformanceAppraisalYearModule {}
