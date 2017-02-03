---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Nature_Of_Order-100_02 

<dl>
<dt>id</dt><dd>Nature_Of_Order-100_02</dd>
<dt>fmId</dt><dd>100.02</dd>
<dt>label</dt><dd>Nature Of Order</dd>
<dt>location</dt><dd>^ORD(100.02,</dd>
<dt>description</dt><dd>This file should not be added to or deleted from.  It determines the<br/>actions that are to be taken based on the nature of an order or change to<br/>an order.<br/> <br/>Per VHA Directive 2005-044, this file has been \locked down\ by Data <br/>Standardization (DS).  The file definition (i.e. data dictionary) shall <br/>not be modified.  All additions, changes and deletions to entries in the <br/>file shall be done by Enterprise Reference Terminology (ERT) using the <br/>Master File Server (MFS), provided by Common Services (CS).   Creating <br/>and/or editing locally defined fields in the file are not permitted.  Use <br/>of locally defined fields that were created prior to VHA Directive <br/>2005-044 shall not be supported.<br/> <br/>The Orders Domain has approved editing of the following fields in this<br/>file:<br/> - PRINT CHART COPY (#.12)<br/> - PRINT DAILY SUMMARY (#.13)<br/> - PRINT WORK COPY (#.15)<br/> - INCLUDE IN ACTIVE ORDERS (#.16)<br/>This may be accomplished via the option \Print Parameters for Nature of <br/>Order\ [ORCL NATURE], on the \Print/Report Parameters\ [OR PARAM PRINTS] <br/>menu.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number |  | IEN |  |  |  | 
| name | .01 | Name | {::nomarkdown}This is the name of the Nature of Order.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| code | .02 | Code | {::nomarkdown}This is a single character abbreviation that is used in HL7 messages<br/>between CPRS and the ancillary packages.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| noninteractive | .03 | Non-interactive | {::nomarkdown}This field identifies this entry for interactive or non-interactive<br/>use.{:/} | ENUMERATION |  | INDEXED | {::nomarkdown}<dl><dt>1</dt><dd>NON-INTERACTIVE</dd><dt>0</dt><dd>INTERACTIVE</dd></dl>{:/} | 
| inactive | .04 | Inactive | {::nomarkdown}This field is used to inactivate a nature of order.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>ACTIVE</dd><dt>1</dt><dd>INACTIVE</dd></dl>{:/} | 
| front_backdoor | .05 | Front/backdoor | {::nomarkdown}This field is used to identify entries that are used during an OE/RR<br/>dialog (frontdoor), and entries that are used by ancillary services<br/>(backdoor).{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>B</dt><dd>backdoor</dd><dt>F</dt><dd>frontdoor</dd><dt>X</dt><dd>both</dd></dl>{:/} | 
| dc_only | .06 | Dc Only | {::nomarkdown}This is a flag that determines if this nature is to be used only when<br/>discontinuing an order.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| create_action | .11 | Create Action | {::nomarkdown}This field determines if an entry will be created in the Order Action<br/>multiple for this order; if not, then only a status update will occur.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| print_chart_copy | .12 | Print Chart Copy | {::nomarkdown}This field determines if this entry/action should generate a Chart copy.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| print_daily_summary | .13 | Print Daily Summary | {::nomarkdown}This field determines if this entry/action should appear on the<br/>Daily Order Summary.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| default_signature_status | .14 | Default Signature Status | {::nomarkdown}This is the signature status that will be assigned to an order having this<br/>nature; if a signature is not applicable, this field should be null.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>5</dt><dd>NOT REQUIRED due to cancel</dd><dt>2</dt><dd>NOT SIGNED</dd><dt>0</dt><dd>ON CHART w/written orders</dd><dt>3</dt><dd>NOT REQUIRED</dd><dt>4</dt><dd>ON CHART w/printed orders</dd><dt>6</dt><dd>SERVICE CORRECTION to signed order</dd><dt>1</dt><dd>ELECTRONIC</dd></dl>{:/} | 
| print_work_copy | .15 | Print Work Copy | {::nomarkdown}This field determines if this entry/action should generate a Work Copy.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| include_in_active_orders | .16 | Include In Active Orders | {::nomarkdown}This determines if orders dc'd with this nature are included in the Active<br/>Orders list; if so, they will be shown for the number of hours specified<br/>by the Active Orders Context Hours parameter, as with other dc'd orders.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated with a <br/>Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID). A unique meaningless integer assigned to reference <br/>terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference term.{:/} | [OBJECT] |  |  | [Effective_Date_time-100_0299](#Effective_Date_time-100_0299)  | 

## <a name="Effective_Date_time-100_0299"></a>Effective_Date_time-100_0299 

<dl>
<dt>id</dt><dd>Effective_Date_time-100_0299</dd>
<dt>label</dt><dd>Effective Date/time</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the Status of the reference term was established.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE'.  If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event.  If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 5:29:32 am</p>{:/}