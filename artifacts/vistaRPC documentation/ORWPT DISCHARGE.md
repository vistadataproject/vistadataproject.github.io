---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPT DISCHARGE 

 property | value 
--- | --- 
 label | ORWPT DISCHARGE
 tag | DISCHRG
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | SINGLE VALUE
 description | Given a patient and an admission date, return the discharge date/time.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | The patient ien (i.e., DFN). | 
| vs:Input_Parameter-8994_02 | ADMITDT | LITERAL |  | true | Date the patient was admitted. | 