---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB MEDS ON PATIENT 

 property | value 
--- | --- 
 label | PSB MEDS ON PATIENT
 tag | MEDSONPT
 routine | [PSBRPC1](http://code.osehra.org/dox/Routine_PSBRPC1_source.html)
 return value type | ARRAY
 description | This RPC returns indicators if medications are still on a patient.  The patient's DFN will be passed in and a RESULTS array returned with three flags set.  Flags set to 1 for meds are on patient or 0 none per thiscategory.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | Patient DFN | 




Generated on January 11th 2017, 6:34:23 am