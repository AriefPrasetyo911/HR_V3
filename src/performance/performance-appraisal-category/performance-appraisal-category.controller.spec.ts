import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalCategoryController } from './performance-appraisal-category.controller';
import { PerformanceAppraisalCategoryService } from './performance-appraisal-category.service';

describe('PerformanceAppraisalCategoryController', () => {
  let controller: PerformanceAppraisalCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceAppraisalCategoryController],
      providers: [PerformanceAppraisalCategoryService],
    }).compile();

    controller = module.get<PerformanceAppraisalCategoryController>(PerformanceAppraisalCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
