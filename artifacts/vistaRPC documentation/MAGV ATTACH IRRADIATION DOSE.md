---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV ATTACH IRRADIATION DOSE 

 property | value 
--- | --- 
 label | MAGV ATTACH IRRADIATION DOSE
 tag | ATTACH
 routine | [MAGVRD01](http://code.osehra.org/dox/Routine_MAGVRD01_source.html)
 return value type | SINGLE VALUE
 description |   +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ This RPC allows irradiation dosage entries to be attached to a series.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL |  |  | This is the patient identifier. | 
| PROCEDURE | LITERAL |  |  | This is the accession number of the procedure related to the irradiation dosage instance. | 
| STUDY UID | LITERAL |  |  | This is the study UID related to the irradiation dosage instance. | 
| IRRADIATION INSTANCE UID | LITERAL |  |  | This is the irradiation instance UID of a CT irradiation dosage instance. | 
| ATTRIBUTES | LIST |  |  |   Input parameters are name-value pairs sent as successive integer subscripts in an array that should be passed in by reference.    The values passed in should be in the format <fname>`<value>, where <fname> is a field name and <value> is the value to which that field should be set. | 
| TYPE | LITERAL |  |  | This is the type of irradiation instance - \CT\ or \FLUORO\. | 
| SERUID | LITERAL |  |  | This is the series UID related to the irradiation dosage instance. | 




 ###### Generated on January 11th 2017, 6:39:43 am