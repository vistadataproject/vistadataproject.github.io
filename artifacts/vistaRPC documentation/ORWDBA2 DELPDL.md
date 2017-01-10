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

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORCIEN | REFERENCE | 255 | true | The clinician's internal ID number. | 
| vs:Input_Parameter-8994_02 | ORDXA | REFERENCE | 255 | true | Array of diagnoses codes to be deleted from the clinician's personaldx list. | 