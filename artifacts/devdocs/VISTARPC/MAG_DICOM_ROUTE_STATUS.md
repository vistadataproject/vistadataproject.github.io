---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM ROUTE STATUS
# MAG DICOM ROUTE STATUS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ When the Routing Gateway has made an attempt to transmit a file,it will call this RPC to change the status of theentry in the transmission queue to either "SENT" or "FAILED". This RPC will change the status of the entry in the transmissionqueue (file # 2005.035) with entry-number D0 to the indicatedstatus.

Property | Value
--- | ---
Label | STATUS
Routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
D0 | LITERAL | 30 | true | The value of this parameter is a pointer to an entry in theTransmission Queue (^MAGQUEUE(2006.035,D0)).The status of this entry in the Transmission Queue will beupdated by this RPC.
STATUS | LITERAL | 30 | true | The value of this parameter is a string that identifies thenew status of the current entry in the Transmission Queue.Possible values are &quot;SENDING&quot;, &quot;SENT&quot; and &quot;FAILED&quot;.
LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}