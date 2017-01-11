---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC TASKS BY PATIENT 

 property | value 
--- | --- 
 label | ORRC TASKS BY PATIENT
 tag | LIST
 routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
 return value type | ARRAY
 description | This call returns a list of tasks for a patient that are not yetcompleted.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2. | 
| USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200; if definedthen tasks will be returned that USER created or all incomplete tasks ifUSER is linked to the patient in some way. | 
| DUE | LITERAL |  | true | This is a date in the format YYYYMMDD[HHMMSS]; if defined, then onlytasks that are past DUE (i.e. Due Date is prior to DUE) will be returned. | 