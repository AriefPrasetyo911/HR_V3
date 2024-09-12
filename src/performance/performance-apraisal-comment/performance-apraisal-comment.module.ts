import { Module } from '@nestjs/common';
import { PerformanceApraisalCommentService } from './performance-apraisal-comment.service';
import { PerformanceApraisalCommentController } from './performance-apraisal-comment.controller';

@Module({
  controllers: [PerformanceApraisalCommentController],
  providers: [PerformanceApraisalCommentService],
})
export class PerformanceApraisalCommentModule {}
