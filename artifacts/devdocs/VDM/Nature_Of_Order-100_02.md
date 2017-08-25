---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Nature_Of_Order-100_02<br/>
<a name="top"></a>
# Nature Of Order (100.02)
This file should not be added to or deleted from.  It determines the actions that are to be taken based on the nature of an order or change to an order.   Per VHA Directive 2005-044, this file has been "locked down" by Data  Standardization (DS).  The file definition (i.e. data dictionary) shall  not be modified.  All additions, changes and deletions to entries in the  file shall be done by Enterprise Reference Terminology (ERT) using the  Master File Server (MFS), provided by Common Services (CS).   Creating  and/or editing locally defined fields in the file are not permitted.  Use  of locally defined fields that were created prior to VHA Directive  2005-044 shall not be supported.   The Orders Domain has approved editing of the following fields in this file:  - PRINT CHART COPY (#.12)  - PRINT DAILY SUMMARY (#.13)  - PRINT WORK COPY (#.15)  - INCLUDE IN ACTIVE ORDERS (#.16) This may be accomplished via the option "Print Parameters for Nature of  Order" [ORCL NATURE], on the "Print/Report Parameters" [OR PARAM PRINTS]  menu.

**Global:** ^ORD(100.02,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 |  | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the Nature of Order. | STRING | INDEXED<br/>REQUIRED | 
**Code**{::nomarkdown}<pre><code>  code</code></pre>{:/} | .02 | This is a single character abbreviation that is used in HL7 messages<br/>between CPRS and the ancillary packages. | STRING | INDEXED<br/>REQUIRED | 
**Non-interactive**{::nomarkdown}<pre><code>  noninteractive</code></pre>{:/} | .03 | This field identifies this entry for interactive or non-interactive<br/>use. | ENUMERATION | INDEXED | {::nomarkdown}NON-INTERACTIVE: <em><strong>1</strong></em><br/>INTERACTIVE: <em><strong>0</strong></em>{:/}
**Inactive**{::nomarkdown}<pre><code>  inactive</code></pre>{:/} | .04 | This field is used to inactivate a nature of order. | ENUMERATION |  | {::nomarkdown}ACTIVE: <em><strong>0</strong></em><br/>INACTIVE: <em><strong>1</strong></em>{:/}
**Front/backdoor**{::nomarkdown}<pre><code>  front_backdoor</code></pre>{:/} | .05 | This field is used to identify entries that are used during an OE/RR<br/>dialog (frontdoor), and entries that are used by ancillary services<br/>(backdoor). | ENUMERATION |  | {::nomarkdown}backdoor: <em><strong>B</strong></em><br/>frontdoor: <em><strong>F</strong></em><br/>both: <em><strong>X</strong></em>{:/}
**Dc Only**{::nomarkdown}<pre><code>  dc_only</code></pre>{:/} | .06 | This is a flag that determines if this nature is to be used only when<br/>discontinuing an order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Create Action**{::nomarkdown}<pre><code>  create_action</code></pre>{:/} | .11 | This field determines if an entry will be created in the Order Action<br/>multiple for this order; if not, then only a status update will occur. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Print Chart Copy**{::nomarkdown}<pre><code>  print_chart_copy</code></pre>{:/} | .12 | This field determines if this entry/action should generate a Chart copy. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Print Daily Summary**{::nomarkdown}<pre><code>  print_daily_summary</code></pre>{:/} | .13 | This field determines if this entry/action should appear on the<br/>Daily Order Summary. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Default Signature Status**{::nomarkdown}<pre><code>  default_signature_status</code></pre>{:/} | .14 | This is the signature status that will be assigned to an order having this<br/>nature; if a signature is not applicable, this field should be null. | ENUMERATION |  | {::nomarkdown}NOT REQUIRED due to cancel: <em><strong>5</strong></em><br/>NOT SIGNED: <em><strong>2</strong></em><br/>ON CHART w/written orders: <em><strong>0</strong></em><br/>NOT REQUIRED: <em><strong>3</strong></em><br/>ON CHART w/printed orders: <em><strong>4</strong></em><br/>SERVICE CORRECTION to signed order: <em><strong>6</strong></em><br/>ELECTRONIC: <em><strong>1</strong></em>{:/}
**Print Work Copy**{::nomarkdown}<pre><code>  print_work_copy</code></pre>{:/} | .15 | This field determines if this entry/action should generate a Work Copy. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Include In Active Orders**{::nomarkdown}<pre><code>  include_in_active_orders</code></pre>{:/} | .16 | This determines if orders dc'd with this nature are included in the Active<br/>Orders list; if so, they will be shown for the number of hours specified<br/>by the Active Orders Context Hours parameter, as with other dc'd orders. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated with a <br/>Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID). A unique meaningless integer assigned to reference <br/>terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair Status and Effective Date/Time for each reference term. | OBJECT |  | [Effective_Date_time-100_0299](#Effective_Date_time-100_0299)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Effective_Date_time-100_0299"></a>Effective Date/time (100.0299)

<dl>
<dt>ID</dt><dd>Effective_Date_time-100_0299</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the Status of the reference term was established. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'.  If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event.  If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}