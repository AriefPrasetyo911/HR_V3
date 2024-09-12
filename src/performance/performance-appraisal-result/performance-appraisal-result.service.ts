import { Injectable } from '@nestjs/common';
import { CreatePerformanceAppraisalResultDto } from './dto/create-performance-appraisal-result.dto';
import { UpdatePerformanceAppraisalResultDto } from './dto/update-performance-appraisal-result.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
export class PerformanceAppraisalResultService {
  employeeIdArray = [];
  employeeDataArray = [];
  finalEmployeeDataArray = [];
  data: any;

  constructor(private dbService: PrismaService, private employeeService: EmployeeService) { }
  
  create(createPerformanceAppraisalResultDto: any) {
    let create = this.dbService.performance_appraisal_result.create({
      data: createPerformanceAppraisalResultDto
    })

    return {
      statusCode: 200,
      message: 'Successfully Submit Performance Appraisal Form',
      data: create
    }
  }

  async findAll() {
    return 'This action returns all performanceAppraisalResults';
  }

  async findDataById(id: number) {
    
  }

  async findOneByEmail(email: string) {
    return this.dbService.performance_appraisal_result.findMany({
      where: {
        employee_email: email
      }
    })
    console.log(email);
    
    // return this.dbService.performance_appraisal_result.findFirst({
    //   where: {
    //     employee_id: id
    //   }
    // });

    // let resultData = this.dbService.$queryRaw
    // `SELECT employee_data.id, Performance_appraisal_result.employee_id 
    // FROM employee_data
    // INNER JOIN Performance_appraisal_result
    // ON employee_data.id = Performance_appraisal_result.employee_id
    // WHERE Performance_appraisal_result.employee_id = ${id}`;

    // return resultData;

    // return id
  }

  // async findOneBySupervisor(email: string) {
  //   return this.dbService.performance_appraisal_result.findMany({
  //     where: {
  //       supervisor_email: email
  //     }
  //   })
  // }

  async findOneByYear(email: string, year: string) {
    let appraisalYear = parseInt(year, 10)
    return this.dbService.performance_appraisal_result.findMany({
      where: {
        employee_email: email,
        appraisal_year: appraisalYear
      }
    })
  }

  update(id: number, updatePerformanceAppraisalResultDto: UpdatePerformanceAppraisalResultDto) {
    return `This action updates a #${id} performanceAppraisalResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} performanceAppraisalResult`;
  }
}