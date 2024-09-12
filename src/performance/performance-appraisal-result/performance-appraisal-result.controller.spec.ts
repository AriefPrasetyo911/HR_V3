import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalResultController } from './performance-appraisal-result.controller';
import { PerformanceAppraisalResultService } from './performance-appraisal-result.service';

describe('PerformanceAppraisalResultController', () => {
  let controller: PerformanceAppraisalResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceAppraisalResultController],
      providers: [PerformanceAppraisalResultService],
    }).compile();

    controller = module.get<PerformanceAppraisalResultController>(PerformanceAppraisalResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
