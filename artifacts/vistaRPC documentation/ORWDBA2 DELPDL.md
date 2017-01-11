---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA2 DELPDL 

 property | value 
--- | --- 
 label | ORWDBA2 DELPDL
 tag | DELPDL
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | SINGLE VALUE
 description | Delete a selected diagnosis code from a Clinician's Personal DX List. The personal dx list is stored in CPRS Diagnosis Provider file, file # 5000017.


### Method description

 property | value 
--- | --- 
 Method comment | Delete from Personal Diagnosis List
 Leading comment lines | Delete a selected diagnosis code or group of diagnoses codes from a,Clinician's Personal DX List.,Input Variables:,ORCIEN    Clinician Internal ID number,ORDXA     Array of dx codes to be deleted from personal dx list,Output Variable:,Y         Return value, 1 successful, 0 unsuccessful,Local Variables:,DXI       Diagnosis code array index,EM        Error Message,FDA       FileMan Data Array,IEN       Interanl Entry Number,RF        Record Found

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORCIEN | REFERENCE | 255 | true | The clinician's internal ID number. | 
| ORDXA | REFERENCE | 255 | true | Array of diagnoses codes to be deleted from the clinician's personaldx list. | 