---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM LOOKUP STUDY 

 property | value 
--- | --- 
 label | MAG DICOM LOOKUP STUDY
 tag | LOOKUP
 routine | [MAGDRPC4](http://code.osehra.org/dox/Routine_MAGDRPC4_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC looks up a study that might be a Radiology Studyor a Clinical Specialty, based on the specified (case) number.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NUMBER | LITERAL | 30 | true | The value of this parameter is a number that identifies astudy. Such a number would be a date-case number for a Radiologystudy, or just a number for a Consult.The value of this parameter may also be a string that consists ofa \tick-mark\ (`), followed by the internal entry number ofan image. | 




 ###### Generated on January 11th 2017, 6:39:43 am