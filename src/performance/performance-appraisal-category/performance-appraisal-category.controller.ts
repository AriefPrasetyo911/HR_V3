import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PerformanceAppraisalCategoryService } from './performance-appraisal-category.service';
import { CreatePerformanceAppraisalCategoryDto } from './dto/create-performance-appraisal-category.dto';
import { UpdatePerformanceAppraisalCategoryDto } from './dto/update-performance-appraisal-category.dto';
// import { Prisma, Performance_appraisal_category} from '@prisma/client';
import { ACGuard, UseRoles } from 'nest-access-control';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('performance-appraisal-category')
export class PerformanceAppraisalCategoryController {
  constructor(private readonly performanceAppraisalCategoryService: PerformanceAppraisalCategoryService) {}

  @Post()
  async create(@Body() data: CreatePerformanceAppraisalCategoryDto){
    // return await this.performanceAppraisalCategoryService.create(createPerformanceAppraisalCategoryDto);
    return await this.performanceAppraisalCategoryService.create(data);
  }

  @Get()
  // @UseGuards(JwtAuthGuard, ACGuard)
  // @UseRoles({
  //   possession: 'any',
  //   action: 'read',
  //   resource: 'performance-appraisal-category'
  // })
  async findAll(){
    return await this.performanceAppraisalCategoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    return await this.performanceAppraisalCategoryService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdatePerformanceAppraisalCategoryDto){
    // return await this.performanceAppraisalCategoryService.update(+id, updatePerformanceAppraisalCategoryDto);
    return await this.performanceAppraisalCategoryService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number){
    return await this.performanceAppraisalCategoryService.remove(+id);
  }
}