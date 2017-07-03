---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM GET NEXT QUEUE ENTRY
# MAG DICOM GET NEXT QUEUE ENTRY

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC will check if there are any new images to be transmitted,and will return information about the first or next one (if any)in the DICOM transmission queue.

Property | Value
--- | ---
Label | NEXTIMG
Routine | [MAGDRPC4](http://code.osehra.org/dox/Routine_MAGDRPC4_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired,i.e., from where they are being transmitted.
D0 | LITERAL | 20 | true | The value of this optional parameter is a pointer into theDICOM IMAGE OUTPUT file (#2006.574). If this paramater is omitted,this RPC will find the first (if any) study in this file to betransmitted. If this parameter is specified, its value is intendedto be the &quot;D0&quot; value for the most recent image transmitted, and thisRPC will find the next (if any) image to be transmitted.
D1 | LITERAL | 20 | true | The value of this optional parameter is a pointer into theIMAGE multiple of the DICOM IMAGE OUTPUT file (#2006.574). If this paramater is omitted,this RPC will find the first (if any) image in this file for thecurrent study to betransmitted. If this parameter is specified, its value is intendedto be the &quot;D1&quot; value for the most recent image transmitted, and thisRPC will find the next (if any) image to be transmitted.
SENT | LIST | 10000 | true | This parameter is an array. Each element of this arraycontains internal entry numbers that identify an entryin the send-queue that has been transmitted successfully.The RPC will use the contents of this array to removeentries from the queue that have been transmitted.
CHECK | LITERAL | 5 | true | The value of this parameter is a boolean value.When the value of this parameter is non-zero (true),the RPC will not mark the queue entry as being &quot;in transmission&quot;.This feature is used when the RPC is being called for thesole purpose of deternining whether or not there areany entries in the queue.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}