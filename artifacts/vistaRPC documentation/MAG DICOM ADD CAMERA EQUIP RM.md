---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM ADD CAMERA EQUIP RM 

 property | value 
--- | --- 
 label | MAG DICOM ADD CAMERA EQUIP RM
 tag | ADDROOM
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | ARRAY
 description | Check the OUTSIDE STUDY Camera Equipment Room for the IMAGING LOCATION.If it is not present, add it.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RAEXAM | LITERAL |  | true | String of exam/case identifiers separated by '^':  ^01: IEN of the patient in the RAD/NUC MED PATIENT file (#70)  ^02: IEN in the REGISTERED EXAMS multiple (sub-file #70.02)  ^03: IEN in the EXAMINATIONS multiple (sub-file #70.03) | 