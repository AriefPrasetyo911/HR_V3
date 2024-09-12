import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalResultService } from './performance-appraisal-result.service';

describe('PerformanceAppraisalResultService', () => {
  let service: PerformanceAppraisalResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceAppraisalResultService],
    }).compile();

    service = module.get<PerformanceAppraisalResultService>(PerformanceAppraisalResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
