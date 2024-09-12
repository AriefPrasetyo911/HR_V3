import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerformanceAppraisalExampleService } from './performance-appraisal-example.service';
import { CreatePerformanceAppraisalExampleDto } from './dto/create-performance-appraisal-example.dto';
import { UpdatePerformanceAppraisalExampleDto } from './dto/update-performance-appraisal-example.dto';
// import { Prisma, Performance_appraisal_examples} from '@prisma/client';

@Controller('performance-appraisal-example')
export class PerformanceAppraisalExampleController {
  constructor(private readonly performanceAppraisalExampleService: PerformanceAppraisalExampleService) {}

  @Post()
  async create(@Body() createExample: CreatePerformanceAppraisalExampleDto){
    return await this.performanceAppraisalExampleService.create(createExample);
    // return await this.performanceAppraisalExampleService.create(data);
  }

  @Get()
  async findAll(){
    return await this.performanceAppraisalExampleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.performanceAppraisalExampleService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: UpdatePerformanceAppraisalExampleDto){
    // return await this.performanceAppraisalExampleService.update(+id, updatePerformanceAppraisalExampleDto);
    return await this.performanceAppraisalExampleService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number){
    return await this.performanceAppraisalExampleService.remove(+id);
  }
}