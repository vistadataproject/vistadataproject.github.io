---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE EVAL LOG 

 property | value 
--- | --- 
 label | MAG DICOM ROUTE EVAL LOG
 tag | EVALLOG
 routine | [MAGDRPC6](http://code.osehra.org/dox/Routine_MAGDRPC6_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ As a rule evaluator runs, it will produce an activity log.This RPC can be called to return information from this logfrom the VistA system to the DICOM Gateway.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TASK | LITERAL | 30 | true | The value of this parameter is a pointer to a TaskMan task.This RPC will return log-information for the specified task. | 
| MSG | LITERAL | 30 | true | The value of this parameter is an integer number.This value is \one less than\ the number of the first log-entryto be returned. | 
| MAX | LITERAL | 30 | true | The value of this parameter is an integer number.This value is the maximum number of log-entriesto be returned. | 
| LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired. | 