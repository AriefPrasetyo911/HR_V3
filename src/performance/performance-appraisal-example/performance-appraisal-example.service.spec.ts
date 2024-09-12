import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalExampleService } from './performance-appraisal-example.service';

describe('PerformanceAppraisalExampleService', () => {
  let service: PerformanceAppraisalExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceAppraisalExampleService],
    }).compile();

    service = module.get<PerformanceAppraisalExampleService>(PerformanceAppraisalExampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
