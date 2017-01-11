---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDERS APPLICABLE 

 property | value 
--- | --- 
 label | ORQQPXRM REMINDERS APPLICABLE
 tag | APPL
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | ARRAY
 description | Returns a list of clinical reminders due/applicable or not applicable tothe patient.


### Method description

 property | value 
--- | --- 
 Leading comment lines | D APPL^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078,ORQQPXRM REMINDER CATEGORIES

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier from the patient file [#2] | 
| HOSPITAL LOCATION | LITERAL | 16 |  | Patients location from HOSPITAL LOCATION [#44]. May be null. | 




Generated on January 11th 2017, 6:34:23 am