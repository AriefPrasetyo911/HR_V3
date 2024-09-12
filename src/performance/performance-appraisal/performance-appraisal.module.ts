import { Module } from '@nestjs/common';
import { PerformanceAppraisalService } from './performance-appraisal.service';
import { PerformanceAppraisalController } from './performance-appraisal.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PerformanceAppraisalController],
  providers: [PerformanceAppraisalService],
  exports: [PerformanceAppraisalService],
})
export class PerformanceAppraisalModule {}
