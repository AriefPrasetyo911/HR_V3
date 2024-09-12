import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './employee/employee.module';
import { PerformanceAppraisalModule } from './performance/performance-appraisal/performance-appraisal.module';
import { PerformanceAppraisalQuestionsModule } from './performance/performance-appraisal-questions/performance-appraisal-questions.module';
import { PerformanceAppraisalCategoryModule } from './performance/performance-appraisal-category/performance-appraisal-category.module';
import { PerformanceAppraisalExampleModule } from './performance/performance-appraisal-example/performance-appraisal-example.module';
import { ConfigModule } from '@nestjs/config';
import { PerformanceAppraisalYearModule } from './performance/performance-appraisal-year/performance-appraisal-year.module';
import { PerformanceAppraisalResultModule } from './performance/performance-appraisal-result/performance-appraisal-result.module';
import { SupervisorModule } from './supervisor/supervisor.module';
import { EmployeePhotoModule } from './employee-photo/employee-photo.module';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './auth/roles/app.roles';
// import { AbilityModule } from './casl/ability/ability.module';
import { PerformanceApraisalCommentModule } from './performance/performance-apraisal-comment/performance-apraisal-comment.module';
import { EmailModule } from './notifications/email/email.module';
import { EmailService } from './notifications/email/email.service';
import { EmailController } from './notifications/email/email.controller';
import { MailgunModule } from 'nestjs-mailgun';

@Module({
  imports: [
    AccessControlModule.forRoles(roles),
    AuthModule, 
    PrismaModule, 
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    // MailgunModule.forRoot({
    //   domain: process.env.MAILGUN_DOMAIN, // Mailgun domain
    //   apiKey: process.env.MAILGUN_API_KEY, // Mailgun API key
    // }),
    EmployeeModule, 
    PerformanceAppraisalModule, 
    PerformanceAppraisalQuestionsModule, 
    PerformanceAppraisalCategoryModule, 
    PerformanceAppraisalExampleModule, 
    PerformanceAppraisalYearModule, 
    PerformanceAppraisalResultModule, 
    SupervisorModule, 
    EmployeePhotoModule, 
    PerformanceApraisalCommentModule, 
    EmailModule
  ],
  controllers: [
    AppController, 
    EmailController
  ],
  providers: [
    AppService, 
    PrismaService,
    EmailService
  ],
})
export class AppModule {}
