---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DPT TEST PATIENT 

 property | value 
--- | --- 
 label | DSIC DPT TEST PATIENT
 tag | TEST
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | SINGLE VALUE
 description | This will return a Boolean value indicating whether or not the patient record is a test patient or a real patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PAT | LITERAL | 35 | true | This is any lookup value for a patient (name, SSN, DFN, etc.) | 
| ISSSN | LITERAL | 1 | true | This is a Boolean flag.  If 1, then the PAT lookup value is the patient's SSN. | 