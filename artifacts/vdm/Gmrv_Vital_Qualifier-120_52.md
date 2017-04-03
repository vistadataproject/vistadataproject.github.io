---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Gmrv_Vital_Qualifier-120_52 

<dl>
<dt>id</dt><dd>Gmrv_Vital_Qualifier-120_52</dd>
<dt>fmId</dt><dd>120.52</dd>
<dt>label</dt><dd>Gmrv Vital Qualifier</dd>
<dt>location</dt><dd>^GMRD(120.52,</dd>
<dt>description</dt><dd>Per VHA Directive {pending directive #}, this file has been \locked down\ <br/>by Data Standardization (DS). The file definition (i.e. data dictionary) <br/>shall not be modified. All additions, changes and deletions to entries in<br/>the file shall be done by Enterprise Reference Terminology (ERT) using the<br/>Master File Server (MFS), provided by Common Services (CS). Creating<br/>and/or editing locally defined fields in the file are not permitted. Use<br/>of locally defined fields that were created prior to VHA Directive<br/>{pending directive #} shall not be supported.<br/> <br/>This file contains a list of qualifiers for vitals/measurements.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| qualifier | .01 | Qualifier | {::nomarkdown}This field supplies a list of possible qualifiers for a vital measurement<br/>record.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| synonym | .02 | Synonym | {::nomarkdown}This field contains the synonym for the qualifier.{:/} | STRING |  |  |  | 
| vital_type | 1 | Vital Type | {::nomarkdown}This multiple contains a list of vital types associated with this site.  <br/>The site field on the vital measurement record is screened by the data<br/>contained in the vital type field.{:/} | [OBJECT] |  |  | [Vital_Type-120_521](#Vital_Type-120_521)  | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated with a <br/>Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference term.{:/} | [OBJECT] |  |  | [Effective_Date_time-120_5299](#Effective_Date_time-120_5299)  | 

## <a name="Vital_Type-120_521"></a>Vital_Type-120_521 

<dl>
<dt>id</dt><dd>Vital_Type-120_521</dd>
<dt>fmId</dt><dd>120.521</dd>
<dt>label</dt><dd>Vital Type</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| vital_type | .01 | Vital Type | {::nomarkdown}This field screens the vital measurement site field in the GMRV VITAL <br/>MEASUREMENT (#120.5) file.{:/} | POINTER |  | REQUIRED, INDEXED | Gmrv_Vital_Type-120_51 | 
| category | .02 | Category | {::nomarkdown}This field will contain the category for this characteristic for this<br/>vital type.{:/} | POINTER |  | REQUIRED, INDEXED | Gmrv_Vital_Category-120_53 | 

## <a name="Effective_Date_time-120_5299"></a>Effective_Date_time-120_5299 

<dl>
<dt>id</dt><dd>Effective_Date_time-120_5299</dd>
<dt>fmId</dt><dd>120.5299</dd>
<dt>label</dt><dd>Effective Date/time</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the Status of the reference term was <br/>established.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event. If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:19 pm</p>{:/}