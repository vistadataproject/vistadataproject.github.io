---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET PATIENT 

 property | value 
--- | --- 
 label | MAG DICOM GET PATIENT
 tag | PAT
 routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns patient info, reporting in one singlecall the information from   DEM^VADPT  -- Demographic Information   ADD^VADPT  -- Address Information   INP^VADPT  -- In-Patient Information   SDA^VADPT  -- Appointment Information

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 30 | true | The value of this parameter is a pointer to ^DPT().This pointer identifies the patient for whom informationis being requested. | 




Generated on January 11th 2017, 6:34:23 am