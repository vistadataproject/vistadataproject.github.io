---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Imaging_Type-79_2<br/>
<a name="top"></a>
# Imaging Type (79.2)
This file contains, for each imaging type entry, parameters that the module uses during various stages of exam and report processing and inquiring. The parameter switches allow the 'customizing' of the module for each type of imaging.   WARNING:  ENTRIES SHOULD NOT BE DELETED FROM THIS FILE.    Data Storage  ------------ The data for the 'IMAGING TYPE' file is stored in the ^RA(79.2, global. At the present time this file is very static after day-one initialization is complete.  However, it still should be journaled. It should also be translated if the operating system supports this function.    Input Templates  --------------- The following is a list of input templates used by the package and the entry in the OPTIONS file (#19) that uses the template:                        Compiled  Name                Routine  Description; Option(s)  ----                -------  ----------------------  RA IMAGE PARAMETERS          Used to specify timeout seconds and whether                               the hardware system the module is running on                               is under fail-soft mode;                               RA FAILSOFT    RA ON-LINE CRITERIA          Used to indicate how long certain data should                               remain on file before it can be purged;                               RA PURGE   If any modifications to these input templates are needed for local purposes, then great care should be taken not to degrade any branching logic in the template.    Print Templates  ---------------  The following is a list of print templates used by the package:    Name                  Description; Option(s)  ----                  ----------------------  RA ACTIVITY LOG       Prints a list of the activity log entries for the                        imaging type;

**Global:** ^RA(79.2,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Type Of Imaging**{::nomarkdown}<pre><code>  type_of_imaging</code></pre>{:/} | .01 | This field contains the name of this type of imaging.  DO NOT ADD, EDIT OR<br/>DELETE imaging type names; this will cause problems between the<br/>Radiology/Nuclear Med and Order Entry interface. | STRING | INDEXED<br/>REQUIRED | 
**Activity Log Cut-off**{::nomarkdown}<pre><code>  activity_log_cutoff</code></pre>{:/} | .11 | This field contains the imaging type parameter that tells the purge<br/>routine of the module how many days to keep the various activity logs<br/>on-line.  The amount of days is a whole number between 90 and 99999 and is<br/>determined at each site by the package coordinator and the computer<br/>site manager. | NUMERIC |  | 
**Report Cut-off**{::nomarkdown}<pre><code>  report_cutoff</code></pre>{:/} | .12 | This field contains the imaging type parameter that tells the purge<br/>routine of the module how many days to keep the reports on-line.  The<br/>report 'impression' will always stay on-line even after the reports<br/>are purged.  The amount of days is a whole number between 90 and 99999<br/>and is determined at each site by the package coordinator and the<br/>computer site manager. | NUMERIC |  | 
**Clinical History Cut-off**{::nomarkdown}<pre><code>  clinical_history_cutoff</code></pre>{:/} | .13 | This field contains the imaging type parameter that tells the purge<br/>routine of the module how many days to keep the clinical history<br/>of the visit on-line.  The amount of days is a whole number between 90 and<br/>99999 and is determined by the package coordinator and the computer<br/>site manager. | NUMERIC |  | 
**Tracking Time Cut-off**{::nomarkdown}<pre><code>  tracking_time_cutoff</code></pre>{:/} | .14 | This field applies to sites that are using the tracking function of the<br/>system to record when the exam status changes from one status to another.<br/>It contains the imaging type parameter that tells the purge routine of<br/>the module how many days to keep the 'tracking time' information on-line.<br/>The amount of days is a whole number between 90 and 99999 and is<br/>determined at each site by the package coordinator and the computer<br/>site manager. | NUMERIC |  | 
**Order Data Cut-off**{::nomarkdown}<pre><code>  order_data_cutoff</code></pre>{:/} | .16 | This field contains the imaging type parameter that tells the purge<br/>routine of the module how many days to keep the orders on-line. The<br/>amount of days is a whole number between 30 and 99999 and is determined<br/>by the package coordinator and the computer site manager. | NUMERIC |  | 
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 3 | This is the abbreviation associated with this type of imaging.  It is<br/>between 1 and 4 characters in length and is used as a cross reference and<br/>for quick look ups. DO NOT CHANGE ABBREVIATIONS; changing abbreviations<br/>will cause problems between the Order Entry and Radiology/Nuc Med<br/>interface. | STRING | INDEXED<br/>REQUIRED | 
**Operating Conditions**{::nomarkdown}<pre><code>  operating_conditions</code></pre>{:/} | 4 | This field contains the hardware conditions parameter that tells the system<br/>the type of operating conditions that are in effect.  The available<br/>conditions are: 'N' for normal and 'E' for emergency.<br/> <br/>Under NORMAL conditions, the system uses the parameters set up<br/>in the 'Imaging Locations' file to determine which input and printer<br/>devices to use.  Under EMERGENCY conditions, the system ignores all the<br/>location parameters set up and the user is prompted for this information. | ENUMERATION | INDEXED<br/>REQUIRED | {::nomarkdown}EMERGENCY(NORMAL COMPUTER DOWN): <em><strong>E</strong></em><br/>NORMAL: <em><strong>N</strong></em>{:/}
**Radiopharmaceuticals Used?**{::nomarkdown}<pre><code>  radiopharmaceuticals_used</code></pre>{:/} | 5 | This field is used to determine if radiopharmaceuticals will be used<br/>for this imaging type.  If so, then the nuclear medicine logic paths of<br/>this software will be triggered at all appropriate points. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Next Case Number**{::nomarkdown}<pre><code>  next_case_number</code></pre>{:/} | 25 | This field is used to contain the next available case number for this<br/>type of imaging.  Case numbers are generated by the system in sequential<br/>order and are available for reuse the following week after the exam status<br/>becomes complete.  Case numbers are recycled on Sunday at 12:01 AM. | NUMERIC |  | 
**Case Number Turnover Date**{::nomarkdown}<pre><code>  case_number_turnover_date</code></pre>{:/} | 26 | This field contains the date the case numbers are scheduled to be recycled.<br/>This date will always be the next Sunday's date. | DATE-TIME |  | 
**Introduction Text**{::nomarkdown}<pre><code>  introduction_text</code></pre>{:/} | 50 | This field provides a quick installation guide to be displayed when the<br/>rad/nuc med system is initialized or reinitialized.  It describes aspects<br/>of the module to the site manager and how to proceed. | STRING |  | 
**Pfss Dept. Code**{::nomarkdown}<pre><code>  pfss_dept_code</code></pre>{:/} | 90 | The 3 character numeric code represents the Department Code used by the <br/>PFSS project. | STRING | REQUIRED | 
**Activity Log**{::nomarkdown}<pre><code>  activity_log</code></pre>{:/} | 100 | This multiple field contains a log of actions that have been taken on this<br/>imaging record. | OBJECT |  | [Activity_Log-79_23](#Activity_Log-79_23)
**Work Rvu (wrvu) Scaling Factor**{::nomarkdown}<pre><code>  work_rvu_wrvu_scaling_factor</code></pre>{:/} | 200 | Identifies the 'Society of Chairmen in Academic Radiology Departments' <br/>(SCARD) scaling factor for a specific imaging type by calendar year.  | OBJECT |  | [Work_Rvu_wrvu_Scaling_Factor-79_22](#Work_Rvu_wrvu_Scaling_Factor-79_22)

## Sub-Files
### <a name="Activity_Log-79_23"></a>Activity Log (79.23)

<dl>
<dt>ID</dt><dd>Activity_Log-79_23</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Log Date**{::nomarkdown}<pre><code>  log_date</code></pre>{:/} | .01 | This field is filled in automatically by the system with the date and<br/>the time that the action was taken on this imaging record. | DATE-TIME | REQUIRED | 
**Type Of Action**{::nomarkdown}<pre><code>  type_of_action</code></pre>{:/} | 2 | This field is filled in automatically by the system with the type of<br/>action that was taken on this imaging record.  Available types of action<br/>are:  'P' for data purge complete, 'C' for change image type parameters,<br/>'S' for schedule data purge, and 'O' for on-line criteria modified. | ENUMERATION |  | {::nomarkdown}ON-LINE CRITERIA MODIFIED: <em><strong>O</strong></em><br/>SCHEDULE DATA PURGE: <em><strong>S</strong></em><br/>DATA PURGE COMPLETE: <em><strong>P</strong></em><br/>CHANGE IMAGE TYPE PARAMETERS: <em><strong>C</strong></em>{:/}
**Computer User**{::nomarkdown}<pre><code>  computer_user</code></pre>{:/} | 3 | This field points to the 'NEW PERSON' file and is used <br/>to record the user doing the processing at the time the action <br/>was taken on this imaging record. | POINTER |  | [New_Person-200](New_Person-200)
**No. Of Exam Records Processed**{::nomarkdown}<pre><code>  no_of_exam_records_processed</code></pre>{:/} | 4 | This field is automatically entered by the system after the data purge<br/>routine is finished purging.  This statistic is compiled during the<br/>data purge.  It represents the number of exam records that had at least some<br/>data purged.  Depending on the values of the 'cut-off-days' parameter, the<br/>type of data purged may vary. | NUMERIC |  | 
**No. Of Reports Processed**{::nomarkdown}<pre><code>  no_of_reports_processed</code></pre>{:/} | 5 | This field is automatically entered by the system after the data purge<br/>routine is finished purging. This statistic is compiled during the<br/>data purge. It represents the number of report records that had at least<br/>some data purged. Depending on the values of the 'cut-off-days' parameters,<br/>the type of data purged may vary. | NUMERIC |  | 
**No. Of Requests Processed**{::nomarkdown}<pre><code>  no_of_requests_processed</code></pre>{:/} | 6 | This field is automatically entered by the system after the data<br/>purge routine is finished purging. This statistic is compiled<br/>during the data purge. It represents the number of request records<br/>that have been purged. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Work_Rvu_wrvu_Scaling_Factor-79_22"></a>Work Rvu (wrvu) Scaling Factor (79.22)

<dl>
<dt>ID</dt><dd>Work_Rvu_wrvu_Scaling_Factor-79_22</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Calendar Year**{::nomarkdown}<pre><code>  calendar_year</code></pre>{:/} | .01 | This field identifies the calendar year to associate a specific 'Society<br/>of Chairmen in Academic Radiology Departments' (SCARD) scaling factor to <br/>imaging type specific procedures with an associated wRVU value. | NUMERIC | INDEXED<br/>REQUIRED | 
**Scaling Factor**{::nomarkdown}<pre><code>  scaling_factor</code></pre>{:/} | 2 | This field identifies the appropriate scaling factor applied to the wRVU<br/>value for an imaging type specific rad/nuc med procedure. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}