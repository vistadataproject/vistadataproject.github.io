---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Sign_symptoms-120_83 

 property | value 
--- | --- 
 id | Sign_symptoms-120_83
 fmId | 120.83
 label | Sign/symptoms
 location | ^GMRD(120.83,
 description | {::nomarkdown}A listing of possible allergic reactions.<br/> <br/>Per VHA directive XXX, this file has been \locked down\ by Data<br/>Standardization (DS).  The file definition (i.e. data dictionary) shall<br/>not be modified.  All additions, changes and deletions to entries in the<br/>file shall be done by Enterprise Reference Terminology (ERT) using the<br/>Master File Server (MFS), provided by Common Services (CS).  Creating<br/>and/or editing locally defined fields in the file are not permitted.  Use<br/>of locally defined fields that were created prior to VHA Directive XXX<br/>shall not be supported.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}A sign/symptom that can be associated with an allergy.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| national_sign_symptom | 1 | National Sign/symptom | {::nomarkdown}Indicates whether this sign/symptom has been released with the national<br/>package or has been added locally.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>NATIONAL SIGN/SYMPTOM</dd></dl>{:/} | 
| synonym | 2 | Synonym | {::nomarkdown}A list of synonyms that can also be used to look up this sign/symptom.{:/} | [STRING] |  |  |  | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated with<br/>a Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID).  A unique meaningless integer assigned to<br/>reference terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair status and effective date/time for each<br/>reference term.{:/} | [OBJECT] |  |  | [Effective_Date_time-120_8399](#Effective_Date_time-120_8399)  | 

## <a name="Effective_Date_time-120_8399"></a>Effective_Date_time-120_8399 

 property | value 
--- | --- 
 id | Effective_Date_time-120_8399
 label | Effective Date/time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the status of the reference term was<br/>established{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The status of a reference term is either 'ACTIVE' or 'INACTIVE'.  If<br/>'ACTIVE', then the term will be accessible by end-users to <br/>document a particular patient event.  If 'INACTIVE', then the term will<br/>only be accessible by the application to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 7:54:22 am</p>{:/}