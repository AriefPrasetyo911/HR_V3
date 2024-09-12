"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = void 0;
const nest_access_control_1 = require("nest-access-control");
const roles_enum_1 = require("./roles.enum");
exports.roles = new nest_access_control_1.RolesBuilder();
exports.roles
    .grant(roles_enum_1.AppRoles.HR)
    .readAny('Employee')
    .createAny('Employee')
    .updateAny('Employee')
    .deleteAny('Employee')
    .readAny('EmployeePhoto')
    .createAny('EmployeePhoto')
    .updateAny('EmployeePhoto')
    .deleteAny('EmployeePhoto')
    .createAny('Supervisor')
    .readAny('Supervisor')
    .updateAny('Supervisor')
    .deleteAny('Supervisor')
    .createAny('Appraisal')
    .readAny('Appraisal')
    .updateAny('Appraisal')
    .deleteAny('Appraisal')
    .createAny('AppraisalQuestions')
    .readAny('AppraisalQuestions')
    .updateAny('AppraisalQuestions')
    .deleteAny('AppraisalQuestions')
    .createAny('AppraisalExample')
    .readAny('AppraisalExample')
    .updateAny('AppraisalExample')
    .deleteAny('AppraisalExample')
    .createAny('AppraisalEvaluationPeriod')
    .readAny('AppraisalEvaluationPeriod')
    .updateAny('AppraisalEvaluationPeriod')
    .deleteAny('AppraisalEvaluationPeriod')
    .create('User')
    .read('User')
    .update('User')
    .delete('User')
    .create('Role')
    .read('Role')
    .update('Role')
    .delete('Role')
    .grant(roles_enum_1.AppRoles.SUPERVISOR)
    .read('Employee')
    .readOwn('Supervisor')
    .updateOwn('Supervisor')
    .read('Appraisal')
    .grant(roles_enum_1.AppRoles.EMPLOYEE)
    .readOwn('Employee')
    .readOwn('Appraisal');
