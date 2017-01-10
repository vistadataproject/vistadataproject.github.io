---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC ALERTS BY PATIENT 

 property | value 
--- | --- 
 label | ORRC ALERTS BY PATIENT
 tag | PAT
 routine | [ORRCXQ](http://code.osehra.org/dox/Routine_ORRCXQ_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns a list of the patient's non-ADT alerts.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2. | 
| vs:Input_Parameter-8994_02 | USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 