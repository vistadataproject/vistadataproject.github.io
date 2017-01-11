---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC VITALS BY PATIENT 

 property | value 
--- | --- 
 label | ORRC VITALS BY PATIENT
 tag | LIST
 routine | [ORRCVIT](http://code.osehra.org/dox/Routine_ORRCVIT_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns recent vitals measurements taken for the patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2. | 
| START | LITERAL |  | true | This is the date to start searching for vitals, in the form YYYYMMDDHHMMSS;if no date range is specified, up to 5 sets of measurements will be returned. | 
| STOP | LITERAL |  | true | This is the date to stop searching for vitals, in the form YYYYMMDDHHMMSS;if no date range is specified, up to 5 sets of measurements will bereturned. | 
| DETAILS | LITERAL |  | true | This flag indicates whether to return the details of each vital signtaken (true), or just the list of measurement set IDs (false). | 




 ###### Generated on January 11th 2017, 6:39:43 am