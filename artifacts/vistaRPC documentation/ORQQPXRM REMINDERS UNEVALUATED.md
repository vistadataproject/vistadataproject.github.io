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


### Method description

 property | value 
--- | --- 
 Leading comment lines | D LIST^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078,ORQQPXRM MENTAL HEALTH

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier from the patient file [#2] | 
| HOSPITAL LOCATION | LITERAL | 16 |  | Patients location from HOSPITAL LOCATION [#44]. May be null | 