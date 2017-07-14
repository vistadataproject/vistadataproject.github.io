---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM ROUTE LOG XMIT<br/>
# MAG DICOM ROUTE LOG XMIT

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ When a file has been routed, information needs to be kept aboutthe fact that a copy has been made. In order to log thisinformation, the routing transmitter will call this RPC. This RPC will take care of all logging of statistics that isneeded after a file has been transmitted. There are six inputparameters: the internal entry number of the queue entry (D0),the internal entry number of the destination to which it wastransmitted (DEST) and the internal entry number of the locationfrom which it was transmitted (LOCATION). The input parameter(STATUS) is equal to either "SENT" or "FAILED", depending on theoutcome of the transmission. The value of the input-parameter TOis the name of the file at its destination (later to be used forpurging the file). The value of the parameter XMIT is thetimestamp of the start of the transmission.

## Properties

Property | Value
--- | ---
Label | LOGXIMG
Routine | [MAGDRPC7](http://code.osehra.org/dox/Routine_MAGDRPC7_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
QUEUE | LITERAL | 20 | true | The value of this parameter is a pointer to ^MAGQUEUE(2006.035).This pointer identifies the queue-entry that caused the transmission.The value of this pointer will be used to retrieve the time-stampwhen the entry was made into the queue and the internal entry numberof the image involved.
DEST | LITERAL | 64 | true | The value of this parameter is a pointer to either ^MAG(2005.2)or ^MAGDICOM(2006.585).This pointer identifies the destination to which the imageswere to be transmitted.
LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.
STATUS | LITERAL | 30 | true | The value of this parameter is a string that identifies thenew status of the current entry in the Transmission Queue.Possible values are &quot;SENDING&quot;, &quot;SENT&quot; and &quot;FAILED&quot;.
FILNAM | LITERAL | 200 | true | The value of this parameter is a string.This string value represents the name of the image file at its(remote) location.
XMIT | LITERAL | 20 | true | The value of this parameter is a (FileMan-formatted) date/time value.This value represents the time-stamp for the moment when the transmissionof the image file started.
MECH | LITERAL | 10 | true | The value of this parameter is an integer value (1 or 2).This number defines the mechanism that will be used to transmitthe images:   1 &#x3D; standard copy   2 &#x3D; DICOM copy



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}