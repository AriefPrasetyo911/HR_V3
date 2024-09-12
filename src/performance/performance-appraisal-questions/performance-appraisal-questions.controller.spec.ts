import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceAppraisalQuestionsController } from './performance-appraisal-questions.controller';
import { PerformanceAppraisalQuestionsService } from './performance-appraisal-questions.service';

describe('PerformanceAppraisalQuestionsController', () => {
  let controller: PerformanceAppraisalQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceAppraisalQuestionsController],
      providers: [PerformanceAppraisalQuestionsService],
    }).compile();

    controller = module.get<PerformanceAppraisalQuestionsController>(PerformanceAppraisalQuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
