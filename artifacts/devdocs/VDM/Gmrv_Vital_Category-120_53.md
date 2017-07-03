---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Gmrv_Vital_Category-120_53
# Gmrv Vital Category (120.53)
Per VHA Directive {pending directive #}, this file has been "locked down"  by Data Standardization (DS). The file definition (i.e. data dictionary)  shall not be modified. All additions, changes and deletions to entries in the file shall be done by Enterprise Reference Terminology (ERT) using the Master File Server (MFS), provided by Common Services (CS). Creating and/or editing locally defined fields in the file are not permitted. Use of locally defined fields that were created prior to VHA Directive {pending directive #} shall not be supported.   This file contains a list of qualities or characteristics that can be  affixed to a vital measurement.

<dl>
<dt>Global</dt><dd>^GMRD(120.53,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Category**{::nomarkdown}<pre><code>  category</code></pre>{:/} | .01 | This field provides a list of qualities that could be assigned to a given <br/>vital measurement record. | STRING | INDEXED<br/>REQUIRED | 
**Vital Type**{::nomarkdown}<pre><code>  vital_type</code></pre>{:/} | 1 | This multiple screens the possible quality entries for a given vital <br/>measurement record. | OBJECT |  | [Vital_Type-120_531](#Vital_Type-120_531)
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated with a <br/>Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair Status and Effective Date/Time for each reference term. | OBJECT |  | [Effective_Date_time-120_5399](#Effective_Date_time-120_5399)

### Subfile
#### <a name="Vital_Type-120_531"></a>Vital Type

<dl>
<dt>ID</dt><dd>Vital_Type-120_531</dd>
<dt>File Type</dt><dd>120.531</dd>
<dt>Label</dt><dd>Vital Type</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Vital Type**{::nomarkdown}<pre><code>  vital_type</code></pre>{:/} | .01 | This field screens the vital measurement quality field in the GMRV VITAL <br/>MEASUREMENT file (#120.5). | POINTER | INDEXED<br/>REQUIRED | [Gmrv_Vital_Type-120_51](Gmrv_Vital_Type-120_51)
**Maximum Entries**{::nomarkdown}<pre><code>  maximum_entries</code></pre>{:/} | .03 | This field indicates the minimum number of characteristics that can<br/>be selected for a patient for this category for this vital type. | NUMERIC |  | 
**Print Order**{::nomarkdown}<pre><code>  print_order</code></pre>{:/} | .05 | This field contains the order in which this category of characteristics<br/>will display on reports for this category for this vital type. | NUMERIC |  | 
**Edit Order**{::nomarkdown}<pre><code>  edit_order</code></pre>{:/} | .06 | This field contains the order in which this category for this vital type<br/>will be entered/edited in the Vitals/Measurements edit options. | NUMERIC |  | 
**Default Qualifier**{::nomarkdown}<pre><code>  default_qualifier</code></pre>{:/} | .07 | This field will denote the default qualifier to be used if the user<br/>does not specify one during data entry. | POINTER |  | [Gmrv_Vital_Qualifier-120_52](Gmrv_Vital_Qualifier-120_52)

#### <a name="Effective_Date_time-120_5399"></a>Effective Date/time

<dl>
<dt>ID</dt><dd>Effective_Date_time-120_5399</dd>
<dt>File Type</dt><dd>120.5399</dd>
<dt>Label</dt><dd>Effective Date/time</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the Status of the reference term was <br/>established. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event. If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}