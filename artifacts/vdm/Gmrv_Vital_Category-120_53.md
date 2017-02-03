---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Gmrv_Vital_Category-120_53 

<dl>
<dt>id</dt><dd>Gmrv_Vital_Category-120_53</dd>
<dt>fmId</dt><dd>120.53</dd>
<dt>label</dt><dd>Gmrv Vital Category</dd>
<dt>location</dt><dd>^GMRD(120.53,</dd>
<dt>description</dt><dd>Per VHA Directive {pending directive #}, this file has been \locked down\ <br/>by Data Standardization (DS). The file definition (i.e. data dictionary) <br/>shall not be modified. All additions, changes and deletions to entries in<br/>the file shall be done by Enterprise Reference Terminology (ERT) using the<br/>Master File Server (MFS), provided by Common Services (CS). Creating<br/>and/or editing locally defined fields in the file are not permitted. Use<br/>of locally defined fields that were created prior to VHA Directive<br/>{pending directive #} shall not be supported.<br/> <br/>This file contains a list of qualities or characteristics that can be <br/>affixed to a vital measurement.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| category | .01 | Category | {::nomarkdown}This field provides a list of qualities that could be assigned to a given <br/>vital measurement record.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| vital_type | 1 | Vital Type | {::nomarkdown}This multiple screens the possible quality entries for a given vital <br/>measurement record.{:/} | [OBJECT] |  |  | [Vital_Type-120_531](#Vital_Type-120_531)  | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated with a <br/>Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference term.{:/} | [OBJECT] |  |  | [Effective_Date_time-120_5399](#Effective_Date_time-120_5399)  | 

## <a name="Vital_Type-120_531"></a>Vital_Type-120_531 

<dl>
<dt>id</dt><dd>Vital_Type-120_531</dd>
<dt>label</dt><dd>Vital Type</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| vital_type | .01 | Vital Type | {::nomarkdown}This field screens the vital measurement quality field in the GMRV VITAL <br/>MEASUREMENT file (#120.5).{:/} | POINTER |  | REQUIRED, INDEXED | Gmrv_Vital_Type-120_51 | 
| maximum_entries | .03 | Maximum Entries | {::nomarkdown}This field indicates the minimum number of characteristics that can<br/>be selected for a patient for this category for this vital type.{:/} | NUMERIC |  |  |  | 
| print_order | .05 | Print Order | {::nomarkdown}This field contains the order in which this category of characteristics<br/>will display on reports for this category for this vital type.{:/} | NUMERIC |  |  |  | 
| edit_order | .06 | Edit Order | {::nomarkdown}This field contains the order in which this category for this vital type<br/>will be entered/edited in the Vitals/Measurements edit options.{:/} | NUMERIC |  |  |  | 
| default_qualifier | .07 | Default Qualifier | {::nomarkdown}This field will denote the default qualifier to be used if the user<br/>does not specify one during data entry.{:/} | POINTER |  |  | Gmrv_Vital_Qualifier-120_52 | 

## <a name="Effective_Date_time-120_5399"></a>Effective_Date_time-120_5399 

<dl>
<dt>id</dt><dd>Effective_Date_time-120_5399</dd>
<dt>label</dt><dd>Effective Date/time</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the Status of the reference term was <br/>established.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event. If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 5:29:32 am</p>{:/}