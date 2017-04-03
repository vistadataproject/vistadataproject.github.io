---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Clinical_Reminder_Parameters-800 

<dl>
<dt>id</dt><dd>Clinical_Reminder_Parameters-800</dd>
<dt>fmId</dt><dd>800</dd>
<dt>label</dt><dd>Clinical Reminder Parameters</dd>
<dt>location</dt><dd>^PXRM(800,</dd>
<dt>description</dt><dd>This file contains the parameters used by the Clinical Reminders<br/>package.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| site_parameters | .01 | Site Parameters | {::nomarkdown}This file contains parameters used by the Clinical Reminders package. <br/>There is one top-level entry per site.{:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| default_reminder_disclaimer | 1 | Default Reminder Disclaimer | {::nomarkdown}This is the DEFAULT REMINDER DISCLAIMER that is distributed with the<br/>package.{:/} | STRING |  |  |  | 
| site_reminder_disclaimer | 2 | Site Reminder Disclaimer | {::nomarkdown}This is the site-defined reminder disclaimer. If there is an entry in<br/>this field, then the site-defined disclaimer will override the default<br/>disclaimer.{:/} | STRING |  |  |  | 
| reminder_management_mailgroup | 3 | Reminder Management Mailgroup | {::nomarkdown}Members of the MailMan mail group pointed to by this field will receive<br/>various types of MailMan messages concerned with managing reminders.<br/><br/>Some examples: if there is an error during reminder evaluation, this<br/>mail group will be sent a message notifying them of the error. When the<br/>reminder indexes are built, the mail group will receive the messages<br/>this process generates.<br/><br/>When a message is generated, if the user is not a member of the mail<br/>group and the mail group is private, then no members of the mail group<br/>will receive the message. Therefore, it is recommended that the mail<br/>group be public.{:/} | POINTER |  |  | Mail_Group-3_8 | 
| web_sites | 4 | Web Sites | {::nomarkdown}In the CPRS GUI, if you right-click on a reminder, one of the choices is<br/>Reference Information, which will give a list of web sites that have<br/>information related to the reminder. The web sites listed in this<br/>multiple are the default set that apply to all reminders.{:/} | [OBJECT] |  |  | [Web_Sites-800_04](#Web_Sites-800_04)  | 
| version | 5 | Version | {::nomarkdown}This is the current version number of the Clinical Reminders package.{:/} | STRING |  |  |  | 
| full_ssn | 6 | Full Ssn | {::nomarkdown}This field is the default for the Clinical Reminders display of Social<br/>Security numbers. It is a set of codes with the possible values of \N\<br/>or \Y\. If the value is \Y\ then the full SSN is printed; otherwise<br/>only the last four digits of the SSN are printed.<br/> <br/>The standard setting for this field is N.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| initial_mst_synch_comp_date | 7 | Initial Mst Synch Comp Date | {::nomarkdown}This is the date and time the initial MST synchronization was completed.{:/} | DATE-TIME |  |  |  | 
| initial_mst_synch_update_count | 8 | Initial Mst Synch Update Count | {::nomarkdown}This is the number of updates that were made during the initial<br/>synchronization.{:/} | NUMERIC |  |  |  | 
| daily_mst_sync_comp_date | 9 | Daily Mst Sync Comp Date | {::nomarkdown}This is the date and time the last daily MST synchronization was completed.{:/} | DATE-TIME |  |  |  | 
| daily_mst_synch_update_count | 10 | Daily Mst Synch Update Count | {::nomarkdown}This is the number of updates made during the last daily MST synchronization.{:/} | NUMERIC |  |  |  | 
| initial_mst_synch_start_date | 11 | Initial Mst Synch Start Date | {::nomarkdown}This is the date and time the initial Clinical Reminders MST<br/>synchronization was set to run.{:/} | DATE-TIME |  |  |  | 
| daily_mst_synch_start_date | 12 | Daily Mst Synch Start Date | {::nomarkdown}This is the date and time the last daily Clinical Reminders MST<br/>synchronization was set to start.{:/} | DATE-TIME |  |  |  | 
| truncate_employee_ssn | 13 | Truncate Employee Ssn | {::nomarkdown}The detailed reminders due report has the option to print the full SSN for<br/>the patients selected (see FULL SSN field). However, if a patient is an<br/>employee (fields 361 and 391 in PATIENT file) the SSN will be truncated.<br/> <br/>If a site, for their own reasons, requires the full SSN for employees to<br/>be printed on their reports then this may be done by setting the TRUNCATE<br/>EMPLOYEE SSN field to 'No'.<br/> <br/>The default value installed for this field is 'Yes'. This ensures that <br/>full employee SSNs are not printed on the report. {:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| edit_history_count | 14 | Edit History Count | {::nomarkdown}The option PXRM REMINDER EDIT HISTORY is used to display the edit<br/>history of a reminder definition from newest to oldest. One of the<br/>questions it asks the user is how many entries to display. This<br/>parameter sets the default number to display. The user can override<br/>this and select any number they want.{:/} | NUMERIC |  |  |  | 
| maximum_number_of_index_errors | 15 | Maximum Number Of Index Errors | {::nomarkdown}When indexing a global, details about entries that cannot be indexed<br/>are reported in a MailMan message that uses a line for each error. If<br/>there are large numbers of errors the message can become very large.<br/>This parameter establishes the maximum number of entries to list in the<br/>MailMan message so its size does not become unwieldy.{:/} | NUMERIC |  |  |  | 
| formatted_disclaimer | 16 | Formatted Disclaimer | {::nomarkdown}This file contains two fields to store a disclaimer: DEFAULT<br/>REMINDER DISCLAIMER and SITE REMINDER DISCLAIMER. The DEFAULT<br/>REMINDER DISCLAIMER is distributed with the package. A site<br/>can create and store their own disclaimer in the SITE REMINDER<br/>DISCLAIMER field. If the SITE REMINDER DISCLAIMER is defined it is<br/>used otherwise the DEFAULT REMINDER DISCLAIMER is used.<br/><br/>The disclaimer needs to be formatted before it can be displayed so<br/>for efficiency purposes the disclaimer is formatted once and stored<br/>in this field. The formatting takes place whenever the SITE REMINDER<br/>DISCLAIMER is edited or deleted.<br/><br/>{:/} | STRING |  |  |  | 
| maximum_number_of_mh_questions | 17 | Maximum Number Of Mh Questions | {::nomarkdown}When setting up a reminder dialog element, if a mental health test<br/>has more questions then the value defined in this field the<br/>test cannot be used in a dialog element. When PXRM*2.0*6 is<br/>installed the value will be set to 35. This parameter can be edited<br/>using the PAR option on the Reminders Managers Menu.<br/><br/>{:/} | NUMERIC |  |  |  | 

## <a name="Web_Sites-800_04"></a>Web_Sites-800_04 

<dl>
<dt>id</dt><dd>Web_Sites-800_04</dd>
<dt>fmId</dt><dd>800.04</dd>
<dt>label</dt><dd>Web Sites</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| url | .01 | Url | {::nomarkdown}This is the URL for the web site.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| web_site_title | .02 | Web Site Title | {::nomarkdown}This is the WEB SITE TITLE. This field is optional. If entered, this will <br/>display in the 'Reference Information' window of CPRS GUI instead of the <br/>full URL.{:/} | STRING |  |  |  | 
| web_site_description | 1 | Web Site Description | {::nomarkdown}This is a description of the web site. It can be used to explain why<br/>the particular site is included. It is for reference information only<br/>and not displayed to the user.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:19 pm</p>{:/}