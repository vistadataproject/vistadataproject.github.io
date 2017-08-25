---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Gmrv_Vital_Type-120_51<br/>
<a name="top"></a>
# Gmrv Vital Type (120.51)
Per VHA Directive {pending directive #}, this file has been "locked down"  by Data Standardization (DS). The file definition (i.e. data dictionary)  shall not be modified. All additions, changes and deletions to entries in the file shall be done by Enterprise Reference Terminology (ERT) using the Master File Server (MFS), provided by Common Services (CS). Creating and/or editing locally defined fields in the file are not permitted. Use of locally defined fields that were created prior to VHA Directive {pending directive #} shall not be supported.   This file contains a list of vital sign types, and various parameters which mold the data entry.

**Global:** ^GMRD(120.51,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This field reflects a list of vital signs/physical measurement types. | STRING | INDEXED<br/>REQUIRED | 
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 1 | This field contains an abbreviation for this vital type. | STRING | INDEXED<br/>REQUIRED | 
**Rate**{::nomarkdown}<pre><code>  rate</code></pre>{:/} | 3 | This field specifies whether or not the vital measurement record with<br/>this vital type has a rate associated with it. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Rate Input Transform**{::nomarkdown}<pre><code>  rate_input_transform</code></pre>{:/} | 4 | If a rate is specified for a vital measurement record, this field checks<br/>the data validity.  The code stored in this field should only be updated<br/>by someone with programmer's access to the FileMan. | STRING |  | 
**Rate Help**{::nomarkdown}<pre><code>  rate_help</code></pre>{:/} | 5 | This field contains the name of the Help Frame associated with this<br/>Vital Type. | STRING |  | 
**Pce Abbreviation**{::nomarkdown}<pre><code>  pce_abbreviation</code></pre>{:/} | 7 | This field contains the PCE Abbreviation for this Vital Type. | STRING | INDEXED | 
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated with a <br/>Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair Status and Effective Date/Time for each reference term. | OBJECT |  | [Effective_Date_time-120_5199](#Effective_Date_time-120_5199)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Effective_Date_time-120_5199"></a>Effective Date/time (120.5199)

<dl>
<dt>ID</dt><dd>Effective_Date_time-120_5199</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the Status of the reference term was <br/>established. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event. If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}