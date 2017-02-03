---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Imaging_Type-79_2 

<dl>
<dt>id</dt><dd>Imaging_Type-79_2</dd>
<dt>fmId</dt><dd>79.2</dd>
<dt>label</dt><dd>Imaging Type</dd>
<dt>location</dt><dd>^RA(79.2,</dd>
<dt>description</dt><dd>This file contains, for each imaging type entry, parameters that the module<br/>uses during various stages of exam and report processing and inquiring. The<br/>parameter switches allow the 'customizing' of the module for each type<br/>of imaging.<br/> <br/>WARNING:  ENTRIES SHOULD NOT BE DELETED FROM THIS FILE.<br/> <br/> Data Storage<br/> ------------<br/>The data for the 'IMAGING TYPE' file is stored in the ^RA(79.2,<br/>global. At the present time this file is very static after day-one<br/>initialization is complete.  However, it still should be journaled.<br/>It should also be translated if the operating system supports this function.<br/> <br/> Input Templates<br/> ---------------<br/>The following is a list of input templates used by the package and<br/>the entry in the OPTIONS file (#19) that uses the template:<br/> <br/>                     Compiled<br/> Name                Routine  Description; Option(s)<br/> ----                -------  ----------------------<br/> RA IMAGE PARAMETERS          Used to specify timeout seconds and whether<br/>                              the hardware system the module is running on<br/>                              is under fail-soft mode;<br/>                              RA FAILSOFT<br/> <br/> RA ON-LINE CRITERIA          Used to indicate how long certain data should<br/>                              remain on file before it can be purged;<br/>                              RA PURGE<br/> <br/>If any modifications to these input templates are needed for local<br/>purposes, then great care should be taken not to degrade any branching logic<br/>in the template.<br/> <br/> Print Templates<br/> ---------------<br/> The following is a list of print templates used by the package:<br/> <br/> Name                  Description; Option(s)<br/> ----                  ----------------------<br/> RA ACTIVITY LOG       Prints a list of the activity log entries for the<br/>                       imaging type;</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| type_of_imaging | .01 | Type Of Imaging | {::nomarkdown}This field contains the name of this type of imaging.  DO NOT ADD, EDIT OR<br/>DELETE imaging type names; this will cause problems between the<br/>Radiology/Nuclear Med and Order Entry interface.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| activity_log_cutoff | .11 | Activity Log Cut-off | {::nomarkdown}This field contains the imaging type parameter that tells the purge<br/>routine of the module how many days to keep the various activity logs<br/>on-line.  The amount of days is a whole number between 90 and 99999 and is<br/>determined at each site by the package coordinator and the computer<br/>site manager.{:/} | NUMERIC |  |  |  | 
| report_cutoff | .12 | Report Cut-off | {::nomarkdown}This field contains the imaging type parameter that tells the purge<br/>routine of the module how many days to keep the reports on-line.  The<br/>report 'impression' will always stay on-line even after the reports<br/>are purged.  The amount of days is a whole number between 90 and 99999<br/>and is determined at each site by the package coordinator and the<br/>computer site manager.{:/} | NUMERIC |  |  |  | 
| clinical_history_cutoff | .13 | Clinical History Cut-off | {::nomarkdown}This field contains the imaging type parameter that tells the purge<br/>routine of the module how many days to keep the clinical history<br/>of the visit on-line.  The amount of days is a whole number between 90 and<br/>99999 and is determined by the package coordinator and the computer<br/>site manager.{:/} | NUMERIC |  |  |  | 
| tracking_time_cutoff | .14 | Tracking Time Cut-off | {::nomarkdown}This field applies to sites that are using the tracking function of the<br/>system to record when the exam status changes from one status to another.<br/>It contains the imaging type parameter that tells the purge routine of<br/>the module how many days to keep the 'tracking time' information on-line.<br/>The amount of days is a whole number between 90 and 99999 and is<br/>determined at each site by the package coordinator and the computer<br/>site manager.{:/} | NUMERIC |  |  |  | 
| order_data_cutoff | .16 | Order Data Cut-off | {::nomarkdown}This field contains the imaging type parameter that tells the purge<br/>routine of the module how many days to keep the orders on-line. The<br/>amount of days is a whole number between 30 and 99999 and is determined<br/>by the package coordinator and the computer site manager.{:/} | NUMERIC |  |  |  | 
| abbreviation | 3 | Abbreviation | {::nomarkdown}This is the abbreviation associated with this type of imaging.  It is<br/>between 1 and 4 characters in length and is used as a cross reference and<br/>for quick look ups. DO NOT CHANGE ABBREVIATIONS; changing abbreviations<br/>will cause problems between the Order Entry and Radiology/Nuc Med<br/>interface.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| operating_conditions | 4 | Operating Conditions | {::nomarkdown}This field contains the hardware conditions parameter that tells the system<br/>the type of operating conditions that are in effect.  The available<br/>conditions are: 'N' for normal and 'E' for emergency.<br/> <br/>Under NORMAL conditions, the system uses the parameters set up<br/>in the 'Imaging Locations' file to determine which input and printer<br/>devices to use.  Under EMERGENCY conditions, the system ignores all the<br/>location parameters set up and the user is prompted for this information.{:/} | ENUMERATION |  | REQUIRED, INDEXED | {::nomarkdown}<dl><dt>E</dt><dd>EMERGENCY(NORMAL COMPUTER DOWN)</dd><dt>N</dt><dd>NORMAL</dd></dl>{:/} | 
| radiopharmaceuticals_used | 5 | Radiopharmaceuticals Used? | {::nomarkdown}This field is used to determine if radiopharmaceuticals will be used<br/>for this imaging type.  If so, then the nuclear medicine logic paths of<br/>this software will be triggered at all appropriate points.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| next_case_number | 25 | Next Case Number | {::nomarkdown}This field is used to contain the next available case number for this<br/>type of imaging.  Case numbers are generated by the system in sequential<br/>order and are available for reuse the following week after the exam status<br/>becomes complete.  Case numbers are recycled on Sunday at 12:01 AM.{:/} | NUMERIC |  |  |  | 
| case_number_turnover_date | 26 | Case Number Turnover Date | {::nomarkdown}This field contains the date the case numbers are scheduled to be recycled.<br/>This date will always be the next Sunday's date.{:/} | DATE-TIME |  |  |  | 
| introduction_text | 50 | Introduction Text | {::nomarkdown}This field provides a quick installation guide to be displayed when the<br/>rad/nuc med system is initialized or reinitialized.  It describes aspects<br/>of the module to the site manager and how to proceed.{:/} | STRING |  |  |  | 
| pfss_dept_code | 90 | Pfss Dept. Code | {::nomarkdown}The 3 character numeric code represents the Department Code used by the <br/>PFSS project.{:/} | STRING |  | REQUIRED |  | 
| activity_log | 100 | Activity Log | {::nomarkdown}This multiple field contains a log of actions that have been taken on this<br/>imaging record.{:/} | [OBJECT] |  |  | [Activity_Log-79_23](#Activity_Log-79_23)  | 
| work_rvu_wrvu_scaling_factor | 200 | Work Rvu (wrvu) Scaling Factor | {::nomarkdown}Identifies the 'Society of Chairmen in Academic Radiology Departments' <br/>(SCARD) scaling factor for a specific imaging type by calendar year. {:/} | [OBJECT] |  |  | [Work_Rvu_wrvu_Scaling_Factor-79_22](#Work_Rvu_wrvu_Scaling_Factor-79_22)  | 

## <a name="Activity_Log-79_23"></a>Activity_Log-79_23 

<dl>
<dt>id</dt><dd>Activity_Log-79_23</dd>
<dt>label</dt><dd>Activity Log</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| log_date | .01 | Log Date | {::nomarkdown}This field is filled in automatically by the system with the date and<br/>the time that the action was taken on this imaging record.{:/} | DATE-TIME |  | REQUIRED |  | 
| type_of_action | 2 | Type Of Action | {::nomarkdown}This field is filled in automatically by the system with the type of<br/>action that was taken on this imaging record.  Available types of action<br/>are:  'P' for data purge complete, 'C' for change image type parameters,<br/>'S' for schedule data purge, and 'O' for on-line criteria modified.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>O</dt><dd>ON-LINE CRITERIA MODIFIED</dd><dt>S</dt><dd>SCHEDULE DATA PURGE</dd><dt>P</dt><dd>DATA PURGE COMPLETE</dd><dt>C</dt><dd>CHANGE IMAGE TYPE PARAMETERS</dd></dl>{:/} | 
| computer_user | 3 | Computer User | {::nomarkdown}This field points to the 'NEW PERSON' file and is used <br/>to record the user doing the processing at the time the action <br/>was taken on this imaging record.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| no_of_exam_records_processed | 4 | No. Of Exam Records Processed | {::nomarkdown}This field is automatically entered by the system after the data purge<br/>routine is finished purging.  This statistic is compiled during the<br/>data purge.  It represents the number of exam records that had at least some<br/>data purged.  Depending on the values of the 'cut-off-days' parameter, the<br/>type of data purged may vary.{:/} | NUMERIC |  |  |  | 
| no_of_reports_processed | 5 | No. Of Reports Processed | {::nomarkdown}This field is automatically entered by the system after the data purge<br/>routine is finished purging. This statistic is compiled during the<br/>data purge. It represents the number of report records that had at least<br/>some data purged. Depending on the values of the 'cut-off-days' parameters,<br/>the type of data purged may vary.{:/} | NUMERIC |  |  |  | 
| no_of_requests_processed | 6 | No. Of Requests Processed | {::nomarkdown}This field is automatically entered by the system after the data<br/>purge routine is finished purging. This statistic is compiled<br/>during the data purge. It represents the number of request records<br/>that have been purged.{:/} | NUMERIC |  |  |  | 

## <a name="Work_Rvu_wrvu_Scaling_Factor-79_22"></a>Work_Rvu_wrvu_Scaling_Factor-79_22 

<dl>
<dt>id</dt><dd>Work_Rvu_wrvu_Scaling_Factor-79_22</dd>
<dt>label</dt><dd>Work Rvu (wrvu) Scaling Factor</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| calendar_year | .01 | Calendar Year | {::nomarkdown}This field identifies the calendar year to associate a specific 'Society<br/>of Chairmen in Academic Radiology Departments' (SCARD) scaling factor to <br/>imaging type specific procedures with an associated wRVU value.{:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| scaling_factor | 2 | Scaling Factor | {::nomarkdown}This field identifies the appropriate scaling factor applied to the wRVU<br/>value for an imaging type specific rad/nuc med procedure.{:/} | NUMERIC |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 5:29:32 am</p>{:/}