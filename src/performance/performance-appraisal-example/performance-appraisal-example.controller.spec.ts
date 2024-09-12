import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalExampleController } from './performance-appraisal-example.controller';
import { PerformanceAppraisalExampleService } from './performance-appraisal-example.service';

describe('PerformanceAppraisalExampleController', () => {
  let controller: PerformanceAppraisalExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceAppraisalExampleController],
      providers: [PerformanceAppraisalExampleService],
    }).compile();

    controller = module.get<PerformanceAppraisalExampleController>(PerformanceAppraisalExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
