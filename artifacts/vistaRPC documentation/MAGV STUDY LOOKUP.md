---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV STUDY LOOKUP 

 property | value 
--- | --- 
 label | MAGV STUDY LOOKUP
 tag | LOOKUP
 routine | [MAGVSTDY](http://code.osehra.org/dox/Routine_MAGVSTDY_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Looks up the imaging case using the accession number provided by thecalling application.   Obtains patient demographic data, and checksthe data for accuracy. (MAG*3.0*118)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CASENUMB | LITERAL | 16 | true | CASENUMB = ACCESSION NUMBER PASSED FROM THE CLIENT. | 
| IMGSVC | LITERAL | 3 | true | RAD OR CON.  No other entries are allowed. | 
| PNAMEDCM | LITERAL | 64 | true | Patient's Name from the DICOM header (0010,0010). | 
| PIDDCM | LITERAL | 64 | true | Patient ID from DICOM header (0010,0020). | 
| PDOBDCM | LITERAL | 8 | true | Patient's Birth Date from DICOM header (0010,0030). | 
| PSEXDCM | LITERAL | 1 | true | Patient's Sex from DICOM header (0010,0040). | 
| PICNDCM | LITERAL | 16 | true | Patient's VA Integration Control Number. | 