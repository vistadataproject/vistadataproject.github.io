---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC APPTS BY PATIENT 

 property | value 
--- | --- 
 label | ORRC APPTS BY PATIENT
 tag | APPT
 routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns a list of the patient's appointments, includingscheduled procedures, within a given time frame.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2. | 
| START | LITERAL |  | true | This is the date to start searching for appointments, in the formYYYYMMDDHHMMSS. | 
| STOP | LITERAL |  | true | This is the date to stop searching for appointments, in the formYYYYMMDDHHMMSS. | 
| DETAILS | LITERAL |  | true | This flag indicates whether to return the details or note text with eachappointment (true) or just the list of appointment ID's (false). | 




 ###### Generated on January 11th 2017, 6:39:43 am