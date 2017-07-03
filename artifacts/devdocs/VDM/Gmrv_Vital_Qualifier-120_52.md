---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Gmrv_Vital_Qualifier-120_52
# Gmrv Vital Qualifier (120.52)
Per VHA Directive {pending directive #}, this file has been "locked down"  by Data Standardization (DS). The file definition (i.e. data dictionary)  shall not be modified. All additions, changes and deletions to entries in the file shall be done by Enterprise Reference Terminology (ERT) using the Master File Server (MFS), provided by Common Services (CS). Creating and/or editing locally defined fields in the file are not permitted. Use of locally defined fields that were created prior to VHA Directive {pending directive #} shall not be supported.   This file contains a list of qualifiers for vitals/measurements.

<dl>
<dt>Global</dt><dd>^GMRD(120.52,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Qualifier**{::nomarkdown}<pre><code>  qualifier</code></pre>{:/} | .01 | This field supplies a list of possible qualifiers for a vital measurement<br/>record. | STRING | INDEXED<br/>REQUIRED | 
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | .02 | This field contains the synonym for the qualifier. | STRING |  | 
**Vital Type**{::nomarkdown}<pre><code>  vital_type</code></pre>{:/} | 1 | This multiple contains a list of vital types associated with this site.  <br/>The site field on the vital measurement record is screened by the data<br/>contained in the vital type field. | OBJECT |  | [Vital_Type-120_521](#Vital_Type-120_521)
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated with a <br/>Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair Status and Effective Date/Time for each reference term. | OBJECT |  | [Effective_Date_time-120_5299](#Effective_Date_time-120_5299)

### Subfile
#### <a name="Vital_Type-120_521"></a>Vital Type

<dl>
<dt>ID</dt><dd>Vital_Type-120_521</dd>
<dt>File Type</dt><dd>120.521</dd>
<dt>Label</dt><dd>Vital Type</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Vital Type**{::nomarkdown}<pre><code>  vital_type</code></pre>{:/} | .01 | This field screens the vital measurement site field in the GMRV VITAL <br/>MEASUREMENT (#120.5) file. | POINTER | INDEXED<br/>REQUIRED | [Gmrv_Vital_Type-120_51](Gmrv_Vital_Type-120_51)
**Category**{::nomarkdown}<pre><code>  category</code></pre>{:/} | .02 | This field will contain the category for this characteristic for this<br/>vital type. | POINTER | INDEXED<br/>REQUIRED | [Gmrv_Vital_Category-120_53](Gmrv_Vital_Category-120_53)

#### <a name="Effective_Date_time-120_5299"></a>Effective Date/time

<dl>
<dt>ID</dt><dd>Effective_Date_time-120_5299</dd>
<dt>File Type</dt><dd>120.5299</dd>
<dt>Label</dt><dd>Effective Date/time</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the Status of the reference term was <br/>established. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event. If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}