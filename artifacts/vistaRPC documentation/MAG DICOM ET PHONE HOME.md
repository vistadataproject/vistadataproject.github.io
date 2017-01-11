---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM ET PHONE HOME 

 property | value 
--- | --- 
 label | MAG DICOM ET PHONE HOME
 tag | INFO
 routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Each day, a DICOM Gateway reports a number of statisticsto the Imaging Team in Silver Spring (Maryland).Part of that information that is transmitted needs to be fetchedfrom the VistA System. This RPC fetches all information to be reported from the VistA system.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOCATION | LITERAL | 20 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which this DICOM Gatewayis located. | 




 ###### Generated on January 11th 2017, 6:39:43 am