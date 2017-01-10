---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQVS VISITS_APPTS 

 property | value 
--- | --- 
 label | ORQQVS VISITS_APPTS
 tag | VSITAPPT
 routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 return value type | ARRAY
 description | Returns a list of patient appointments and visits for a date/time range.location.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 16 | true | Patient ID (DFN) from Patient File [#2]. | 
| vs:Input_Parameter-8994_02 | START DATE/TIME | LITERAL | 16 | true | Start date/time to return visits and appointments.  In internal FileMan format. | 
| vs:Input_Parameter-8994_02 | STOP DATE/TIME | LITERAL | 16 | true | Stop date/time to return visits and appointments. In internal FileMan format. | 
| vs:Input_Parameter-8994_02 | DUMMY | LITERAL | 16 | true | This is a dummy parameter so the Broker won't crash.appointments for this location only will be returned. | 