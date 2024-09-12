import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalYearController } from './performance-appraisal-year.controller';
import { PerformanceAppraisalYearService } from './performance-appraisal-year.service';

describe('PerformanceAppraisalYearController', () => {
  let controller: PerformanceAppraisalYearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceAppraisalYearController],
      providers: [PerformanceAppraisalYearService],
    }).compile();

    controller = module.get<PerformanceAppraisalYearController>(PerformanceAppraisalYearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
