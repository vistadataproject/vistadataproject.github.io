---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Facility_Treating_Specialty-45_7 

 property | value 
--- | --- 
 id | Facility_Treating_Specialty-45_7
 fmId | 45.7
 label | Facility Treating Specialty
 location | ^DIC(45.7,
 description | {::nomarkdown}This file is used to maintain the various teams of specialties that are used to treat a patient during his episodes of care.<br/>A change in the bedsection associated with the treating specialties causes<br/>the generation of changes in bedsection for PTF purposes.<br/>the generation of changes in bedsection for PTF purposes.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}Contains the name of the facility treating specialty.  Types of<br/>treating specialties may vary between facilities.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| specialty | 1 | Specialty | {::nomarkdown}This field contains the treating specialty name as entered by<br/>facility or distributed with software.  Pointer to  Specialty File{:/} | POINTER |  | REQUIRED, INDEXED | Specialty-42_4 | 
| service | 2 | Service | {::nomarkdown}This field contains the associated Service of the treating specialty.{:/} | POINTER |  | INDEXED | Service_section-49 | 
| providers | 10 | Providers | {::nomarkdown}Primary care physicians associated with treating specialty.{:/} | [POINTER] |  |  | {id:New_Person-200} | 
| abbreviation | 99 | Abbreviation | {::nomarkdown}Formerly honeywell code may now assume other uses.<br/>Enter an abbreviation (1-5 characters) to be used when <br/>Patients Treating Specialty is to be displayed on the G&L.<br/>If there is nothing entered here the first five characters <br/>of the name for this facility treating specialty will appear <br/>on the G&L.{:/} | STRING |  | INDEXED |  | 
| effective_date | 100 | Effective Date |  | [OBJECT] |  |  | [Effective_Date-45_702](#Effective_Date-45_702)  | 

## <a name="Effective_Date-45_702"></a>Effective_Date-45_702 

 property | value 
--- | --- 
 id | Effective_Date-45_702
 label | Effective Date

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date | .01 | Effective Date | {::nomarkdown}This multiple holds the effective date(s) for the Facility Treating<br/>Specialties<br/> {:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| active | .02 | Active? | {::nomarkdown}This field will be an active/inactive flag for the facility treating<br/>specialty.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 8:01:05 am</p>{:/}