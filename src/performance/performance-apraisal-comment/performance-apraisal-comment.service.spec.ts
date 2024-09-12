import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceApraisalCommentService } from './performance-apraisal-comment.service';

describe('PerformanceApraisalCommentService', () => {
  let service: PerformanceApraisalCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceApraisalCommentService],
    }).compile();

    service = module.get<PerformanceApraisalCommentService>(PerformanceApraisalCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
