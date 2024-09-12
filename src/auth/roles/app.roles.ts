import { RolesBuilder } from "nest-access-control";
import { AppRoles } from './roles.enum';

// export enum AppRoles {}
export const roles: RolesBuilder = new RolesBuilder();

roles
    .grant(AppRoles.HR)
        //grant access to employee crud
        .readAny('Employee')
        .createAny('Employee')
        .updateAny('Employee')
        .deleteAny('Employee')
        //grant access to employee photo crud
        .readAny('EmployeePhoto')
        .createAny('EmployeePhoto')
        .updateAny('EmployeePhoto')
        .deleteAny('EmployeePhoto')
        //grant access to supervisor crud
        .createAny('Supervisor')
        .readAny('Supervisor')
        .updateAny('Supervisor')
        .deleteAny('Supervisor')
        //grant access to appraisal crud
        .createAny('Appraisal')
        .readAny('Appraisal')
        .updateAny('Appraisal')
        .deleteAny('Appraisal')
        //grant access to appraisal questions crud
        .createAny('AppraisalQuestions')
        .readAny('AppraisalQuestions')
        .updateAny('AppraisalQuestions')
        .deleteAny('AppraisalQuestions')
        //grant access to appraisal example crud
        .createAny('AppraisalExample')
        .readAny('AppraisalExample')
        .updateAny('AppraisalExample')
        .deleteAny('AppraisalExample')
        //grant access to performance appraisal evaluation period crud
        .createAny('AppraisalEvaluationPeriod')
        .readAny('AppraisalEvaluationPeriod')
        .updateAny('AppraisalEvaluationPeriod')
        .deleteAny('AppraisalEvaluationPeriod')
        //grant access to user crud
        .create('User')
        .read('User')
        .update('User')
        .delete('User')
        //grant access to role crud
        .create('Role')
        .read('Role')
        .update('Role')
        .delete('Role')
    .grant(AppRoles.SUPERVISOR)
        .read('Employee')
        .readOwn('Supervisor')
        .updateOwn('Supervisor')
        .read('Appraisal')
    .grant(AppRoles.EMPLOYEE)
        .readOwn('Employee')
        .readOwn('Appraisal');