import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerformanceAppraisalYearService } from './performance-appraisal-year.service';
import { CreatePerformanceAppraisalYearDto } from './dto/create-performance-appraisal-year.dto';
import { UpdatePerformanceAppraisalYearDto } from './dto/update-performance-appraisal-year.dto';

@Controller('performance-appraisal-year')
export class PerformanceAppraisalYearController {
  constructor(private readonly performanceAppraisalYearService: PerformanceAppraisalYearService) {}

  @Post()
  async createAppraisalYear(@Body() createPerformanceAppraisalYearDto: CreatePerformanceAppraisalYearDto) {
    return await this.performanceAppraisalYearService.create(createPerformanceAppraisalYearDto);
  }

  @Get()
  async findAll() {
    return await this.performanceAppraisalYearService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.performanceAppraisalYearService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePerformanceAppraisalYearDto: UpdatePerformanceAppraisalYearDto) {
    return await this.performanceAppraisalYearService.update(+id, updatePerformanceAppraisalYearDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.performanceAppraisalYearService.remove(+id);
  }
}
