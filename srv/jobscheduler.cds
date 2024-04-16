using js from '../db/data-model';
using { V_JOB_LOGS_DETAILS
} from '../db/data-model';
service JobScheduler @(impl: './jobscheduler.js') {
  //entity for reading JOB LOGS data
  @requires: 'Admin'
  entity getJobLogs as projection on V_JOB_LOGS_DETAILS;
  //Function for creating/loading data into CP_JOB_LOGS_TABLE
  function loadJobData(FLAG: String(1), LOADJOBDATA : String) returns String;

}