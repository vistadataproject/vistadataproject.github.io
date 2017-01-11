---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET RADIOLOGY PROCEDURES 

 property | value 
--- | --- 
 label | MAGV GET RADIOLOGY PROCEDURES
 tag | GETPROCS
 routine | [MAGVIM10](http://code.osehra.org/dox/Routine_MAGVIM10_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns a single Radiology Procedure, or a list of them,for the INSTITUTION of the input STATION NUMBER, and the input IMAGINGLOCATION. Updated from MAG DICOM RADIOLOGY PROCEDURES (MAG*3.0*118).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STATIONUM | LITERAL | 30 | true | This is the STATION NUMBER (#99) of an INSTITUTION file (#4) entryused for the query. | 
| IENMAGLOC | LITERAL | 30 | true | IEN of an entry in the IMAGING LOCATIONS file (#79.1).will be filtered from the return array. | 
| IENRAPROC | LITERAL | 30 | true | IEN of an entry in the RAD/NUC MED PROCEDURES file (#71). If present,restricts the output to the single procedure requested. | 




 Generated on January 11th 2017, 7:15:04 am