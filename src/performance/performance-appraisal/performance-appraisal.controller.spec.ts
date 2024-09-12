import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalController } from './performance-appraisal.controller';
import { PerformanceAppraisalService } from './performance-appraisal.service';

describe('PerformanceAppraisalController', () => {
  let controller: PerformanceAppraisalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceAppraisalController],
      providers: [PerformanceAppraisalService],
    }).compile();

    controller = module.get<PerformanceAppraisalController>(PerformanceAppraisalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
