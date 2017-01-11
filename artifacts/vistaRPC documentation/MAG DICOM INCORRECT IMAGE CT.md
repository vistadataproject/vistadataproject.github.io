---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM INCORRECT IMAGE CT 

 property | value 
--- | --- 
 label | MAG DICOM INCORRECT IMAGE CT
 tag | CORRECT
 routine | [MAGDRPC8](http://code.osehra.org/dox/Routine_MAGDRPC8_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ On occasion the software on the DICOM Gateway needs to knowthe number of image files that need to be corrected.This RPC is a general-purpose one that fetches this value fromthe VistA system.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired. | 
| MACHID | LITERAL | 30 | true | The value of this parameter is a string.This string (usually only one character) identifies the DICOMGateway for which the request is being posted. | 




 ###### Generated on January 11th 2017, 6:39:43 am