---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQXQA PATIENT 

 property | value 
--- | --- 
 label | ORQQXQA PATIENT
 tag | PATIENT
 routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 return value type | ARRAY
 description | Function returns a list of notifications for a patient for the current user.


### Method description

 property | value 
--- | --- 
 Method comment | return current user's notifications for patient ORPT

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | The record number of the patient from the Patient File (#2). | 
| START DATE | LITERAL | 16 |  | Start date for retrieving patient notifications in Fileman format. | 
| STOP DATE | LITERAL | 16 |  | Stop date for retrieving patient notifications in Fileman format. | 