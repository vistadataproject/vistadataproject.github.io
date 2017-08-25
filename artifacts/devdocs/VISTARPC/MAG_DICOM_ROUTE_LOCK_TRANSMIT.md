---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM ROUTE LOCK TRANSMIT<br/>
# MAG DICOM ROUTE LOCK TRANSMIT

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ The various routing transmitters avoid that multiple transmittersattempt to do the same task at the same time by LOCKing somenames of global variables. They will acquire and release theseLOCKs by calling this RPC. This RPC will either attempt to LOCK a name, or release itscurrent LOCK on the name, depending on the value of inputparameter PLUSMIN. The other input parameters identify adestination to which files are to be sent (D0) and the locationfrom which the files are being sent (LOCATION).

## Properties

Property | Value
--- | ---
Label | LOCK
MUMPS Implementation | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
D0 | LITERAL | 30 | true | The value of this parameter is a pointer to either ^MAG(2005.2)or ^MAGDICOM(2006.585).This pointer identifies the destination to which the imagesare to be transmitted.
LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.
PLUSMIN | LITERAL | 10 | true | The value of this parameter is a number. When the value of thisnumber is zero, this RPC will perform one (decremental) unLOCK;when the value of this number is nonzero, this RPC will attemptto perform one (incremental) LOCK with a time-out of zero seconds.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}