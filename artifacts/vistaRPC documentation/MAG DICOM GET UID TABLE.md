---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET UID TABLE 

 property | value 
--- | --- 
 label | MAG DICOM GET UID TABLE
 tag | SERVER
 routine | [MAGDUID3](http://code.osehra.org/dox/Routine_MAGDUID3_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This Remote Procedure transmits the current content of theUID table from VistA to the DICOM Gateways.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OFFSET | LITERAL | 100 | true | The value of this parameter is a string. The first time this Remote Procedure is called for a certain\master file\, the value of this parameter must be empty. Each next time this Remote Procedure is called for the same\master file\, the value of this parameter must be copied fromthe return array, so that the Remote Procedure will continuewhere it left off in the previous call. | 
| MAX | LITERAL | 15 | true | The value of this parameter is a positive integer number.This value indicates the maximum number of values that may bereturned in each call to this Remote Procedure. | 