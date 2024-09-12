import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalService } from './performance-appraisal.service';

describe('PerformanceAppraisalService', () => {
  let service: PerformanceAppraisalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceAppraisalService],
    }).compile();

    service = module.get<PerformanceAppraisalService>(PerformanceAppraisalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
