import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerformanceApraisalCommentService } from './performance-apraisal-comment.service';
import { CreatePerformanceApraisalCommentDto } from './dto/create-performance-apraisal-comment.dto';
import { UpdatePerformanceApraisalCommentDto } from './dto/update-performance-apraisal-comment.dto';

@Controller('performance-appraisal-comment')
export class PerformanceApraisalCommentController {
  constructor(private readonly performanceApraisalCommentService: PerformanceApraisalCommentService) {}

  @Post()
  create(@Body() createPerformanceApraisalCommentDto: CreatePerformanceApraisalCommentDto) {
    return this.performanceApraisalCommentService.create(createPerformanceApraisalCommentDto);
  }

  @Get(':email/:year')
  findByEmail(@Param('email') email: string, @Param('year') year: string) {
    return this.performanceApraisalCommentService.findByEmail(email, year);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performanceApraisalCommentService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePerformanceApraisalCommentDto: UpdatePerformanceApraisalCommentDto) {
  //   return this.performanceApraisalCommentService.update(+id, updatePerformanceApraisalCommentDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.performanceApraisalCommentService.remove(+id);
  }
}
