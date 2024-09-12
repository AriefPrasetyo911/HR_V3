import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalCategoryService } from './performance-appraisal-category.service';

describe('PerformanceAppraisalCategoryService', () => {
  let service: PerformanceAppraisalCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceAppraisalCategoryService],
    }).compile();

    service = module.get<PerformanceAppraisalCategoryService>(PerformanceAppraisalCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
