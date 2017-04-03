---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Order_Status-100_01 

<dl>
<dt>id</dt><dd>Order_Status-100_01</dd>
<dt>fmId</dt><dd>100.01</dd>
<dt>label</dt><dd>Order Status</dd>
<dt>location</dt><dd>^ORD(100.01,</dd>
<dt>description</dt><dd>This file contains the possible statuses that may be associated with<br/>an order in OE/RR.<br/> <br/>Per VHA Directive 2005-044, this file has been \locked down\ by Data <br/>Standardization (DS).  The file definition (i.e. data dictionary) shall <br/>not be modified.  All additions, changes and deletions to entries in the <br/>file shall be done by Enterprise Reference Terminology (ERT) using the <br/>Master File Server (MFS), provided by Common Services (CS).   Creating <br/>and/or editing locally defined fields in the file are not permitted.  Use <br/>of locally defined fields that were created prior to VHA Directive <br/>2005-044 shall not be supported.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number | {::nomarkdown}This is the number of the status entry.<br/>All entries are reserved.{:/} | IEN |  |  |  | 
| name | .01 | Name | {::nomarkdown}This is the name of the status.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| short_name | .02 | Short Name | {::nomarkdown}This is a shorter version of the status name to be displayed on the<br/>Orders tab of the CPRS Chart.{:/} | STRING |  |  |  | 
| abbreviation | .1 | Abbreviation | {::nomarkdown}This is the abbreviation of the status to be displayed on order<br/>reviews and printouts.<br/>The abbreviation is placed in its own node of the global and the entire<br/>node is reserved.  This allows for the possibility of an abbreviation<br/>which contains an up arrow.{:/} | STRING |  |  |  | 
| description | 2 | Description | {::nomarkdown}This is the description of the status.{:/} | STRING |  |  |  | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated with a <br/>Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference term.{:/} | [OBJECT] |  |  | [Effective_Date_time-100_0199](#Effective_Date_time-100_0199)  | 

## <a name="Effective_Date_time-100_0199"></a>Effective_Date_time-100_0199 

<dl>
<dt>id</dt><dd>Effective_Date_time-100_0199</dd>
<dt>fmId</dt><dd>100.0199</dd>
<dt>label</dt><dd>Effective Date/time</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the Status of the reference term was established.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE'.  If <br/>'ACTIVE', then the term will be accessible by end-users to document a <br/>particular patient event.  If 'INACTIVE', then the term will only be <br/>accessible by the application to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:19 pm</p>{:/}