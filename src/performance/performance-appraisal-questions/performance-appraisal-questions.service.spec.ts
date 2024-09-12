import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalQuestionsService } from './performance-appraisal-questions.service';

describe('PerformanceAppraisalQuestionsService', () => {
  let service: PerformanceAppraisalQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceAppraisalQuestionsService],
    }).compile();

    service = module.get<PerformanceAppraisalQuestionsService>(PerformanceAppraisalQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
