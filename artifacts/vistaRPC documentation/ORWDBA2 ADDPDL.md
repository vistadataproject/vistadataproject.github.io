---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA2 ADDPDL 

 property | value 
--- | --- 
 label | ORWDBA2 ADDPDL
 tag | ADDPDL
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | SINGLE VALUE
 description | Add a new Clinician's Personal DX List or add new ICD9 codes to an existing Clinician's Personal DX List. The Personal DX list is stored in the CPRS Diagnosis Provider file, file # 5000017

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORCIEN | REFERENCE | 255 | true | The clinician's internal ID number. | 
| vs:Input_Parameter-8994_02 | ORDXA | REFERENCE | 255 | true | The array variable of diagnosis codes to be added to the clinician's personal diagnoses list. | 