---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL LIST 

 property | value 
--- | --- 
 label | ORQQPL LIST
 tag | LIST
 routine | [ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
 return value type | ARRAY
 description | Function returns a list of problems for a patient.


### Method description

 property | value 
--- | --- 
 Method comment | return pt's problem list in format: ien^description^
 Leading comment lines | ICD^onset^last modified^SC^SpExp,STATUS = status of problems to return: (A)CTIVE, (I)NACTIVE, ("")ALL

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL | 16 | true | The record number of the patient from the Patient FIle (#2). | 
| STATUS | LITERAL | 2 |  | The status of the problems to retrieve. A = Active problems only, I = Inactive problems only, \\ or undefined = all problems regardless ofstatus. | 




Generated on January 11th 2017, 6:34:23 am