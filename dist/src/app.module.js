"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const prisma_service_1 = require("./prisma/prisma.service");
const prisma_module_1 = require("./prisma/prisma.module");
const employee_module_1 = require("./employee/employee.module");
const performance_appraisal_module_1 = require("./performance/performance-appraisal/performance-appraisal.module");
const performance_appraisal_questions_module_1 = require("./performance/performance-appraisal-questions/performance-appraisal-questions.module");
const performance_appraisal_category_module_1 = require("./performance/performance-appraisal-category/performance-appraisal-category.module");
const performance_appraisal_example_module_1 = require("./performance/performance-appraisal-example/performance-appraisal-example.module");
const config_1 = require("@nestjs/config");
const performance_appraisal_year_module_1 = require("./performance/performance-appraisal-year/performance-appraisal-year.module");
const performance_appraisal_result_module_1 = require("./performance/performance-appraisal-result/performance-appraisal-result.module");
const supervisor_module_1 = require("./supervisor/supervisor.module");
const employee_photo_module_1 = require("./employee-photo/employee-photo.module");
const nest_access_control_1 = require("nest-access-control");
const app_roles_1 = require("./auth/roles/app.roles");
const performance_apraisal_comment_module_1 = require("./performance/performance-apraisal-comment/performance-apraisal-comment.module");
const email_module_1 = require("./notifications/email/email.module");
const email_service_1 = require("./notifications/email/email.service");
const email_controller_1 = require("./notifications/email/email.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_access_control_1.AccessControlModule.forRoles(app_roles_1.roles),
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            employee_module_1.EmployeeModule,
            performance_appraisal_module_1.PerformanceAppraisalModule,
            performance_appraisal_questions_module_1.PerformanceAppraisalQuestionsModule,
            performance_appraisal_category_module_1.PerformanceAppraisalCategoryModule,
            performance_appraisal_example_module_1.PerformanceAppraisalExampleModule,
            performance_appraisal_year_module_1.PerformanceAppraisalYearModule,
            performance_appraisal_result_module_1.PerformanceAppraisalResultModule,
            supervisor_module_1.SupervisorModule,
            employee_photo_module_1.EmployeePhotoModule,
            performance_apraisal_comment_module_1.PerformanceApraisalCommentModule,
            email_module_1.EmailModule
        ],
        controllers: [
            app_controller_1.AppController,
            email_controller_1.EmailController
        ],
        providers: [
            app_service_1.AppService,
            prisma_service_1.PrismaService,
            email_service_1.EmailService
        ],
    })
], AppModule);
