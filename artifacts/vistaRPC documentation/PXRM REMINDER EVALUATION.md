---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PXRM REMINDER EVALUATION 

 property | value 
--- | --- 
 label | PXRM REMINDER EVALUATION
 tag | ALIST
 routine | [PXRMRPCA](http://code.osehra.org/dox/Routine_PXRMRPCA_source.html)
 return value type | ARRAY
 description |  Allows evaluation of a list of reminders. Returns a list of clinical reminders due/applicable or not applicable to the patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier from the patient file [#2] | 
| REMINDER ARRAY | LIST | 16 | true | List of reminders in format :           array(1) = reminder ien1 (from #811.9)         array(2) = reminder ien2         etc | 




Generated on January 11th 2017, 6:34:23 am