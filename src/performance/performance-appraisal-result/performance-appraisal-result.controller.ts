import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerformanceAppraisalResultService } from './performance-appraisal-result.service';
import { CreatePerformanceAppraisalResultDto } from './dto/create-performance-appraisal-result.dto';
import { UpdatePerformanceAppraisalResultDto } from './dto/update-performance-appraisal-result.dto';

@Controller('performance-appraisal-result')
export class PerformanceAppraisalResultController {
  constructor(private readonly performanceAppraisalResultService: PerformanceAppraisalResultService) {}

  @Post()
  create(@Body() createPerformanceAppraisalResultDto: CreatePerformanceAppraisalResultDto) {
    return this.performanceAppraisalResultService.create(createPerformanceAppraisalResultDto);
  }

  // async create(@Body() data: Prisma.Performance_appraisal_categoryCreateInput): Promise<Performance_appraisal_category> {
  //   // return await this.performanceAppraisalCategoryService.create(createPerformanceAppraisalCategoryDto);
  //   return await this.performanceAppraisalCategoryService.create(data);
  // }

  // @Get()
  // findAll() {
  //   return this.performanceAppraisalResultService.findAll();
  // }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.performanceAppraisalResultService.findDataById(id);
  }

  @Get('by/:email')
  async findOne(@Param('email') email: string) {
    return await this.performanceAppraisalResultService.findOneByEmail(email);
  }

  @Get(':email/:year')
  async findOneByYear(@Param('email') email: string, @Param('year') year: string) {
    return await this.performanceAppraisalResultService.findOneByYear(email, year);
  }

  // @Get('supervisor/:email')
  // async findOneBySupervisor(@Param('email') email: string) {
  //   return await this.performanceAppraisalResultService.findOneBySupervisor(email);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePerformanceAppraisalResultDto: UpdatePerformanceAppraisalResultDto) {
  //   return this.performanceAppraisalResultService.update(+id, updatePerformanceAppraisalResultDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.performanceAppraisalResultService.remove(+id);
  // }
}
