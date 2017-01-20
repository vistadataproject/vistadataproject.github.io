---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Gmrv_Vital_Type-120_51 

 property | value 
--- | --- 
 id | Gmrv_Vital_Type-120_51
 fmId | 120.51
 label | Gmrv Vital Type
 location | ^GMRD(120.51,
 description | {::nomarkdown}Per VHA Directive {pending directive #}, this file has been \locked down\ <br/>by Data Standardization (DS). The file definition (i.e. data dictionary) <br/>shall not be modified. All additions, changes and deletions to entries in<br/>the file shall be done by Enterprise Reference Terminology (ERT) using the<br/>Master File Server (MFS), provided by Common Services (CS). Creating<br/>and/or editing locally defined fields in the file are not permitted. Use<br/>of locally defined fields that were created prior to VHA Directive<br/>{pending directive #} shall not be supported.<br/> <br/>This file contains a list of vital sign types, and various parameters<br/>which mold the data entry.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This field reflects a list of vital signs/physical measurement types.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| abbreviation | 1 | Abbreviation | {::nomarkdown}This field contains an abbreviation for this vital type.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| rate | 3 | Rate | {::nomarkdown}This field specifies whether or not the vital measurement record with<br/>this vital type has a rate associated with it.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| rate_input_transform | 4 | Rate Input Transform | {::nomarkdown}If a rate is specified for a vital measurement record, this field checks<br/>the data validity.  The code stored in this field should only be updated<br/>by someone with programmer's access to the FileMan.{:/} | STRING |  |  |  | 
| rate_help | 5 | Rate Help | {::nomarkdown}This field contains the name of the Help Frame associated with this<br/>Vital Type.{:/} | STRING |  |  |  | 
| pce_abbreviation | 7 | Pce Abbreviation | {::nomarkdown}This field contains the PCE Abbreviation for this Vital Type.{:/} | STRING |  | INDEXED |  | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated with a <br/>Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference term.{:/} | [OBJECT] |  |  | [Effective_Date_time-120_5199](#Effective_Date_time-120_5199)  | 

## <a name="Effective_Date_time-120_5199"></a>Effective_Date_time-120_5199 

 property | value 
--- | --- 
 id | Effective_Date_time-120_5199
 label | Effective Date/time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the Status of the reference term was <br/>established.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event. If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:09:58 am</p>{:/}