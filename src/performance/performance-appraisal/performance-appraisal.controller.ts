import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PerformanceAppraisalService } from './performance-appraisal.service';
import { CreatePerformanceAppraisalDto } from './dto/create-performance-appraisal.dto';
import { UpdatePerformanceAppraisalDto } from './dto/update-performance-appraisal.dto';
import { Roles } from 'src/auth/decorators/roles/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { UseRoles } from 'nest-access-control';
// import { RolesGuard } from 'src/auth/guards/roles/roles.guard';

@Controller('performance-appraisal')
export class PerformanceAppraisalController {
  constructor(private readonly performanceAppraisalService: PerformanceAppraisalService) {}

  @Post()
  create(@Body() createPerformanceAppraisalDto: CreatePerformanceAppraisalDto) {
    return this.performanceAppraisalService.create(createPerformanceAppraisalDto);
  }

  @Get()
  // @Roles(Role.HR)
  // @UseRoles({
  //   possession: 'any',
  //   action: 'read',
  //   resource: 'performance-appraisal'
  // })
  findAll() {
    return this.performanceAppraisalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performanceAppraisalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerformanceAppraisalDto: UpdatePerformanceAppraisalDto) {
    return this.performanceAppraisalService.update(+id, updatePerformanceAppraisalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.performanceAppraisalService.remove(+id);
  }
}
