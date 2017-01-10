---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PXRM REMINDERS (UNEVALUATED) 

 property | value 
--- | --- 
 label | PXRM REMINDERS (UNEVALUATED)
 tag | LIST
 routine | [PXRMRPCA](http://code.osehra.org/dox/Routine_PXRMRPCA_source.html)
 return value type | ARRAY
 description | Returns list of CPRS reminders for patient/location (no evaluation is done)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 16 | true |  Patient identifier from the patient file [#2] | 
| vs:Input_Parameter-8994_02 | HOSPITAL LOCATION | LITERAL | 16 | true | Patients location from HOSPITAL LOCATION [#44]. May be null | 