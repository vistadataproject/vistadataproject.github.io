---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Service_section-49 

 property | value 
--- | --- 
 id | Service_section-49
 fmId | 49
 label | Service/section
 location | ^DIC(49,
 description | {::nomarkdown}This file is a list of the services and sections within the services.<br/>Some of the entries may be 'MIS COSTING SECTIONS' for use with the<br/>cost accounting part of the Management Information System software.<br/>A section is an MIS section if there is a code entered in the field<br/>called MIS COSTING CODE.  In the cost accounting system all medical<br/>center costs will be tied to a particular section.  When MIS sections<br/>change, do not delete the old section.  Instead, change the fields under<br/>the multiple field called \DATE CLOSED\ to identify which sections are<br/>no longer in use.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}Enter Service or Section name.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| abbreviation | 1 | Abbreviation | {::nomarkdown}This field contains the accepted abbreviation for this service or section.{:/} | STRING |  | INDEXED |  | 
| description | 1.3 | Description | {::nomarkdown}This field contains a brief description or the mission of this service<br/>or section.{:/} | STRING |  |  |  | 
| mail_symbol | 1.5 | Mail Symbol | {::nomarkdown}This field contains the accepted mail routing symbol for the service<br/>or section.{:/} | STRING |  | INDEXED |  | 
| parent_service | 1.6 | Parent Service | {::nomarkdown}This field contains a pointer to the name of the service or section which<br/>is \parent\ to this section.{:/} | POINTER |  | INDEXED | [Service_section-49](Service_section-49.md) | 
| type_of_service | 1.7 | Type Of Service | {::nomarkdown}This flag indicates the type of each entry in this file.  Services or<br/>sub-services may be marked as Administrative or for Patient Care.<br/>or for Patient Care.{:/} | ENUMERATION |  | INDEXED | {::nomarkdown}<dl><dt>C</dt><dd>PATIENT CARE</dd><dt>A</dt><dd>ADMINISTRATIVE</dd></dl>{:/} | 
| chief | 2 | Chief | {::nomarkdown}This field contains a pointer to the name of the chief of this service<br/>or section.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| chief_phone | 3 | Chief Phone | {::nomarkdown}This field contains the telephone number(s) for the chief of this service .<br/>or section.{:/} | [STRING] |  |  |  | 
| asst_chief | 4 | Asst Chief | {::nomarkdown}This field contains a pointer to the name of the assistant chief of this<br/>service or section.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| asst_chief_phone | 5 | Asst Chief Phone | {::nomarkdown}This field contains the telephone number(s) for the assistant chief of<br/>this service or section.{:/} | [STRING] |  |  |  | 
| location | 6 | Location | {::nomarkdown}This field contains the physical location of this service or section<br/>(i.e., room number).{:/} | STRING |  |  |  | 
| mis_costing_code | 9 | Mis Costing Code | {::nomarkdown}This field contains the Management Information Cost Accounting code<br/>for this service or section.{:/} | STRING |  | INDEXED |  | 
| cost_center | 10 | Cost Center | {::nomarkdown}This field contains the cost center name for this service section.<br/>The cost center must be defined in the IFCAP Cost Center File<br/>420.1.{:/} | STRING |  | INDEXED |  | 
| type_of_costing_section | 11 | Type Of Costing Section | {::nomarkdown}This field contains the type of management information cost accounting<br/>section for this service or section.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>S</dt><dd>SUB-SPECIALTY ADMINISTRATIVE</dd><dt>N</dt><dd>NON-ADMINISTRATIVE</dd><dt>A</dt><dd>ADMINISTRATIVE</dd><dt>O</dt><dd>OFF-STATION</dd></dl>{:/} | 
| ambulatory_care_flag | 12 | Ambulatory Care Flag | {::nomarkdown}This field contains the ambulatory care flag.  Yes or No for this<br/>sertice or section.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>Y</dt><dd>AMBULATORY CARE</dd><dt>N</dt><dd>NOT AMBULATORY CARE</dd></dl>{:/} | 
| date_closed | 13 | Date Closed | {::nomarkdown}This field contains date(s) when this service or section closed.{:/} | [OBJECT] |  |  | [Date_Closed-49_07](#Date_Closed-49_07)  | 
| national_service | 730 | National Service | {::nomarkdown}This field is a pointer to the National Service File #730, and is<br/>used to link the locally built 'Service/Section' file to the<br/>standardized list of nationally recognized services.{:/} | POINTER |  | INDEXED | National_Service-730 | 
| coordinator_irm | 16000 | Coordinator (irm) | {::nomarkdown}This field is used by kernel to link a NEW PERSON entry through the<br/>service/section pointer back to a New Person entry for access help.{:/} | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 

## <a name="Date_Closed-49_07"></a>Date_Closed-49_07 

 property | value 
--- | --- 
 id | Date_Closed-49_07
 label | Date Closed

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_closed | .01 | Date Closed | {::nomarkdown}This field contains a date/time when this service or section closed for<br/>hospital use.{:/} | DATE-TIME |  | REQUIRED |  | 
| date_reopened | 1 | Date Re-opened | {::nomarkdown}This field contains a date/time when this closed service or section<br/>was reopened for hospital use.{:/} | DATE-TIME |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:09:58 am</p>{:/}