---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET AE ENTRY 

 property | value 
--- | --- 
 label | MAG DICOM GET AE ENTRY
 tag | AENAME
 routine | [MAGVCAE](http://code.osehra.org/dox/Routine_MAGVCAE_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Returns DICOM AE SECURITY MATRIX file (#2006.9192) information for therequested Application Name and Location (MAG*3.0*79).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| APPNAME | LITERAL |  | true | This is the Application Name (AE NAME) to lookup. | 
| LOCATION | LITERAL |  |  | This is the location used to filter the DICOM AE SECURITY MATRIX entries. | 




 ###### Generated on January 11th 2017, 6:39:43 am