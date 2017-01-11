---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER EVALUATION 

 property | value 
--- | --- 
 label | ORQQPXRM REMINDER EVALUATION
 tag | ALIST
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | ARRAY
 description | Allows evaluation of a list of reminders. Returns a list of clinicalreminders due/applicable or not applicable to the patient.


### Method description

 property | value 
--- | --- 
 Method comment | DBIA 3078
 Leading comment lines | ORQQPXRM REMINDERS APPLICABLE

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | Patient identifier from the patient file [#2] | 
| REMINDER ARRAY | LIST | 16 | true | List of reminders in format :             array(1) = reminder ien1 (from #811.9)          array(2) = reminder ien2          etc | 