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

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 16 | true | The record number of the patient from the Patient FIle (#2). | 
| vs:Input_Parameter-8994_02 | STATUS | LITERAL | 2 |  | The status of the problems to retrieve. A = Active problems only, I = Inactive problems only, \\ or undefined = all problems regardless ofstatus. | 