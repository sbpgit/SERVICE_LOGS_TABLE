using {
    managed,
    cuid,
    sap.common
} from '@sap/cds/common';

context js {
    //Table for JOB LOGS - Pradeep
  entity JOB_LOGS_DETAILS {
    Key JOB_ID      : String(70) @title:'Job ID';
    key JOB_NAME    : String(40) @title:'Job Name';
        JOB_TIME_STAMP  : Timestamp  @title:'Time Stamp';
        COMMENT     : String(50) @title:'Comments';
        MESSAGE_TYPE: String(10) @title:'Message Type';
        PARAMETER_1 : String(40) @title:'Parameter1';
        PARAMETER_2 : String(40) @title:'Parameter2';
        PARAMETER_3 : String(40) @title:'Parameter3';
        PARAMETER_4 : String(40) @title:'Parameter4';
        PARAMETER_5 : String(40) @title:'Parameter5';
        PARAMETER_6 : String(40) @title:'Parameter6';
        PARAMETER_7 : String(40) @title:'Parameter7';
        PARAMETER_8 : String(40) @title:'Parameter8';
  }
}
//View for JOB LOGS TABLE
@cds.persistence.exists
entity![V_JOB_LOGS_DETAILS]{
    Key JOB_ID      : String(70) @title:'Job ID';
    key JOB_NAME    : String(40) @title:'Job Name';
    JOB_TIME_STAMP  : Timestamp  @title:'Time Stamp';
        COMMENT     : String(50) @title:'Comments';
        MESSAGE_TYPE: String(10) @title:'Message Type';
        PARAMETER_1 : String(40) @title:'Parameter1';
        PARAMETER_2 : String(40) @title:'Parameter2';
        PARAMETER_3 : String(40) @title:'Parameter3';
        PARAMETER_4 : String(40) @title:'Parameter4';
        PARAMETER_5 : String(40) @title:'Parameter5';
        PARAMETER_6 : String(40) @title:'Parameter6';
        PARAMETER_7 : String(40) @title:'Parameter7';
        PARAMETER_8 : String(40) @title:'Parameter8';
  }
