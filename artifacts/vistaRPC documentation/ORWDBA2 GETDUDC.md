---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA2 GETDUDC 

 property | value 
--- | --- 
 label | ORWDBA2 GETDUDC
 tag | GETDUDC
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | ARRAY
 description | This returns a list of unique ICD9 diagnoses codes and their descriptions on orders placed by a clinician for a patient for today. This will be used to help in filling out the encounter form.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORCIEN | REFERENCE | 255 | true | This is the clinician's internal ID number. | 
| vs:Input_Parameter-8994_02 | ORPTIEN | REFERENCE | 255 | true | This is the patient's internal ID number. | 