import { Module } from '@nestjs/common';
import { PerformanceAppraisalExampleService } from './performance-appraisal-example.service';
import { PerformanceAppraisalExampleController } from './performance-appraisal-example.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PerformanceAppraisalExampleController],
  providers: [PerformanceAppraisalExampleService],
  exports: [PerformanceAppraisalExampleService],
})
export class PerformanceAppraisalExampleModule {}
