---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM ROUTE EVAL LOG
# MAG DICOM ROUTE EVAL LOG

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ As a rule evaluator runs, it will produce an activity log.This RPC can be called to return information from this logfrom the VistA system to the DICOM Gateway.

Property | Value
--- | ---
Label | EVALLOG
Routine | [MAGDRPC6](http://code.osehra.org/dox/Routine_MAGDRPC6_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TASK | LITERAL | 30 | true | The value of this parameter is a pointer to a TaskMan task.This RPC will return log-information for the specified task.
MSG | LITERAL | 30 | true | The value of this parameter is an integer number.This value is &quot;one less than&quot; the number of the first log-entryto be returned.
MAX | LITERAL | 30 | true | The value of this parameter is an integer number.This value is the maximum number of log-entriesto be returned.
LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}