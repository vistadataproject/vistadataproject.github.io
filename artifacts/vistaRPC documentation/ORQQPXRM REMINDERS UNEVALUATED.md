---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDERS UNEVALUATED 

 property | value 
--- | --- 
 label | ORQQPXRM REMINDERS UNEVALUATED
 tag | LIST
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | ARRAY
 description | Returns list of CPRS reminders for patient/location (no evaluation isdone)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 16 | true | Patient identifier from the patient file [#2] | 
| vs:Input_Parameter-8994_02 | HOSPITAL LOCATION | LITERAL | 16 |  | Patients location from HOSPITAL LOCATION [#44]. May be null | 