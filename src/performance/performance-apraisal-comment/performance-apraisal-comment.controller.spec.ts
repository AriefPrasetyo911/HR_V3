import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceApraisalCommentController } from './performance-apraisal-comment.controller';
import { PerformanceApraisalCommentService } from './performance-apraisal-comment.service';

describe('PerformanceApraisalCommentController', () => {
  let controller: PerformanceApraisalCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceApraisalCommentController],
      providers: [PerformanceApraisalCommentService],
    }).compile();

    controller = module.get<PerformanceApraisalCommentController>(PerformanceApraisalCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
