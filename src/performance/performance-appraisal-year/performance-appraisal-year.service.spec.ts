import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalYearService } from './performance-appraisal-year.service';

describe('PerformanceAppraisalYearService', () => {
  let service: PerformanceAppraisalYearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceAppraisalYearService],
    }).compile();

    service = module.get<PerformanceAppraisalYearService>(PerformanceAppraisalYearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
