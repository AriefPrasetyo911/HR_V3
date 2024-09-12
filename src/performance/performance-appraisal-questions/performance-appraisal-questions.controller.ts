import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerformanceAppraisalQuestionsService } from './performance-appraisal-questions.service';
import { CreatePerformanceAppraisalQuestionDto } from './dto/create-performance-appraisal-question.dto';
import { UpdatePerformanceAppraisalQuestionDto } from './dto/update-performance-appraisal-question.dto';

@Controller('performance-appraisal-questions')
export class PerformanceAppraisalQuestionsController {
  constructor(private readonly performanceAppraisalQuestionsService: PerformanceAppraisalQuestionsService) {}

  @Get()
  getPerformanceQuestions() {
    return this.performanceAppraisalQuestionsService.getPerformanceQuestions();
  }
  // @Post()
  // create(@Body() createPerformanceAppraisalQuestionDto: CreatePerformanceAppraisalQuestionDto) {
  //   return this.performanceAppraisalQuestionsService.create(createPerformanceAppraisalQuestionDto);
  // }

  // @Get()
  // findAll() {
  //   return this.performanceAppraisalQuestionsService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performanceAppraisalQuestionsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePerformanceAppraisalQuestionDto: UpdatePerformanceAppraisalQuestionDto) {
  //   return this.performanceAppraisalQuestionsService.update(+id, updatePerformanceAppraisalQuestionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.performanceAppraisalQuestionsService.remove(+id);
  // }
}
