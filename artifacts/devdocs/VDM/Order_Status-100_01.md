---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Order_Status-100_01<br/>
<a name="top"></a>
# Order Status (100.01)
This file contains the possible statuses that may be associated with an order in OE/RR.   Per VHA Directive 2005-044, this file has been "locked down" by Data  Standardization (DS).  The file definition (i.e. data dictionary) shall  not be modified.  All additions, changes and deletions to entries in the  file shall be done by Enterprise Reference Terminology (ERT) using the  Master File Server (MFS), provided by Common Services (CS).   Creating  and/or editing locally defined fields in the file are not permitted.  Use  of locally defined fields that were created prior to VHA Directive  2005-044 shall not be supported.

**Global:** ^ORD(100.01,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 | This is the number of the status entry.<br/>All entries are reserved. | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the status. | STRING | INDEXED<br/>REQUIRED | 
**Short Name**{::nomarkdown}<pre><code>  short_name</code></pre>{:/} | .02 | This is a shorter version of the status name to be displayed on the<br/>Orders tab of the CPRS Chart. | STRING |  | 
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | .1 | This is the abbreviation of the status to be displayed on order<br/>reviews and printouts.<br/>The abbreviation is placed in its own node of the global and the entire<br/>node is reserved.  This allows for the possibility of an abbreviation<br/>which contains an up arrow. | STRING |  | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 2 | This is the description of the status. | STRING |  | 
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated with a <br/>Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair Status and Effective Date/Time for each reference term. | OBJECT |  | [Effective_Date_time-100_0199](#Effective_Date_time-100_0199)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Effective_Date_time-100_0199"></a>Effective Date/time (100.0199)

<dl>
<dt>ID</dt><dd>Effective_Date_time-100_0199</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the Status of the reference term was established. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'.  If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event.  If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}