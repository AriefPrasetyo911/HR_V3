import { Module } from '@nestjs/common';
import { PerformanceAppraisalResultService } from './performance-appraisal-result.service';
import { PerformanceAppraisalResultController } from './performance-appraisal-result.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmployeeService } from 'src/employee/employee.service';

@Module({
  imports: [PrismaModule],
  controllers: [PerformanceAppraisalResultController],
  providers: [
    PerformanceAppraisalResultService,
    EmployeeService
  ],
})
export class PerformanceAppraisalResultModule {}
