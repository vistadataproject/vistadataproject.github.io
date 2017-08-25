---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Sign_symptoms-120_83<br/>
<a name="top"></a>
# Sign/symptoms (120.83)
A listing of possible allergic reactions.   Per VHA directive XXX, this file has been "locked down" by Data Standardization (DS).  The file definition (i.e. data dictionary) shall not be modified.  All additions, changes and deletions to entries in the file shall be done by Enterprise Reference Terminology (ERT) using the Master File Server (MFS), provided by Common Services (CS).  Creating and/or editing locally defined fields in the file are not permitted.  Use of locally defined fields that were created prior to VHA Directive XXX shall not be supported.

**Global:** ^GMRD(120.83,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | A sign/symptom that can be associated with an allergy. | STRING | INDEXED<br/>REQUIRED | 
**National Sign/symptom**{::nomarkdown}<pre><code>  national_sign_symptom</code></pre>{:/} | 1 | Indicates whether this sign/symptom has been released with the national<br/>package or has been added locally. | ENUMERATION |  | {::nomarkdown}NATIONAL SIGN/SYMPTOM: <em><strong>1</strong></em>{:/}
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 2 | A list of synonyms that can also be used to look up this sign/symptom. | STRING |  | 
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated with<br/>a Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID).  A unique meaningless integer assigned to<br/>reference terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair status and effective date/time for each<br/>reference term. | OBJECT |  | [Effective_Date_time-120_8399](#Effective_Date_time-120_8399)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Effective_Date_time-120_8399"></a>Effective Date/time (120.8399)

<dl>
<dt>ID</dt><dd>Effective_Date_time-120_8399</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the status of the reference term was<br/>established | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The status of a reference term is either 'ACTIVE' or 'INACTIVE'.  If<br/>'ACTIVE', then the term will be accessible by end-users to <br/>document a particular patient event.  If 'INACTIVE', then the term will<br/>only be accessible by the application to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}